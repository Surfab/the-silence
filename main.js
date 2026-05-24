const { app, BrowserWindow, ipcMain, dialog, screen } = require('electron')
const path = require('path')
const fs   = require('fs')
const jsmediatags = require('jsmediatags')

const MEDIA_EXTS = /\.(mp3|flac|wav|aac|ogg|m4a|mp4|mkv|mov|avi|webm|m4v|ogv)$/i

let mainWindow   = null
let widgetWindow = null
let pendingFile  = null
let quitting     = false

app.on('open-file', (event, filePath) => {
  event.preventDefault()
  if (MEDIA_EXTS.test(filePath)) {
    if (mainWindow?.webContents) {
      mainWindow.webContents.send('open-file', filePath)
    } else {
      pendingFile = filePath
    }
  }
})

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1100, height: 700, minWidth: 280, minHeight: 240,
    titleBarStyle: 'hiddenInset',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      webSecurity: false
    }
  })
  mainWindow.loadFile('index.html')
  mainWindow.webContents.once('did-finish-load', () => {
    if (pendingFile) { mainWindow.webContents.send('open-file', pendingFile); pendingFile = null }
  })
  mainWindow.on('close', (e) => {
    if (!quitting) { e.preventDefault(); mainWindow.hide() }
  })
  mainWindow.on('closed', () => { mainWindow = null })
}

function createWidget() {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize
  widgetWindow = new BrowserWindow({
    width: 300, height: 115,
    x: width - 320, y: height - 135,
    frame: false,
    transparent: true,
    backgroundColor: '#00000000',
    alwaysOnTop: true,
    resizable: false,
    show: false,
    skipTaskbar: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
    }
  })
  widgetWindow.loadFile('widget.html')
  widgetWindow.on('closed', () => { widgetWindow = null })
  widgetWindow.on('hide',   () => { mainWindow?.webContents.send('widget-hidden') })
}

app.whenReady().then(createWindow)
app.on('before-quit', () => { quitting = true })
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit() })
app.on('activate', () => {
  if (mainWindow) mainWindow.show()
  else createWindow()
})

ipcMain.handle('open-folder', async () => {
  const result = await dialog.showOpenDialog({ properties: ['openDirectory'] })
  if (result.canceled) return null
  const folderPath = result.filePaths[0]
  return fs.readdirSync(folderPath)
    .filter(f => MEDIA_EXTS.test(f)).sort()
    .map(f => {
      const fullPath = path.join(folderPath, f)
      return { name: f, path: fullPath, size: fs.statSync(fullPath).size }
    })
})

ipcMain.handle('open-files', async () => {
  const result = await dialog.showOpenDialog({
    properties: ['openFile', 'multiSelections'],
    filters: [{ name: 'Media', extensions: ['mp3','flac','wav','aac','ogg','m4a','mp4','mkv','mov','avi','webm','m4v'] }]
  })
  if (result.canceled) return null
  return result.filePaths.map(p => ({ name: path.basename(p), path: p, size: fs.statSync(p).size }))
})

ipcMain.handle('get-tags', async (event, filePath) => {
  return new Promise((resolve) => {
    jsmediatags.read(filePath, {
      onSuccess(tag) {
        const t = tag.tags
        let artDataUrl = null
        if (t.picture) {
          const base64 = Buffer.from(t.picture.data).toString('base64')
          artDataUrl = `data:${t.picture.format};base64,${base64}`
        }
        resolve({
          artDataUrl,
          title:  t.title  || null,
          artist: t.artist || null,
          album:  t.album  || null
        })
      },
      onError() {
        resolve({ artDataUrl: null, title: null, artist: null, album: null })
      }
    })
  })
})

ipcMain.handle('detect-m4a-codec', (event, filePath) => {
  try {
    const buf = Buffer.alloc(65536)
    const fd  = fs.openSync(filePath, 'r')
    const n   = fs.readSync(fd, buf, 0, 65536, 0)
    fs.closeSync(fd)
    for (let i = 0; i < n - 3; i++) {
      if (buf[i]===0x61 && buf[i+1]===0x6c && buf[i+2]===0x61 && buf[i+3]===0x63) return 'alac'
    }
    return 'aac'
  } catch { return 'aac' }
})

ipcMain.handle('read-folder-path', async (event, folderPath) => {
  try {
    const stat = fs.statSync(folderPath)
    if (!stat.isDirectory()) return null
    return fs.readdirSync(folderPath)
      .filter(f => MEDIA_EXTS.test(f)).sort()
      .map(f => {
        const fullPath = path.join(folderPath, f)
        return { name: f, path: fullPath, size: fs.statSync(fullPath).size }
      })
  } catch { return null }
})

ipcMain.handle('set-always-on-top', (event, flag) => {
  if (mainWindow) mainWindow.setAlwaysOnTop(flag)
})

ipcMain.handle('set-window-buttons', (event, visible) => {
  if (mainWindow) mainWindow.setWindowButtonVisibility(visible)
})

ipcMain.handle('toggle-widget', () => {
  if (!widgetWindow) createWidget()
  if (widgetWindow.isVisible()) { widgetWindow.hide(); return false }
  widgetWindow.show(); return true
})

ipcMain.handle('update-widget', (event, data) => {
  if (widgetWindow?.isVisible()) widgetWindow.webContents.send('widget-update', data)
})

ipcMain.handle('widget-cmd', (event, cmd, value) => {
  if (cmd === 'close') { widgetWindow?.hide(); return }
  if (mainWindow && !mainWindow.isDestroyed()) {
    mainWindow.webContents.send('widget-cmd', cmd, value)
  }
})

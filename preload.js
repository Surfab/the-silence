const { contextBridge, ipcRenderer, webUtils } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
  openFolder:     ()       => ipcRenderer.invoke('open-folder'),
  openFiles:      ()       => ipcRenderer.invoke('open-files'),
  getTags:        (p)      => ipcRenderer.invoke('get-tags', p),
  detectM4ACodec: (p)      => ipcRenderer.invoke('detect-m4a-codec', p),
  getPathForFile: (file)   => webUtils.getPathForFile(file),
  setAlwaysOnTop:       (flag)      => ipcRenderer.invoke('set-always-on-top', flag),
  setWindowButtons:     (v)         => ipcRenderer.invoke('set-window-buttons', v),
  toggleWidget:         ()          => ipcRenderer.invoke('toggle-widget'),
  updateWidget:         (data)      => ipcRenderer.invoke('update-widget', data),
  widgetCmd:            (cmd, val)  => ipcRenderer.invoke('widget-cmd', cmd, val),
  onWidgetUpdate:       (cb)        => ipcRenderer.on('widget-update', (_, d) => cb(d)),
  onWidgetCmd:          (cb)        => ipcRenderer.on('widget-cmd', (_, cmd, val) => cb(cmd, val)),
  onWidgetHidden:       (cb)        => ipcRenderer.on('widget-hidden', cb),
  readFolderPath: (p)      => ipcRenderer.invoke('read-folder-path', p),
  onOpenFile:     (cb)     => ipcRenderer.on('open-file', (_, p) => cb(p))
})

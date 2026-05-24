# The Silence

A minimal, elegant media player for macOS built with Electron.

<img width="2150" height="1562" alt="Screenshot" src="https://github.com/user-attachments/assets/ad1a3412-2099-4ef6-9f33-fe95791fd715" />


![The Silence](https://img.shields.io/badge/platform-macOS-lightgrey) ![Electron](https://img.shields.io/badge/electron-33-blue) ![License](https://img.shields.io/badge/license-MIT-green)

## Download

**[Download The Silence v1.0.0 (DMG – Apple Silicon)](https://github.com/Surfab/the-silence/releases/download/v1.0.0/The.Silence-1.0.0-arm64.dmg)**

> The app is unsigned. On first launch: right-click → Open.

---

## Features

- **Audio & video playback** — MP3, FLAC, WAV, AAC, OGG, M4A (including ALAC), MP4, MKV, MOV, AVI, WebM
- **ALAC support** — Apple Lossless files decoded natively via Web Audio API + CoreAudio
- **Persistent library** — your files are remembered across sessions
- **Playlists** — save and restore custom playlists
- **Play history** — grouped by day with timestamps
- **Shuffle & repeat** — all / one / off
- **Crossfade** — 3-second fade between tracks
- **Sleep timer** — auto-stop after 15 / 30 / 45 / 60 minutes
- **Spectrum visualizer** — real-time frequency display for ALAC/M4A tracks
- **Album art** — extracted from ID3 tags via `jsmediatags`
- **Hardware media keys** — play, pause, next, previous, seek
- **Open from Finder** — file associations for all supported formats
- **Always on top** — pin the window above other apps
- **Drag & drop** — files and folders directly onto the app

### Mini mode

Resize the window below 420px wide: the header and controls disappear, the album art fills the screen, and a minimal overlay with progress bar and playback buttons fades in on hover.

### Desktop widget

A compact floating widget (300×115px) with glassmorphism blur stays above all other windows on your desktop. Shows album art, title, artist, progress bar, and playback controls. Closing the main window hides it rather than quitting — audio keeps playing in the background.

---

## Screenshots

<img width="2150" height="1562" alt="Screenshot 17" src="https://github.com/user-attachments/assets/a944a821-ab0c-4700-91f6-ad2d5885d4a6" />


---

## Requirements

- macOS 11 or later (Apple Silicon or Intel)
- Node.js 18+

## Build from source

```bash
git clone https://github.com/your-username/the-silence.git
cd the-silence
npm install
npm start          # development
npm run pack       # build .app in dist/mac-arm64/
npm run dist       # build DMG installer in dist/
```

To install the built app system-wide:

```bash
sudo cp -R "dist/mac-arm64/The Silence.app" /Applications/
```

> The app is unsigned. On first launch: right-click → Open.

---

## Stack

| Layer | Technology |
|---|---|
| Shell | Electron 33 |
| Audio (standard) | HTML5 `<audio>` / `<video>` |
| Audio (ALAC/M4A) | Web Audio API → CoreAudio |
| Tag reading | jsmediatags |
| Packaging | electron-builder |

---

## License

MIT

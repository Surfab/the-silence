
# The Silence

[🇮🇹 Italiano](#italiano) · [🇬🇧 English](#english)

---

## Italiano

Un media player minimale ed elegante per macOS, costruito con Electron.

<img width="2150" height="1562" alt="Screenshot 17" src="https://github.com/user-attachments/assets/2e516cb8-ca47-4599-8531-5c776ccf9e6b" />


![The Silence](https://img.shields.io/badge/piattaforma-macOS-lightgrey) ![Electron](https://img.shields.io/badge/electron-33-blue) ![Licenza](https://img.shields.io/badge/licenza-MIT-green)

### Download

**[Scarica The Silence v1.0.0 (DMG – Apple Silicon)](https://github.com/Surfab/the-silence/releases/download/v1.0.0/The.Silence-1.0.0-arm64.dmg)**

> L'app non è firmata. Al primo avvio: tasto destro → Apri.

### Via Homebrew

```bash
brew tap Surfab/tap
brew install --cask the-silence
```

### Funzionalità

- **Riproduzione audio e video** — MP3, FLAC, WAV, AAC, OGG, M4A (incluso ALAC), MP4, MKV, MOV, AVI, WebM
- **Supporto ALAC** — file Apple Lossless decodificati nativamente via Web Audio API + CoreAudio
- **Libreria persistente** — i tuoi file vengono ricordati tra una sessione e l'altra
- **Playlist** — salva e ripristina playlist personalizzate
- **Cronologia** — raggruppata per giorno con timestamp
- **Shuffle e ripetizione** — tutto / uno / disattivato
- **Crossfade** — dissolvenza di 3 secondi tra i brani
- **Timer di spegnimento** — stop automatico dopo 15 / 30 / 45 / 60 minuti
- **Visualizzatore spettro** — frequenze in tempo reale per tracce ALAC/M4A
- **Copertine album** — estratte dai tag ID3 tramite `jsmediatags`
- **Tasti multimediali hardware** — play, pausa, successivo, precedente, seek
- **Apertura da Finder** — associazioni file per tutti i formati supportati
- **Sempre in primo piano** — blocca la finestra sopra alle altre app
- **Drag & drop** — trascina file e cartelle direttamente sull'app

#### Modalità mini

Ridimensiona la finestra sotto i 420px di larghezza: intestazione e controlli scompaiono, la copertina riempie lo schermo e una sovrapposizione minimale con barra di avanzamento e pulsanti appare al passaggio del mouse.

#### Widget desktop

Un widget flottante compatto (300×115px) con effetto glassmorphism rimane sopra tutte le altre finestre. Mostra copertina, titolo, artista, barra di avanzamento e controlli di riproduzione. Chiudere la finestra principale nasconde il widget senza uscire dall'app — la musica continua in sottofondo.

### Screenshot

<details>
  <summary>Screenshot</summary>

![Player](https://raw.githubusercontent.com/Surfab/the-silence/main/immagini/Screenshot%2019.jpg)
![Libreria](https://raw.githubusercontent.com/Surfab/the-silence/main/immagini/Screenshot%2021.jpg)
![Widget](https://raw.githubusercontent.com/Surfab/the-silence/main/immagini/Screenshot%2020.jpg)


</details>

### Requisiti

- macOS 11 o successivo (Apple Silicon o Intel)
- Node.js 18+

### Compilare dai sorgenti

```bash
git clone https://github.com/Surfab/the-silence.git
cd the-silence
npm install
npm start          # modalità sviluppo
npm run pack       # genera .app in dist/mac-arm64/
npm run dist       # genera il DMG in dist/
```

> L'app non è firmata. Al primo avvio: tasto destro → Apri.

### Tecnologie

| Livello | Tecnologia |
|---|---|
| Shell | Electron 33 |
| Audio (standard) | HTML5 `<audio>` / `<video>` |
| Audio (ALAC/M4A) | Web Audio API → CoreAudio |
| Lettura tag | jsmediatags |
| Packaging | electron-builder |

### What's next

- [ ] Equalizzatore a 10 bande
- [ ] Scrobbling Last.fm
- [ ] Supporto cartelle watched (auto-import)
- [ ] Temi colore personalizzabili
- [ ] Notifiche macOS al cambio traccia
- [ ] Esporta playlist in formato M3U

### Licenza

MIT

---

## English

A minimal, elegant media player for macOS built with Electron.

<img width="2150" height="1562" alt="Screenshot" src="https://github.com/user-attachments/assets/ad1a3412-2099-4ef6-9f33-fe95791fd715" />


![The Silence](https://img.shields.io/badge/platform-macOS-lightgrey) ![Electron](https://img.shields.io/badge/electron-33-blue) ![License](https://img.shields.io/badge/license-MIT-green)

### Download

**[Download The Silence v1.0.0 (DMG – Apple Silicon)](https://github.com/Surfab/the-silence/releases/download/v1.0.0/The.Silence-1.0.0-arm64.dmg)**

> The app is unsigned. On first launch: right-click → Open.

### Via Homebrew

```bash
brew tap Surfab/tap
brew install --cask the-silence
```

### Features

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

#### Mini mode

Resize the window below 420px wide: the header and controls disappear, the album art fills the screen, and a minimal overlay with progress bar and playback buttons fades in on hover.

#### Desktop widget

A compact floating widget (300×115px) with glassmorphism blur stays above all other windows. Shows album art, title, artist, progress bar, and playback controls. Closing the main window hides it rather than quitting — audio keeps playing in the background.

### Screenshot

<details>
  <summary>Screenshot</summary>

![Player](https://raw.githubusercontent.com/Surfab/the-silence/main/immagini/Screenshot%2019.jpg)
![Library](https://raw.githubusercontent.com/Surfab/the-silence/main/immagini/Screenshot%2021.jpg)
![Widget](https://raw.githubusercontent.com/Surfab/the-silence/main/immagini/Screenshot%2020.jpg)


</details>

### Requirements

- macOS 11 or later (Apple Silicon or Intel)
- Node.js 18+

### Build from source

```bash
git clone https://github.com/Surfab/the-silence.git
cd the-silence
npm install
npm start          # development
npm run pack       # build .app in dist/mac-arm64/
npm run dist       # build DMG installer in dist/
```

> The app is unsigned. On first launch: right-click → Open.

### Stack

| Layer | Technology |
|---|---|
| Shell | Electron 33 |
| Audio (standard) | HTML5 `<audio>` / `<video>` |
| Audio (ALAC/M4A) | Web Audio API → CoreAudio |
| Tag reading | jsmediatags |
| Packaging | electron-builder |

### What's next

- [ ] 10-band equalizer
- [ ] Last.fm scrobbling
- [ ] Watched folders (auto-import)
- [ ] Custom color themes
- [ ] macOS notifications on track change
- [ ] Export playlists as M3U

### License

MIT

# iOS Simulator Demo

Piccolo progetto SwiftUI (un contatore con due pulsanti) creato per mostrare
come si usa iOS Simulator. Non è collegato a The Silence: vive nella sua
cartella solo per comodità di distribuzione tramite questo branch.

## Requisiti

- macOS con **Xcode** installato (dal Mac App Store o developer.apple.com)
- Nessun account Apple Developer richiesto: bastano per il Simulator

## Come lanciarlo

1. Apri `DemoApp.xcodeproj` con doppio click (o `open DemoApp.xcodeproj` da terminale).
2. In alto nella barra degli strumenti di Xcode, accanto al nome dello scheme
   `DemoApp`, clicca sul selettore del device e scegli un simulator, es.
   **iPhone 15 Pro**.
3. Premi ▶️ (o `⌘R`). Xcode compila l'app, avvia il Simulator (se non è già
   aperto) e la installa/lancia automaticamente.
4. Nel Simulator vedrai la schermata "iOS Simulator Demo" con un contatore:
   clicca `+` e `−` per interagire — puoi usare il mouse per simulare i tap.

## Cosa osservare

- Il Simulator è una finestra macOS a parte: puoi ridimensionarla, ruotarla
  (`⌘←` / `⌘→`), simulare shake (`⌃⌘Z`) o scattare screenshot (`⌘S`).
- Ogni modifica al codice Swift richiede solo `⌘R` per ricompilare e
  ricaricare l'app nel Simulator (non serve riavviarlo).
- Da terminale puoi anche controllarlo con `xcrun simctl`, es.:
  ```bash
  xcrun simctl list devices        # elenca i device disponibili
  xcrun simctl openurl booted "https://example.com"
  ```

## Struttura del progetto

```
ios-simulator-demo/
├── DemoApp.xcodeproj/       # progetto Xcode
└── DemoApp/
    ├── DemoAppApp.swift     # entry point dell'app (@main)
    └── ContentView.swift    # UI del contatore
```

# HTML & CSS Tutorial

Ein interaktives Tutorial zum Lernen von HTML und CSS Grundlagen.

[Edit in StackBlitz next generation editor ⚡️](https://stackblitz.com/~/github.com/vsvito420/html-tutorial-v1)

## Projektübersicht

Dieses Projekt ist ein interaktives Tutorial, das die Grundlagen von HTML und CSS vermittelt. Es ist in deutscher Sprache verfasst und bietet praktische Beispiele für verschiedene Konzepte.

### Funktionen

- **HTML Tutorial**: Behandelt grundlegende HTML-Elemente wie:
  - Überschriften
  - Textformatierung
  - Links
  - Listen
  - Bilder und Medien

- **CSS Tutorial**: Erklärt wichtige CSS-Konzepte wie:
  - Textformatierung
  - Box Model
  - Flexbox Layout
  - Grid Layout
  - Transitions & Hover-Effekte

## Projektstruktur

```
html-tutorial-v1/
├── index.html          # Startseite
├── html.html          # HTML Tutorial Seite
├── css.html           # CSS Tutorial Seite
├── styles.css         # Globale Styles
├── script.js          # Haupt-JavaScript-Datei
└── js/                # JavaScript Module
    ├── tutorial-data.js      # HTML Tutorial Beispiele
    ├── css-data.js          # CSS Tutorial Beispiele
    ├── tutorial.js          # Tutorial Logik
    └── weitere Module...     # Weitere Funktionalitäten
```

## Lokale Entwicklung

1. Klone das Repository:
   ```bash
   git clone https://github.com/vsvito420/html-tutorial-v1.git
   cd html-tutorial-v1
   ```

2. Öffne `index.html` in deinem Browser oder nutze einen lokalen Server:
   ```bash
   npx serve
   ```

## Erweiterungsmöglichkeiten

Das Tutorial kann auf verschiedene Arten erweitert werden:

### 1. Neue Tutorial-Inhalte

- Füge neue Beispiele zu `tutorial-data.js` oder `css-data.js` hinzu
- Folge dem bestehenden Format:
  ```javascript
  {
    title: 'Neues Beispiel',
    code: `Dein Code hier`,
    html: `HTML für CSS-Beispiele (optional)`
  }
  ```

### 2. Neue Funktionalitäten

- Erweitere die JavaScript-Module im `js/` Verzeichnis
- Mögliche Erweiterungen:
  - Code-Editor für Live-Bearbeitung
  - Speichern von Fortschritten
  - Übungen und Tests
  - Weitere Tutorial-Kategorien (z.B. JavaScript)

### 3. Styling-Anpassungen

- Passe `styles.css` an für:
  - Neue Themes
  - Responsive Design Verbesserungen
  - Animationen
  - Dark/Light Mode

### 4. Internationalisierung

- Füge Unterstützung für weitere Sprachen hinzu
- Erstelle separate Sprachdateien
- Implementiere einen Sprachumschalter

## Mitwirken

Beiträge sind willkommen! Du kannst:
- Issues erstellen für Bugs oder Feature-Vorschläge
- Pull Requests einreichen für Verbesserungen
- Die Dokumentation erweitern
- Neue Beispiele hinzufügen

## Lizenz

Dieses Projekt ist unter der MIT-Lizenz veröffentlicht.

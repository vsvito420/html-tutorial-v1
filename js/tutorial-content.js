// Unified tutorial content in a simple format
export const tutorials = {
  html: {
    title: "HTML Grundlagen",
    examples: [
      {
        title: "Überschriften und Struktur",
        description: "HTML bietet verschiedene Überschriftenebenen von h1 bis h6",
        code: `<h1>Hauptüberschrift</h1>
<h2>Unterüberschrift</h2>
<h3>Weitere Überschrift</h3>
<p>Überschriften helfen die Seite zu strukturieren und sind wichtig für SEO.</p>`,
        explanation: `- <h1> ist die wichtigste Überschrift und sollte nur einmal pro Seite verwendet werden
- <h2> bis <h6> werden für Unterabschnitte verwendet
- Die Struktur sollte hierarchisch sein (keine Ebenen überspringen)`
      },
      {
        title: "Text und Absätze",
        description: "Verschiedene Möglichkeiten Text zu formatieren",
        code: `<p>Ein normaler Textabsatz.</p>
<p>Text kann <strong>fett</strong> oder <em>kursiv</em> sein.</p>
<p>Auch <mark>hervorgehobener</mark> Text ist möglich.</p>
<br>
<p>Nach einem Zeilenumbruch.</p>`,
        explanation: `- <p> definiert einen Textabsatz
- <strong> macht Text wichtig und fett
- <em> betont Text durch Kursivschrift
- <mark> hebt Text hervor
- <br> erzeugt einen Zeilenumbruch`
      },
      {
        title: "Listen",
        description: "Geordnete und ungeordnete Listen",
        code: `<h3>Einkaufsliste</h3>
<ul>
  <li>Äpfel</li>
  <li>Brot</li>
  <li>Milch</li>
</ul>

<h3>Kochanleitung</h3>
<ol>
  <li>Wasser kochen</li>
  <li>Nudeln hinzufügen</li>
  <li>8 Minuten kochen</li>
</ol>`,
        explanation: `- <ul> erstellt eine ungeordnete Liste mit Punkten
- <ol> erstellt eine nummerierte Liste
- <li> definiert die einzelnen Listeneinträge
- Listen können auch verschachtelt werden`
      },
      {
        title: "Links und Navigation",
        description: "Links zu anderen Seiten oder innerhalb der Seite",
        code: `<a href="https://example.com">Externer Link</a>
<br>
<a href="kontakt.html">Interne Seite</a>
<br>
<a href="mailto:email@example.com">Email Link</a>
<br>
<a href="#top">Nach oben springen</a>`,
        explanation: `- href="URL" definiert das Linkziel
- Relative Pfade für interne Seiten
- mailto: für Email-Links
- #id für Sprungmarken innerhalb der Seite
- target="_blank" öffnet Link in neuem Tab`
      },
      {
        title: "Bilder und Medien",
        description: "Einbinden von Bildern und anderen Medien",
        code: `<img src="bild.jpg" 
     alt="Beschreibung des Bildes" 
     width="300">

<figure>
  <img src="foto.jpg" 
       alt="Schöne Landschaft">
  <figcaption>
    Eine Berglandschaft im Sonnenuntergang
  </figcaption>
</figure>`,
        explanation: `- src definiert die Bildquelle
- alt ist wichtig für Barrierefreiheit
- width/height können Bildgröße festlegen
- figure gruppiert Bilder mit Beschriftung
- figcaption fügt eine Bildunterschrift hinzu`
      }
    ]
  },
  css: {
    title: "CSS Grundlagen",
    examples: [
      {
        title: "Selektoren und Farben",
        description: "Grundlegende CSS-Selektoren und Farbeigenschaften",
        code: `.wichtig {
  color: #ff0000;
  background-color: #f0f0f0;
}

#header {
  color: rgb(0, 100, 200);
}

p {
  color: hsl(200, 70%, 50%);
}`,
        html: `<div id="header">Überschrift mit ID</div>
<p class="wichtig">Wichtiger Text</p>
<p>Normaler Paragraph</p>`,
        explanation: `- Klassen beginnen mit .
- IDs beginnen mit #
- Elemente direkt mit Namen
- Verschiedene Farbformate:
  - Hex: #RRGGBB
  - RGB: rgb(R,G,B)
  - HSL: hsl(Farbton, Sättigung%, Helligkeit%)`
      },
      {
        title: "Box Model",
        description: "Das CSS Box Model mit Margin, Border und Padding",
        code: `.box {
  width: 200px;
  height: 100px;
  margin: 20px;
  padding: 15px;
  border: 2px solid #333;
  background-color: #f0f0f0;
}`,
        html: `<div class="box">
  Diese Box demonstriert das CSS Box Model
</div>`,
        explanation: `- margin: Außenabstand
- padding: Innenabstand
- border: Rahmen
- width/height: Inhaltsgröße
- box-sizing: border-box macht Größenberechnung einfacher`
      },
      {
        title: "Flexbox Layout",
        description: "Flexible Box Layout für einfache Ausrichtung",
        code: `.flex-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 20px;
  background-color: #f0f0f0;
}

.flex-item {
  padding: 20px;
  background-color: #4a90e2;
  color: white;
  border-radius: 4px;
}`,
        html: `<div class="flex-container">
  <div class="flex-item">Item 1</div>
  <div class="flex-item">Item 2</div>
  <div class="flex-item">Item 3</div>
</div>`,
        explanation: `- display: flex aktiviert Flexbox
- justify-content: horizontale Ausrichtung
- align-items: vertikale Ausrichtung
- gap: Abstand zwischen Elementen
- flex-wrap: Umbruch bei zu vielen Elementen`
      },
      {
        title: "Grid Layout",
        description: "CSS Grid für komplexe Layouts",
        code: `.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  padding: 20px;
  background-color: #f0f0f0;
}

.grid-item {
  padding: 20px;
  background-color: #9b59b6;
  color: white;
  text-align: center;
  border-radius: 4px;
}`,
        html: `<div class="grid-container">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>
</div>`,
        explanation: `- display: grid aktiviert Grid
- grid-template-columns: definiert Spalten
- grid-template-rows: definiert Zeilen
- fr: flexible Einheit (fraction)
- gap: Abstand zwischen Grid-Zellen`
      },
      {
        title: "Animationen",
        description: "CSS Transitionen und Hover-Effekte",
        code: `.button {
  padding: 10px 20px;
  background-color: #2ecc71;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.button:hover {
  background-color: #27ae60;
  transform: scale(1.1);
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}`,
        html: `<button class="button">
  Hover über mich!
</button>`,
        explanation: `- transition: definiert Animation
- transform: für Größe, Rotation etc.
- :hover für Maus-Interaktionen
- ease: Beschleunigungskurve
- box-shadow für 3D-Effekt`
      }
    ]
  }
};
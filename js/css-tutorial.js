import { cssExamples } from './css-data.js';

export class CssTutorialNavigator {
  constructor() {
    this.currentExampleIndex = 0;
    this.initializeElements();
    this.addEventListeners();
    this.updateExample();
  }

  initializeElements() {
    this.codeBlock = document.getElementById('codeBlock');
    this.previewBox = document.getElementById('previewBox');
    this.counter = document.getElementById('exampleCounter');
    this.prevButton = document.getElementById('prevExample');
    this.nextButton = document.getElementById('nextExample');
  }

  addEventListeners() {
    this.prevButton.addEventListener('click', () => {
      if (this.currentExampleIndex > 0) {
        this.currentExampleIndex--;
        this.updateExample();
      }
    });

    this.nextButton.addEventListener('click', () => {
      if (this.currentExampleIndex < cssExamples.length - 1) {
        this.currentExampleIndex++;
        this.updateExample();
      }
    });
  }

  updateExample() {
    const example = cssExamples[this.currentExampleIndex];
    
    // Update code display
    this.codeBlock.textContent = example.code;
    Prism.highlightElement(this.codeBlock);

    // Create style element for the example
    const styleId = 'current-example-style';
    let styleElement = document.getElementById(styleId);
    if (!styleElement) {
      styleElement = document.createElement('style');
      styleElement.id = styleId;
      document.head.appendChild(styleElement);
    }
    styleElement.textContent = example.code;

    // Update preview with HTML and apply styles
    this.previewBox.innerHTML = example.html;

    // Update navigation
    this.counter.textContent = `Beispiel ${this.currentExampleIndex + 1} von ${cssExamples.length}`;
    this.prevButton.disabled = this.currentExampleIndex === 0;
    this.nextButton.disabled = this.currentExampleIndex === cssExamples.length - 1;
  }
}
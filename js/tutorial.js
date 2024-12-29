import { htmlExamples } from './tutorial-data.js';

export class TutorialNavigator {
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
      if (this.currentExampleIndex < htmlExamples.length - 1) {
        this.currentExampleIndex++;
        this.updateExample();
      }
    });
  }

  updateExample() {
    const example = htmlExamples[this.currentExampleIndex];
    
    // Update code display
    this.codeBlock.textContent = example.code;
    Prism.highlightElement(this.codeBlock);

    // Update preview
    this.previewBox.innerHTML = example.code;

    // Update navigation
    this.counter.textContent = `Beispiel ${this.currentExampleIndex + 1} von ${htmlExamples.length}`;
    this.prevButton.disabled = this.currentExampleIndex === 0;
    this.nextButton.disabled = this.currentExampleIndex === htmlExamples.length - 1;
  }
}
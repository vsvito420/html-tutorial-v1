import { tutorials } from './tutorial-content.js';

// Common tutorial navigation logic
export class TutorialNavigator {
  constructor(tutorialType) {
    this.tutorialType = tutorialType;
    this.tutorial = tutorials[tutorialType];
    this.currentIndex = 0;
    this.initializeElements();
    this.addEventListeners();
    this.updateExample();
  }

  initializeElements() {
    this.codeBlock = document.getElementById('codeBlock');
    this.previewBox = document.getElementById('previewBox');
    this.explanation = document.getElementById('explanation');
    this.counter = document.getElementById('exampleCounter');
    this.title = document.getElementById('exampleTitle');
    this.description = document.getElementById('exampleDescription');
    this.prevButton = document.getElementById('prevExample');
    this.nextButton = document.getElementById('nextExample');
  }

  addEventListeners() {
    this.prevButton.addEventListener('click', () => {
      if (this.currentIndex > 0) {
        this.currentIndex--;
        this.updateExample();
      }
    });

    this.nextButton.addEventListener('click', () => {
      if (this.currentIndex < this.tutorial.examples.length - 1) {
        this.currentIndex++;
        this.updateExample();
      }
    });
  }

  updateExample() {
    const example = this.tutorial.examples[this.currentIndex];
    
    // Update title and description
    this.title.textContent = example.title;
    this.description.textContent = example.description;
    
    // Update code display
    this.codeBlock.textContent = example.code;
    Prism.highlightElement(this.codeBlock);
    
    // Update explanation
    this.explanation.innerHTML = example.explanation;

    // Handle CSS-specific updates
    if (this.tutorialType === 'css') {
      this.updateCSSExample(example);
    } else {
      this.previewBox.innerHTML = example.code;
    }

    // Update navigation
    this.counter.textContent = `Beispiel ${this.currentIndex + 1} von ${this.tutorial.examples.length}`;
    this.prevButton.disabled = this.currentIndex === 0;
    this.nextButton.disabled = this.currentIndex === this.tutorial.examples.length - 1;
  }

  updateCSSExample(example) {
    // Create or update style element for CSS examples
    const styleId = 'current-example-style';
    let styleElement = document.getElementById(styleId);
    if (!styleElement) {
      styleElement = document.createElement('style');
      styleElement.id = styleId;
      document.head.appendChild(styleElement);
    }
    styleElement.textContent = example.code;

    // Update preview with HTML
    this.previewBox.innerHTML = example.html || '';
  }
}
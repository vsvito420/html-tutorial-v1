import { TutorialNavigator } from './tutorial-navigator.js';

// Get tutorial type from current page
const tutorialType = document.body.dataset.tutorialType;
if (tutorialType) {
  document.addEventListener('DOMContentLoaded', () => {
    new TutorialNavigator(tutorialType);
  });
}
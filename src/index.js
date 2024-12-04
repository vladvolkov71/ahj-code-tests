import './css/styles.css';
import { handleCardInput, handleValidateClick } from './js/app';

document.addEventListener('DOMContentLoaded', () => {
  const cardNumberInput = document.getElementById('card-number');
  const validateButton = document.getElementById('validate-button');

  cardNumberInput.addEventListener('input', handleCardInput);
  validateButton.addEventListener('click', handleValidateClick);
});

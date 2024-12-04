import validateCardNumber from './cardValidator';
import getCardType from './cardType';

export function handleCardInput(event) {
  const cardNumber = event.target.value;
  const cardType = getCardType(cardNumber);
  const cardIcons = document.querySelectorAll('.card-icon');

  cardIcons.forEach((icon) => {
    icon.classList.remove('active');
    if (icon.id === cardType) {
      icon.classList.add('active');
    }
  });
}

export function handleValidateClick() {
  const cardNumberInput = document.getElementById('card-number');
  const cardNumber = cardNumberInput.value.trim();

  if (validateCardNumber(cardNumber)) {
    alert('Card number is valid');
  } else {
    alert('Card number is invalid');
  }
}

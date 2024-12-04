export default function getCardType(cardNumber) {
  const cardTypes = {
    visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
    amex: /^3[47][0-9]{13}$/,
    discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
    jcb: /^(?:2131|1800|35\d{3})\d{11}$/,
    diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
    mir: /^220[0-4][0-9]{12}$/,
    mastercard: /^(?:5[1-5][0-9]{14}|2[2-7][0-9]{14})$/,
  };

  let cardType = null;

  Object.entries(cardTypes).some(([type, regex]) => {
    if (regex.test(cardNumber)) {
      cardType = type;
      return true;
    }
    return false;
  });

  return cardType;
}

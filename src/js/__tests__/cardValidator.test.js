import validateCardNumber from '../cardValidator';

describe('Card Validator', () => {
  test('Valid Visa card number', () => {
    const cardNumber = '4111111111111111'; // Пример корректного номера карты Visa
    expect(validateCardNumber(cardNumber)).toBe(true);
  });

  test('Invalid Visa card number', () => {
    const cardNumber = '4111111111111121'; // Пример некорректного номера карты Visa
    expect(validateCardNumber(cardNumber)).toBe(false);
  });

  test('Valid MasterCard number', () => {
    const cardNumber = '5555555555554444'; // Пример корректного номера карты MasterCard
    expect(validateCardNumber(cardNumber)).toBe(true);
  });

  test('Invalid MasterCard number', () => {
    const cardNumber = '5555555555554455'; // Пример некорректного номера карты MasterCard
    expect(validateCardNumber(cardNumber)).toBe(false);
  });

  test('Empty card number', () => {
    expect(validateCardNumber('')).toBe(false);
  });

  test('Invalid characters in card number', () => {
    expect(validateCardNumber('4111a1111111b111')).toBe(false);
  });
});

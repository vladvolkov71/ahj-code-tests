import getCardType from '../cardType';

describe('Card Type Identifier', () => {
  test('Detects Visa card', () => {
    expect(getCardType('4111111111111111')).toBe('visa');
  });

  test('Detects MasterCard', () => {
    expect(getCardType('5555555555554444')).toBe('mastercard');
  });

  test('Detects American Express', () => {
    expect(getCardType('378282246310005')).toBe('amex');
  });

  test('Detects Discover', () => {
    expect(getCardType('6011111111111117')).toBe('discover');
  });

  test('Detects JCB', () => {
    expect(getCardType('3530111333300000')).toBe('jcb');
  });

  test('Detects Diners Club', () => {
    expect(getCardType('30569309025904')).toBe('diners');
  });

  test('Detects Mir', () => {
    expect(getCardType('2200123456789010')).toBe('mir');
  });

  test('Returns null for unknown card type', () => {
    expect(getCardType('1234567890123456')).toBe(null);
  });
});

import { formatCurrency, validateCard, encryptData, decryptData } from '.../../../src/utils/utils';
import { iconVisa, iconMastercard, iconCardDefault } from '../../../src/utils/staticData';

describe('Utils tests', () => {
  test('formatCurrency: formats currency correctly', () => {
    const value = 1234.56;
    expect(formatCurrency(value)).toBe('$1,234.56');
  });
  test('formatCurrency: when value is undefined, returns $0.00', () => {
    const value = undefined;
    expect(formatCurrency(value)).toBe('$0.00');
  });
  test('validateCard: detects valid Visa card', () => {
    const cardNumber = '4532015112830366'; // Valid Visa
    const result = validateCard(cardNumber);
    expect(result.icon).toBe(iconVisa);
    expect(result.isValid).toBe(true);
    expect(result.message).toBe('Valid card');
  });

  test('validateCard: detects valid Mastercard card', () => {
    const cardNumber = '5105105105105100'; // Valid Mastercard
    const result = validateCard(cardNumber);
    expect(result.icon).toBe(iconMastercard);
    expect(result.isValid).toBe(true);
    expect(result.message).toBe('Valid card');
  });

  test('validateCard: detects invalid card number', () => {
    const cardNumber = '1234567890123456'; // Invalid card
    const result = validateCard(cardNumber);
    expect(result.icon).toBe(iconCardDefault);
    expect(result.isValid).toBe(false);
    expect(result.message).toBe('The card number entered is not valid');
  });

  test('validateCard: detects non-card number format', () => {
    const cardNumber = 'abcd1234'; // Invalid format
    const result = validateCard(cardNumber);
    expect(result.icon).toBe(iconCardDefault);
    expect(result.isValid).toBe(false);
    expect(result.message).toBe('The card number entered is not valid');
  });

  test('encryptData: encrypts data correctly', () => {
    const data = { key: 'value' };
    const result = encryptData(data);
    expect(result).toBe(btoa(JSON.stringify(data)));
  });

  test('decryptData: decrypts data correctly', () => {
    const data = btoa(JSON.stringify({ key: 'value' }));
    const result = decryptData(data);
    expect(result).toEqual({ key: 'value' });
  });
});

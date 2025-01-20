import { paymentService } from '../../src/services/paymentService';
import { validateCard } from '../../src/utils/utils';

// Mock de la función validateCard para devolver una tarjeta válida
jest.mock('../../src/utils/utils', () => ({
  ...jest.requireActual('../../src/utils/utils'), // mantener las importaciones originales
  validateCard: jest.fn(),
}));

describe('paymentService', () => {
  it('should resolve when card is valid', async () => {
    validateCard.mockReturnValueOnce({
      isValid: true,
      message: 'Valid card',
    });

    const result = await paymentService({
      cardNumber: '4532015112830366',
      expirationDate: '12/25',
      cvc: '123',
      cardName: 'John',
      identificationNumber: '123456789',
    });

    expect(result.status).toBe(200);
    expect(result.data.message).toBe('Valid card');
    expect(result.data.status).toBe(true);
  });

  it('should reject when card is invalid', async () => {
    validateCard.mockReturnValueOnce({
      isValid: false,
      message: 'Invalid card number',
    });

    try {
      await paymentService({
        cardNumber: '1234567890123456',
        expirationDate: '12/25',
        cvc: '123',
        cardName: 'John Doe',
        identificationNumber: '123456789',
      });
    } catch (error) {
      expect(error.status).toBe(412);
      expect(error.data.message).toBe('Invalid card number');
      expect(error.data.status).toBe(false);
    }
  });
});

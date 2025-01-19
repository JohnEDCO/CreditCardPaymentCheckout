import {validateCard} from '../utils/utils';

export const paymentService = ({
  cardNumber,
  expirationDate,
  cvc,
  cardName,
  identificationNumber,
}) => {
    
  const request = new Promise((resolve, reject) => {
    let checkCardNumber = validateCard(cardNumber);
    if (checkCardNumber.isValid) {
      setTimeout(() => {
        resolve({
          status: 200,
          data: {
            message: checkCardNumber.message,
            status: checkCardNumber.isValid,
          },
        });
      }, 2000);
    } else {
      setTimeout(() => {
        reject({
          status: 412,
          data: {
            message: checkCardNumber.message,
            status: checkCardNumber.isValid,
          },
        });
      }, 2000);
    }
  });
  return request;
};

import {iconVisa, iconMastercard, iconCardDefault} from './staticData';

export const formatCurrency = value => {
  return value.toLocaleString('en-EN', {
    style: 'currency',
    currency: 'USD',
  });
};

const isValidLuhn = number => {
  let sum = 0;
  let reverse = false;
  for (let i = number.length - 1; i >= 0; i--) {
    let digit = parseInt(number[i], 10);

    if (reverse) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    sum += digit;
    reverse = !reverse;
  }
  return sum % 10 === 0;
};

const detectTypeCard = number => {
  // Visa (13 o 16 numbers, start with 4)
  const visaRegex = /^4[0-9]{12}(?:[0-9]{3})?$/;

  // 1. 51-55 con 16 numbers
  // 2. 2221-2720 con 14 o 16 numbers
  const mastercardRegex =
    /^(5[1-5][0-9]{14}|22[2-9][0-9]{12,13}|2[3-7][0-9]{13})$/;

  let dataReturn = {
    icon: iconCardDefault,
    isValid: true,
    message: 'Valid card',
  };
  if (visaRegex.test(number)) {
    dataReturn.icon = iconVisa;
  } else if (mastercardRegex.test(number)) {
    dataReturn.icon = iconMastercard;
  } else {
    dataReturn.isValid = false;
    dataReturn.message = 'The card entered is not valid';
    dataReturn.icon = iconCardDefault;
  }
  return dataReturn;
};

export const validateCard = cardNumber => {
  cardNumber = cardNumber.replace(/\D/g, '');
  if (!isValidLuhn(cardNumber)) {
    return {
      icon: iconCardDefault,
      isValid: false,
      message: 'The card number entered is not valid',
    };
  }
  const typeCard = detectTypeCard(cardNumber);
  return typeCard;
};

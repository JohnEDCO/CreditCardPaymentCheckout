export const formatCurrency = (value) => {
  return value.toLocaleString('en-EN', {
    style: 'currency',
    currency: 'USD',
  });
};
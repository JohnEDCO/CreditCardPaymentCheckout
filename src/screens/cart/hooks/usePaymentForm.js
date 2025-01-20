import {useState} from 'react';
const usePaymentForm = () => {
    const [form, setForm] = useState({
      cardNumber: '',
      expirationDate: '',
      cvc: '',
      cardName: '',
      identificationNumber: '',
    });
  
    const cleanForm = () => {
      setForm({
        cardNumber: '',
        expirationDate: '',
        cvc: '',
        cardName: '',
        identificationNumber: '',
      });
    };
  
    const handleChangeText = (field, value) => {
      setForm(prevForm => ({...prevForm, [field]: value}));
    };
  
    const isValidForm = () => {
      return Object.values(form).every(value => value.length > 0);
    };
  
    return {
      form,
      cleanForm,
      handleChangeText,
      isValidForm,
    };
  };

  export default usePaymentForm;
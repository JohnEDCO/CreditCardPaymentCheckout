import {useDispatch} from 'react-redux';

const usePayment = () => {
  const dispatch = useDispatch();
  const addTransaction = transaction => {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction,
    });
  };
  return {
    addTransaction,
  };
};

export default usePayment;

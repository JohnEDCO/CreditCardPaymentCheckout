import {useDispatch} from 'react-redux';

const useCart = () => {
  const dispatch = useDispatch();

  const addItemToCart = item => {
    dispatch({
      type: 'ADD_ITEM',
      payload: item,
    });
  };

  const removeItemFromCart = item => {
    dispatch({
      type: 'REMOVE_ITEM',
      payload: item,
    });
  };

  const removeAllItemFromCart = item => {
    dispatch({
      type: 'REMOVE_ALL_ITEM',
      payload: item,
    });
  };
  const cleanCar = () => {
    dispatch({
      type: 'CLEAN_CAR',
    });
  };
  const loadStateCart = () => {
    dispatch({
      type: 'LOAD_STATE_CART',
    });
  };
  return {
    addItemToCart,
    removeItemFromCart,
    removeAllItemFromCart,
    cleanCar,
    loadStateCart
  };
};

export default useCart;

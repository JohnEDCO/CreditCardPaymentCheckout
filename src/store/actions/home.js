import {useDispatch} from 'react-redux';

const useHome = () => {
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
  return {
    addItemToCart,
    removeItemFromCart,
    removeAllItemFromCart,
    cleanCar
  };
};

export default useHome;

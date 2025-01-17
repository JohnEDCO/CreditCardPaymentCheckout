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

  return {
    addItemToCart,
    removeItemFromCart,
  };
};

export default useHome;

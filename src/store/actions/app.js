import {useDispatch} from 'react-redux';

const useApp = () => {
  const dispatch = useDispatch();

  const showLoading = (modal) => {
    dispatch({
      type: 'SHOW_LOADING',
      payload: modal,
    });
  };

  const hideLoading = () => {
    dispatch({
      type: 'HIDE_LOADING',
    });
  };

  const setIconCard = (iconCard) => {
    dispatch({
      type: 'SET_ICON_CARD',
      payload: iconCard,
    });
  };

  const resetIconCard = () => {
    dispatch({
      type: 'RESET_ICON_CARD',
    });
  };

  const showModalInfo = (content) => {
    dispatch({
      type: 'SHOW_MODAL_INFO',
      payload: content,
    });
  };
  const hideModalInfo = () => {
    dispatch({
      type: 'HIDE_MODAL_INFO',
    });
  };
  return {
    showLoading,
    hideLoading,
    setIconCard,
    resetIconCard,
    showModalInfo,
    hideModalInfo,
  };
};

export default useApp;

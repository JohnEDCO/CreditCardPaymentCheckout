import {iconCardDefault} from '../../utils/staticData';

const initialState = {
  loading: false,
  iconCard: {
    icon: iconCardDefault,
    isValid: false,
    message: 'Tarjeta no válida',
  },
  modalInfo: {visible: false, title: '', content: ''},
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'HIDE_LOADING':
      return {
        ...state,
        loading: false,
      };
    case 'SET_ICON_CARD':
      return {
        ...state,
        iconCard: action.payload,
      };
    case 'RESET_ICON_CARD':
      return {
        ...state,
        iconCard: {icon: iconCardDefault, isValid: false, message: 'Tarjeta no válida'},
      };
    case 'SHOW_MODAL_INFO':
      return {
        ...state,
        modalInfo: action.payload,
      };
    case 'HIDE_MODAL_INFO':
      return {
        ...state,
        modalInfo: {visible: false, title: '', content: ''},
      };
    default:
      return state;
  }
};

export default appReducer;

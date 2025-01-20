import {iconCardDefault} from '../../utils/staticData';

const initialState = {
  loading: false,
  iconCard: {
    icon: iconCardDefault,
    isValid: false,
    message: 'Tarjeta no válida',
  },
  modalInfo: {
    visible: 'default',
    title: 'Welcome to My technical test',
    content:
      'In this application you can see and buy different types of products. I hope you enjoy it.',
  },
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
        iconCard: {
          icon: iconCardDefault,
          isValid: false,
          message: 'Tarjeta no válida',
        },
      };
    case 'SHOW_MODAL_INFO':
      return {
        ...state,
        modalInfo: action.payload,
      };
    case 'HIDE_MODAL_INFO':
      return {
        ...state,
        modalInfo: {visible: 'none', title: '', content: ''},
      };
    default:
      return state;
  }
};

export default appReducer;

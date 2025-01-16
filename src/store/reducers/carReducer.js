const initialState = {
  items: [],
  totalAmount: 0,
  totalItems: 0,
};

const carReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        items: [...state.items, action.payload],
        totalAmount: state.totalAmount + action.payload.price,
        totalItems: state.totalItems + 1,
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: removeItemById(state.items, action.payload.id),
        totalAmount: state.totalAmount - action.payload.price,
        totalItems: state.totalItems - 1,
      };
    case 'CLEAN_CAR':
      return {...state, items: [], totalItems: 0, totalAmount: 0};
    default:
      return state;
  }
};

const removeItemById = (items, id) => {
  const index = items.findIndex(item => item.id === id);
  if (index !== -1) {
    items.splice(index, 1);
  }
  return [...items];
};

export default carReducer;

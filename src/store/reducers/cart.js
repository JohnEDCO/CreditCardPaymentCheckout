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
        items: AddItem(state.items, action.payload),
        totalAmount: state.totalAmount + action.payload.price,
        totalItems: state.totalItems + 1,
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: removeUnitsItemById(state.items, action.payload.id),
        totalAmount:
          state.totalItems > 0
            ? state.totalAmount.toFixed(2) - action.payload.price.toFixed(2)
            : 0,
        totalItems: state.totalItems > 0 ? state.totalItems - 1 : 0,
      };
    case 'REMOVE_ALL_ITEM':
      return {
        ...state,
        items: removeItemById(state.items, action.payload.id),
        totalAmount:
          state.totalItems > 0
            ? state.totalAmount.toFixed(2) -
              (action.payload.price * action.payload.units).toFixed(2)
            : 0,
        totalItems:
          state.totalItems > 0 ? state.totalItems - action.payload.units : 0,
      };
    case 'CLEAN_CAR':
      return {...state, items: [], totalItems: 0, totalAmount: 0};
    default:
      return state;
  }
};

const AddItem = (items, itemSearch) => {
  const existItem = items.find(item => item.id === itemSearch.id);
  if (existItem) {
    existItem.units += 1;
    return items;
  } else {
    let itemSearchCopy = {...itemSearch};
    const {id, image, name, price, units} = itemSearchCopy;
    const newItem = {id, image, name, price, units};
    return [...items, newItem];
  }
};

const removeItemById = (items, id) => {
  const index = items.findIndex(item => item.id === id);
  if (index !== -1) {
    items.splice(index, 1);
  }
  return [...items];
};

const removeUnitsItemById = (items, id) => {
  const existItem = items.find(item => item.id === id);
  if (existItem && existItem.units > 1) {
    existItem.units -= 1;
    return items;
  } else {
    const index = items.findIndex(item => item.id === id);
    items.splice(index, 1);
    return [...items];
  }
};

export default carReducer;

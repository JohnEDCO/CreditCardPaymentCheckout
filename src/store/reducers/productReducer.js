const initialState = {
    items: {}
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_ITEM':
        return { ...state, items: [...state.items, action.payload] };
      case 'CLEAN_CAR':
        return { ...state, items: [] };
      default:
        return state;
    }
  };
  
  export default productReducer;
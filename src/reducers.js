const initialState = {
    salesData: [],
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_SALES_DATA':
        return {
          ...state,
          salesData: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  
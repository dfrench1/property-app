const initialState = null;
  
  const flash = (state = initialState, action) => {
    switch (action.type) {
      case "SET_FLASH":
        return action.payload
      default:
        return state;
    }
  };
  
  export default flash;
  
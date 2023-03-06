const addCardReducer = (state = [], action) => {
  switch (action.type) {
    case "add-card":
      return [...state, action.payload];
    case "reset":
      return state = []
    default:
      return state;
  }
};
export default addCardReducer;

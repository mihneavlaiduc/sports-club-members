const idToEditCardReducer = (state = null, action) => {
  switch (action.type) {
    case "id-to-edit-card":
      return action.payload;
    case "reset":
      return (state = null);
    default:
      return state;
  }
};
export default idToEditCardReducer;

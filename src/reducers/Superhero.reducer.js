const INITIAL_STATE = [];

const AddReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_SUPERHERO":
      if (state.includes(action.payload)) return state;
      return [...state, action.payload];
    case "REMOVE_SUPERHERO":
      const item = action.payload;
      return state.filter((superheros) => superheros !== item);
    default:
      return state;
  }
};

export default AddReducer;

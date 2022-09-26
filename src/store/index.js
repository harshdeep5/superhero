import { createStore, combineReducers } from "redux";
import SuperherosReducer from "../reducers/Superhero.reducer";

const reducers = combineReducers({
  superheros: SuperherosReducer,
});

const store = createStore(reducers);

export default store;

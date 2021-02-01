import { combineReducers } from "redux";
import drawerReducer from "./reducer";

const rootReducer = combineReducers({
  drawer: drawerReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;

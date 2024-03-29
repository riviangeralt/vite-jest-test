import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { usersSliceReducer } from "./slices/fetchUsersSlice";

const rootReducer = combineReducers({
  usersSlice: usersSliceReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import userDataReducer from "./reducers/userDataReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, userDataReducer);
export default configureStore({
  reducer: {
    userData: persistedReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/lib/persistReducer";
import persistStore from "redux-persist/lib/persistStore";
import storage from "redux-persist/lib/storage";
import userReducer from "./userSlice";
import sessionReducer from "./sessionSlice";
import settingsReducer from "./settingsSlice";
import User from "../models/User";
import Session from "../models/Session";
import Settings from "../models/Settings";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["settings"],
};

const rootReducer = combineReducers({
  user: userReducer,
  session: sessionReducer,
  settings: settingsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);

export type RootState = {
  user: User;
  session: Session;
  settings: Settings;
};
export type AppDispatch = typeof store.dispatch;

export { store, persistor };

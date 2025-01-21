import { combineReducers, configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/lib/persistReducer";
import persistStore from "redux-persist/lib/persistStore";
import storage from "redux-persist/lib/storage";
import userReducer from "./userSlice";
import sessionReducer from "./sessionSlice";
import settingsReducer from "./settingsSlice";
const persistConfig = {
    key: "root",
    storage,
    whitelist: ["settings", "session"],
};
const rootReducer = combineReducers({
    user: userReducer,
    session: sessionReducer,
    settings: settingsReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
});
const persistor = persistStore(store);
export { store, persistor };

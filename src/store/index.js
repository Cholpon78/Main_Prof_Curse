import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { categoryReducer } from "./categoryReducer";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "localstore",
  storage,
  whitelist: [
    "",
  ] /*здесь можем писать название редюсера, чтобы указать какие редюсеры сохранять */,
  blacklist: [""] /* вписываем то что исключаем*/,
};

const rootReducer = combineReducers({
  category: categoryReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(thunk));

export const persistor = persistStore(store);

import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { profileReducer } from "./profile";
import { chatListReducer } from './chat_list'
import { messangerReducer } from "./messanger/reducer";
import { gistsReducer } from "./gists";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { botMessage } from "./middlewares";
import { getPublicGistsApi } from "../api/gists";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["profile"],
};

const reducer = combineReducers({
    profile: profileReducer,
    chatList: chatListReducer,
    messanger: messangerReducer,
    gists: gistsReducer
});

export const persReduser = persistReducer(persistConfig, reducer);

export const store = createStore(
    persReduser,
    compose(
        applyMiddleware(botMessage, thunk.withExtraArgument({
            getPublicGistsApi,
        })),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export const persistor = persistStore(store);
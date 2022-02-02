import { createStore, combineReducers } from "redux";
import { profileReducer } from "./profile";
import { chatListReducer } from './chat_list'

export const store = createStore(
    combineReducers({
        profile: profileReducer,
        chatList: chatListReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);
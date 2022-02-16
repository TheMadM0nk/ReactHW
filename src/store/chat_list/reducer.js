import {
    ADD_CHAT,
    DEL_CHAT,
    GET_CHATS_START,
    GET_CHATS_SUCCESS,
    GET_CHATS_ERROR
} from './types';

const initState = {
    chats: [],
    pending: false,
    error: null
};

export const chatListReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_CHAT:
            return { ...state, chats: [...state.chats, action.payload] };
        case DEL_CHAT:
            return {
                ...state,
                chats: state.chats.filter((chatName) => chatName !== action.payload)
            };

        case GET_CHATS_START:
            return { ...state, pending: true, error: null };
        case GET_CHATS_SUCCESS:
            return { ...state, pending: false, chats: action.payload };
        case GET_CHATS_ERROR:
            return { ...state, pending: false, error: action.payload };

        default:
            return state;
    }
}
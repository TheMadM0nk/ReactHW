import { SEND_MESSAGE, DELETE_MESSAGE } from './types';

const initState = {
    messages: {
        Gogi: [
            { author: 'Gogi', message: 'Hello there!', date: new Date(), style: 'msg_container' }
        ]
    }
};

export const messangerReducer = (state = initState, action) => {

    switch (action.type) {

        case SEND_MESSAGE:
            return {
                ...state, messages: {
                    ...state.messages,
                    [action.payload.chatId]: [...(state.messages[action.payload.chatId] ?? []),
                    {
                        author: action.payload.chatId,
                        message: action.payload.input,
                        date: new Date(),
                        style: 'msg_container'
                    }]
                }
            }

        default:
            return state;
    }
}
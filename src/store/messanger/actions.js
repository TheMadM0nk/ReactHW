import { SEND_MESSAGE, DELETE_MESSAGE } from "./types";

export const sendMessage = (chatId, value) => ({

    type: SEND_MESSAGE,
    payload: {
        chatId,
        input: value
    }
});

export const delMsg = (chatId) => ({

    type: DELETE_MESSAGE,
    payload: chatId
});
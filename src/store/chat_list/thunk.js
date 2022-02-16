import {
    getChatsStart,
    getChatsSuccess,
    getChatsError
} from "./actions"


export const getChatsFB = () => async (dispatch, _, api) => {
    const chats = [];
    try {
        dispatch(getChatsStart());

        const snapshot = await api.getChatsApi();
        snapshot.forEach((item) => {
            chats.push(item.val());
        });

        dispatch(getChatsSuccess(chats));
    } catch (e) {
        dispatch(getChatsError(e))
    }
};
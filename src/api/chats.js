import { db } from "./firebase";

export const getChatsApi = () => {
    return db.ref("chats").get();
};

export const createChatApi = (chatId) => {
    return db
        .ref("chats")
        .child(chatId)
        .set({ title: chatId, value: "" });
};

// let test = 'Gogi';
// createChatApi(test);
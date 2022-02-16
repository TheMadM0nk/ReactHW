import { db } from "./firebase";

export const getConversationsApi = () => {
    return db.ref("conversations").get();
};

export const createConversationApi = (chatId) => {
    return db
        .ref("conversations")
        .child(chatId)
        .set({ name: chatId, value: "" });
};
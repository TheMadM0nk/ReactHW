import { nanoid } from "nanoid";
import { db } from "./firebase";

export const getMessagesApi = () => {
    return db.ref("messages").get();
};

export const sendMessageApi = async (chatId, message) => {
    const newMessage = { ...message, id: nanoid(), date: String(new Date()) };

    await db.ref("messages").child(chatId).push(newMessage);

    return newMessage;
};

// let x = 'Gogi';
// let y = 'Hello there';

// sendMessageApi(x, y);
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { Layout, Messanger, ChatList } from '../components';
import { getChatsFB } from '../store/chat_list';
import { getMessages } from '../store/messanger';


export const ChatsPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getChatsFB());
        dispatch(getMessages());
    }, [dispatch])

    return (

        <Routes >
            <Route
                path='/'
                element={
                    <Layout
                        chatList={<ChatList />}
                        message={<h1>Welcome to the chat room</h1>}
                    />}
            />
            <Route
                path=':chatId'
                element={
                    <Layout
                        chatList={<ChatList />}
                        message={<Messanger />}
                    />}
            />
        </Routes>

    )
}
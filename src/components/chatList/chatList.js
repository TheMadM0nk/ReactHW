import React, { useCallback } from 'react';
import { List, Divider, Box } from '@mui/material';
import { Button } from './chatStyles';
import { Chat } from './chat/chat';
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { createChat, deleteChat } from '../../store/chat_list/actions'

export const ChatList = () => {
    const chatList = useSelector(state => state.chatList.chats);
    const dispach = useDispatch();
    const { chatId } = useParams();

    const addChat = () => {
        let user = prompt('Enter User name');
        if (user) {
            dispach(createChat(user))
        } else {
            alert('Enter User name!')
        }
    };

    const removeChat = useCallback((chatName) => {
        dispach(deleteChat(chatName));
    }, [dispach]);

    return (
        <List >
            {chatList.map((chat) => (
                <Link key={chat} to={`/chats/${chat}`}>
                    <Chat name={chat} selected={chatId === chat} handler={removeChat} />
                    <Divider component="li" />
                </Link>
            ))}
            <Box sx={{ margin: '10px' }} >
                <Button sx={{ width: '100%' }} onClick={addChat} >Add Chat</Button>
            </Box>
        </List>
    );
}
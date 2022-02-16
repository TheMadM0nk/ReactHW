import React, { useCallback, useEffect } from 'react';
import { List, Divider, Box } from '@mui/material';
import { Button } from './chatStyles';
import { Chat } from './chat/chat';
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { createChat, deleteChat } from '../../store/chat_list/actions'
import { chatSelector } from '../../store/chat_list/selectors';
import { getChatsFB } from '../../store/chat_list';

export const ChatList = () => {
    const chatList = useSelector(chatSelector);
    const dispatch = useDispatch();

    const { chatId } = useParams();

    const addChat = () => {
        let user = prompt('Enter User name');
        let validName = !chatList.includes(user);

        if (user && validName) {
            dispatch(createChat(user))
        } else {
            alert('Not valid name!')
        }
    };

    const removeChat = useCallback((chatName) => {
        dispatch(deleteChat(chatName));
    }, [dispatch]);


    return (
        <List >
            {chatList.map((chat) => (
                <Link key={chat.title} to={`/chats/${chat.title}`}>
                    <Chat name={chat.title}
                        selected={chatId === chat.title}
                        handler={removeChat}
                    />
                    <Divider component="li" />
                </Link>
            ))}
            <Box sx={{ margin: '10px' }} >
                <Button sx={{ width: '100%' }} onClick={addChat} >Add Chat</Button>
            </Box>
        </List>
    );
}
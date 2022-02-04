import React, { useState, useEffect, useCallback, useRef } from 'react';
import '../../index.css';
import { Clock } from './clock';
import style from '../../styles.module.css';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { messangerSelector } from '../../store/messanger/selectors';
import { sendMessage } from '../../store/messanger';

export const Messanger = () => {


  // const [messageList, setMessageList] = useState({});
  const [value, setValue] = useState('');
  const { chatId } = useParams();
  const messages = useSelector(messangerSelector(chatId))
  const myRef = useRef(null);
  const dispatch = useDispatch();


  const showLog = () => console.log(messages);

  const sendMsg = useCallback(() => {
    if (value) {
      dispatch(sendMessage(chatId, value));
    }
    setValue('');

  }, [chatId, value, dispatch]);

  const handlePressInput = (e) => {
    if (e.code === "Enter") {
      sendMsg(value);
    }
  };

  useEffect(() => {
    myRef.current?.focus();
  }, [myRef]);

  // useEffect(() => {
  //   const message = messages[chatId] ?? [];
  //   const lastMessage = message[message.length - 1];
  //   let timerId = null;

  //   if (messages.length && lastMessage.author !== "Bot:") {
  //     timerId = setTimeout(() => {
  //       sendMsg("Message recived!", "Bot:", 'botStyle');
  //     }, 1500);
  //     return () => clearInterval(timerId);

  //   }
  // }, [messages, chatId, sendMsg]);


  return (

    <main className={style.noChat}>
      <div className={style.msgField}>
        {messages.map((msg, index) => (
          <div className={msg.style} key={index}>
            <h5>{msg.author}&nbsp;</h5>
            <p>{msg.message}</p>
            <span className={style.timeStamp}>&nbsp;{msg.date.toLocaleTimeString('Ru-ru')}</span>
          </div>))}
      </div>

      <div className={style.inputForm}>
        <input
          ref={myRef}
          value={value}
          onKeyPress={handlePressInput}
          onChange={(event) => setValue(event.target.value)}
          className={style.textInput} />
        <div className={style.inputForm_btnBox}>
          <Clock />
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            onClick={showLog}
          >showLog
          </Button>
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            onClick={sendMsg}
          >Send
          </Button>
        </div>
      </div>
    </main>
  );
}
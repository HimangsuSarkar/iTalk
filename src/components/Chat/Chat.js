import { IconButton } from '@material-ui/core';
import { MicNone } from '@material-ui/icons';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { selectChatId, selectChatName } from '../../features/chatSlice';
import db from '../../firebase/firebase';
import Message from '../Messaage/Message';
import "./Chat.css";
import firebase from "firebase"
import { selectUser } from '../../features/userSlice';
import FlipMove from "react-flip-move";

function Chat() {
    const user = useSelector(selectUser);
    const [input, setInput] = useState("");
    const chatName = useSelector(selectChatName);
    const chatId = useSelector(selectChatId);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if (chatId) {
            db.collection('chats').doc(chatId).collection("messages").
                orderBy("timestamp", "desc").
                onSnapshot((snapshot) =>
                    setMessages(
                        snapshot.docs.map((doc) => ({
                            id: doc.id,
                            data: doc.data(),
                        }))
                    )
                );
        }
    }, [chatId])

    const sendMessage = (e) => {
        e.preventDefault();
        db.collection('chats').doc(chatId).collection("messages").add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            message: input,
            uid: user.uid,
            photo: user.photo,
            email: user.email,
            displayName: user.displayName,
        });
        setInput("");
    };

    return (
        <div className="chat">
            {/*chat header*/}
            <div className="chat_header">
                <h4>To: <span className="chat_name">{chatName}</span></h4>
                <strong>Details</strong>
            </div>
            {/*chat body*/}


            <div className="chat_message">
                <FlipMove>
                    {messages.map(({ id, data }) => (
                        <Message key={id} contents={data} />
                    ))}
                </FlipMove>
            </div>



            <div className="chat_input">
                <form action="">
                    <input value={input}
                        onChange={(e) => setInput(e.target.value)}
                        type="text" placeholder="iMessage" />
                    <button type="submit" onClick={sendMessage}>Send Message</button>
                </form>

                <IconButton>
                    <MicNone className="chat_mic" />
                </IconButton>
            </div>
        </ div >
    )
}

export default Chat


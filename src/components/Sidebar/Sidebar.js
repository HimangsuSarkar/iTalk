import { Avatar, IconButton } from '@material-ui/core';
import { FormatBoldRounded, RateReviewOutlined, Search } from '@material-ui/icons';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import SidebarChat from '../SidebarChat/SidebarChat';
import "./Sidebar.css";
import db, { auth } from "../../firebase/firebase";

function Sidebar() {
    const user = useSelector(selectUser);
    const [chats, setChats] = useState([]);

    useEffect(() => {
        db.collection('chats').onSnapshot(snapshot => {
            setChats(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            )
        })
    }, [])

    const addChat = () => {
        const chatName = prompt("please enter the chat name");
        if (chatName) {
            db.collection('chats').add({
                chatName: chatName,
            })
        }
    }

    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <Avatar
                    onClick={() => auth.signOut()}
                    src={user.photo} className="sidebar_avatar"
                />
                <div className="sidebar_input">
                    <Search />
                    <input type="text" placeholder="Search" />
                </div>
                <IconButton variant="outlined" className="sidebar_inputButton">
                    <RateReviewOutlined onClick={addChat} />
                </IconButton>

            </div>

            <div className="sidebar_chats">
                {chats.map(({ id, data: { chatName } }) => (
                    < SidebarChat key={id} id={id} chatName={chatName} />
                ))}

            </div>


        </ div >
    )
}

export default Sidebar


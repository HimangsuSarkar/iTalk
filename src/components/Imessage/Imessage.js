import React from 'react'
import Chat from '../Chat/Chat';
import Sidebar from '../Sidebar/Sidebar';
import "./Imessage.css";

function Imessage() {
    return (
        <div className="imessage">
            {/*SideBar*/}
            <Sidebar />
            <Chat />
        </ div>
    )
}

export default Imessage


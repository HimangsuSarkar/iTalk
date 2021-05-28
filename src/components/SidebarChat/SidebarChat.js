import { Avatar } from '@material-ui/core';
import React from 'react'
import "./SidebarChat.css";

function SidebarChat() {
    return (
        <div className="sidebarChat">
            <Avatar />
            <div className="sidebarChat_info">
                <h3>Person Name</h3>
                <p>Last message sent...</p>
                <small>Timestamp</small>
            </div>
        </ div>
    )
}

export default SidebarChat


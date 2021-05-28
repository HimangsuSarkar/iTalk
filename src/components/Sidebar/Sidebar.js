import { Avatar, IconButton } from '@material-ui/core';
import { RateReviewOutlined, Search } from '@material-ui/icons';
import React from 'react'
import SidebarChat from '../SidebarChat/SidebarChat';
import "./Sidebar.css";


function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <Avatar className="sidebar_avatar" />
                <div className="sidebar_input">
                    <Search />
                    <input type="text" placeholder="Search" />
                </div>
                <IconButton variant="outlined" className="sidebar_inputButton">
                    <RateReviewOutlined />
                </IconButton>

            </div>

            <div className="sidebar_chats">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />

            </div>


        </ div >
    )
}

export default Sidebar


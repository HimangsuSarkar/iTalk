import { IconButton } from '@material-ui/core';
import { MicNone } from '@material-ui/icons';
import React, { useState } from 'react'
import "./Chat.css";

function Chat() {
    const [input, setInput] = useState("");
    const sendMessage = (e) => {
        e.preventDefault();

        setInput("");
    };

    return (
        <div className="chat">
            {/*chat header*/}
            <div className="chat_header">
                <h4>To: <span className="chat_name">Person Name</span></h4>
                <strong>Details</strong>
            </div>
            {/*chat body*/}


            <div className="chat_message">
                <h2>I am a message</h2>
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


import { Avatar, IconButton } from '@material-ui/core';
import MicIcon from '@material-ui/icons/Mic';
import { AttachFile, InsertEmoticon, MoreVert, SearchOutlined } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import "./Chat.css";
import { useParams } from 'react-router-dom';
import db from './firebase';
function Chat() {
    const [input, setInput] = useState("");
    const [seed, setSeed] = useState("");
    const [roomName, setRoomName] = useState("");
    const {roomId}= useParams();

    useEffect(() => {
       if(roomId){
           db.collection('rooms')
           .doc(roomId)
           .onSnapshot((snapshot) => 
               setRoomName(snapshot.data().name));
       }

    }, [roomId]);
    useEffect(() => {
        setSeed(Math.floor(Math.random()*5000));

    }, [roomId]);

function sendMessage(e){
    e.preventDefault();
    console.log("input: ", input);
    setInput("");
};
    return (
        <div className="chat">
            <div className="chat_header">
                <Avatar src={`http://avatars.dicebear.com/api/human/${seed}.svg`}/>

                <div className="chat_headerInfo">
                    <h3>{roomName}</h3>
                    <p>Last seen...</p>
                </div>

                <div className="chat_headerRight">
                    <IconButton>
                        <SearchOutlined/>
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>

            <div className="chat_body">
                <p className={`chat_message ${true && 'chat_reciever'}`}>
                    <span className="chat_name">Sahil</span>
                    Hello
                    <span className="chat_timestamp">3:50 pm</span>
                </p>
                <p className="chat_message chat_sender">
                    <span className="chat_name">Sahil</span>
                    Hello
                    <span className="chat_timestamp">3:50 pm</span>
                </p>
               
                <p className="chat_message">Hello</p>
                <p className="chat_message">Hello</p>
            </div>

            <div className="chat_footer">
                <IconButton>
                    <InsertEmoticon/>
                </IconButton>
                <form action="">
                    <input value={input} onChange={e => setInput(e.target.value)} type="text" placeholder="Type a message here..."/>
                    <button onClick={sendMessage} type="submit">Send a message</button>
                </form>
                <IconButton>
                       <MicIcon/>
                </IconButton>
            </div>
        </div>
    )
}

export default Chat

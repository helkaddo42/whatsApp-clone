import React,{useState} from 'react'
import './chat.css'
import {IconButton,Avatar} from '@material-ui/core';
import { MoreVert, SearchOutlined,AttachFile,InsertEmoticon} from '@material-ui/icons';
import MicIcon from '@material-ui/icons/Mic'
import ChatUser from '../ChatUser/ChatUser';
import axios from '../axios'


function Chat({messages} ) {

    const [input, setInput] = useState("")

    const sendMessage= async(e)=>{
        e.preventDefault()

        await axios.post(`/messages/new`,{
            "message":input,
            "name":"moi",
            "timestamp":"lundi ",
            "received": false
        })

        setInput('');

    }
    return (
        <div className='chat'>
            <div className='chat_header'>
                <Avatar src={'https://media.istockphoto.com/photos/child-hands-formig-heart-shape-picture-id951945718?k=6&m=951945718&s=612x612&w=0&h=ih-N7RytxrTfhDyvyTQCA5q5xKoJToKSYgdsJ_mHrv0='} />
                <div className='chat_headermiddle'> 
                    <h3>Riles</h3>
                    <p>vu aujourd'hui 20:20</p>
                </div>
                <div className='chat_headerRight'>
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert/>
                    </IconButton>
                </div>
            </div>
            <div className='chat_body'>
              <ChatUser message={messages}/>
            </div> 
            <div className='chat_footer'>
                <InsertEmoticon />
                <form>
                    <input 
                        value={input}
                        onChange={e=>setInput(e.target.value)}
                        type='text'
                        placeholder='Send a message'
                      />
                    <button onClick={sendMessage} type='submit' >  </button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat

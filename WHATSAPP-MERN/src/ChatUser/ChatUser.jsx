import React from 'react'
import './chatUser.css'

function ChatUser({message}) {
    console.log(message)
    return (
        <>
                {message.map(messages =>(
                        <p className={`chat_message ${messages.received && "chat__receiver"}`}> 
                        <span className='chat_name'>{messages.name}</span>
                          {messages.message}
                        <span className='chat_times'>
                            {messages.timestamp}
                        </span>
                      </p>
                    )
                       
                    
                     
                )}
        </>
    )
}

export default ChatUser

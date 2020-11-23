import './App.css';
import SideBar from './SideBar/SideBar'
import Chat from './Chat/Chat'
import React,{useEffect,useState} from 'react'
import Pusher from 'pusher-js'
import  axios from './axios'

function App() {

    const [messages, setMessages] = useState([])

  useEffect(() => {
    axios.get('/messages/sync').then(res =>{
      setMessages(res.data)
      console.log(res.data)
    })
  }, [])

  useEffect(() => {
    const pusher = new Pusher('57b2bf2874ef6babc7dd', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted',(newMessage) => {
      setMessages([...messages,newMessage])
    });

    return ()=>{
      channel.unbind_all();
      channel.unsubscribe()
    }

  }, [messages])

  console.log(messages)




  return (
    <div className="app">
      <div className='app_body'>
        <SideBar />
        <Chat messages={messages}/>
      </div>
    </div>
  );
}

export default App;

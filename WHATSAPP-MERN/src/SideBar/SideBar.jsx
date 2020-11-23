import React from 'react'
import './sideBar.css'
import SidebarChats from '../sidebarChats/SidebarChats'
import {IconButton,Avatar} from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { SearchOutlined } from '@material-ui/icons';

function SideBar() {
    return (
        <div className='sideBar'>
            <div className='sideBar_header'>
                <Avatar src='https://www.nautiljon.com/images/perso/00/72/makunouchi_ippo_227.jpg' />
                <div className='sideBar_headerRight'>
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className='sideBar_search'>
                <div className='sideBAr_searchContainer'>
                    <SearchOutlined />
                    <input placeholder="Search or start new chat" type="text" />
                </div>
            </div>
            <div className='sideBar_chats'>
                <SidebarChats src={'https://media.istockphoto.com/photos/child-hands-formig-heart-shape-picture-id951945718?k=6&m=951945718&s=612x612&w=0&h=ih-N7RytxrTfhDyvyTQCA5q5xKoJToKSYgdsJ_mHrv0='} name={'riles'} para={'en train de manger'}/>
                <SidebarChats src={'https://media.istockphoto.com/photos/neon-heart-on-brick-wall-picture-id848235926?k=6&m=848235926&s=612x612&w=0&h=resOh2Qt0_wYIOoLGcbnGtu_rXw5Dkp_IsqrerWzWCQ='}name={'mika'} para={'au boulot'}/>
                <SidebarChats src={'https://images.ctfassets.net/hrltx12pl8hq/1zlEl4XHkxeDuukJUJyQ7Y/a149a908727e2084d503dc103a620d7f/lohp-image-img-3.jpg?fit=fill&w=480&h=270'} name={'mehdi'} para={'foot'}/>



            </div>
        </div>
    )
}

export default SideBar

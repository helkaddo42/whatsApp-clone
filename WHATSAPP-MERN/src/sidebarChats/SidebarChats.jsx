import React from 'react'
import './sidebarChats.css'
import {Avatar} from '@material-ui/core/';

function SidebarChats(props) {
    return (
        <div className='sidebarChats'>
            <Avatar src={props.src} />
            <div className='sidebarChats_info'>
                <h2>{props.name}</h2>
                <p>{props.para}</p>
            </div>
        </div>
    )
}

export default SidebarChats

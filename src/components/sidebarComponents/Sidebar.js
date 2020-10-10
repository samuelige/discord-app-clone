import React from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import InfoIcon from '@material-ui/icons/Info';
import CallIcon from '@material-ui/icons/Call';
import MicIcon from '@material-ui/icons/Mic';
import HeadsetIcon from '@material-ui/icons/Headset';
import SettingsIcon from '@material-ui/icons/Settings';

import './Sidebar.css'; 
import SidebarChannel from '../sidebarComponents/SidebarChannel'
import { Avatar } from '@material-ui/core';


function Sidebar() {
    return (
        <div className="sidebar">
            <div className='sidebar__top'>
                <h3>Saige Dev</h3>
                <ExpandMoreIcon/>
            </div>

            <div className="sidebar__channels">
                <div className="sidebar__channelsHeader">
                    <div className="sidebar__Header">
                    <ExpandMoreIcon/>
                    <h4>Text Channels</h4>
                    </div>

                    <AddIcon className="sidebar__addChannel" />
                </div>

                <div className="sidebar__channelsList">
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                </div>
            </div>

            <div className="sidebar__voice">
                <SignalCellularAltIcon className='sidebar__voiceIcons' fontSize='large'/>
                <div className="sidebar__voiceInfo">
                    <h3>Voice Connected</h3>
                    <p>Stream</p>
                </div>
                <div className="sidebar__voiceIcons">
                    <InfoIcon />
                    <CallIcon />
                </div>
            </div>

            <div className="sidebar__profile">
                <Avatar src='https://lh3.googleusercontent.com/ogw/ADGmqu_yIFCPNxqAXulCpfOAXxZ8FObCmFkZhXbb1_IS=s83-c-mo'/>
                <div className="sidebar__profileInfo">
                    <h3>@IGE, Samuel</h3>
                    <p>#thisIsMyId</p>
                </div>
                <div className="sidebar__profileIcons">
                    <MicIcon/> 
                    <HeadsetIcon/>
                    <SettingsIcon />
                </div>
            </div>
        </div>
    )
}

export default Sidebar

import React from 'react'
import { auth } from '../chatComponents/firebase'
import NotificationsIcon from '@material-ui/icons/Notifications';
import EditLocationRoundedIcon from '@material-ui/icons/EditLocationRounded';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import HelpRoundedIcon from '@material-ui/icons/HelpRounded';
import './ChatHeader.css'

function ChatHeader() {
    return (
        <div className='chatHeader'>
            <div className="chatHeader__left">
                <h3>
                    <span className="chatHeader__hash">#</span>
                    Test channel name
                </h3>
            </div>
            <div className="chatHeader__right">
            <NotificationsIcon />
            <EditLocationRoundedIcon />
            <PeopleAltRoundedIcon />
            </div>

            <div className="chatHeader__search">
                <input placeholder='Search'/>
                <SearchRoundedIcon />
            </div>

            <SendRoundedIcon />
            <HelpRoundedIcon />
            <h4 onClick={() => auth.signOut()} className="sign__out">Sign Out</h4>
        </div>
    )
}

export default ChatHeader

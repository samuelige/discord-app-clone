import { Button } from '@material-ui/core'
import { auth, provider } from '../chatComponents/firebase'
import React from 'react'
import './Login.css'


function Login() {
    const signIn = () => {
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
    };
    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://www.nicepng.com/png/detail/19-191230_discord-blue-text-font-logo-discord-logo-svg.png" 
                alt="discord logo" srcset=""/>
            </div>
            <Button onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login

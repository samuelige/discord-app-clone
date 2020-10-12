import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'


function Login() {
    const sigIn = () => {
        // 
    };
    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://www.nicepng.com/png/detail/19-191230_discord-blue-text-font-logo-discord-logo-svg.png" 
                alt="discord logo" srcset=""/>
            </div>
            <Button onClick={sigIn}>Sign In</Button>
        </div>
    )
}

export default Login

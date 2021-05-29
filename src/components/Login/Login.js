import { Button } from '@material-ui/core';
import React from 'react'
import "./Login.css";
import { auth, provider } from "../../firebase/firebase";

function Login() {
    const signIn = () => {
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
    }
    return (
        <div className="login">
            <div className="login_logo">
                <img src="https://sites.google.com/site/italkfm/_/rsrc/1317066787169/italk-logos/logo%20italk%20red%20grey.PNG" alt="iTalk_image" />
                <h1>iTalks</h1>
            </div>
            <Button onClick={signIn}>Sign In</Button>
        </div >
    )
}

export default Login


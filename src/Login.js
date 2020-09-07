import React from 'react'
import {Button} from "@material-ui/core"
import "./Login.css"
import {auth,provider} from './firebase'
import { useStateValue } from './StateProvider'
import {actionTypes} from './reducer'
function Login() {

    const [{}, dispatch]= useStateValue();

    const signIn=()=>{
        auth.signInWithPopup(provider)
        .then(result=>{
            console.log(result.user);
            dispatch({
                type:actionTypes.SET_USER,
                user:result.user,
            });
            dispatch({
                type:actionTypes.SET_SESSION,
                uid:result.user.uid,
                displayName:result.user.displayName,
                photoURL:result.user.photoURL
            })
        })
        .catch((err)=>alert(err.message));
        
    };

    return (
        <div className="login">
            <div className="login__container">
                <img src="https://i.ibb.co/m4QLXfY/TEXT-NOW-1.png" alt="whatsapp" width="200" height="200"/>
            <div className="login__text">
                <h1>Sign in to Text Now</h1>
            </div>
            <Button onClick={signIn}>Sign In with Google</Button>
            </div>

            
        </div>
    )
}

export default Login

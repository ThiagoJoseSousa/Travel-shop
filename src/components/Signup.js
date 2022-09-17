import React from 'react'
import { signup, login, useAuth, logout } from '../firebase';
import { useRef, useState } from 'react'; //used to persist email/pass values
import Profile from './Profile';



const Signup= ()=>{
    const [loading, setLoading]= useState(false);
    const currentUser=useAuth();

    const emailRef=useRef();
    const passwordRef=useRef();

    async function handleLogin(){
        setLoading(true);
  try {await login(emailRef.current.value,passwordRef.current.value)}
  catch {alert("Error!")}
        setLoading(false);
    }

    async function handleSignup(){
        setLoading(true);
  try {await signup(emailRef.current.value,passwordRef.current.value)}
  catch {alert("Error!")}
        setLoading(false);
    }

    async function handleLogout() {
        // isnt a function :setLoading(true);
        try{
            await logout();

        }
        catch {
            alert("Error!")
        }
        // ist a function :setLoading(false);
    }

    return (
        <div className='signup'>
            {currentUser? <div>Currently logged in as: {currentUser.email}</div> : <div>You need to log in!</div>}


            {!currentUser &&
            <>
            <div className="fields">

            <input ref={emailRef} placeholder='email' />
 <input ref={passwordRef} type="password" placeholder='password' />
 </div>
 <button disabled={loading || currentUser} onClick={handleSignup}>Sign Up</button>
 <button disabled={loading || currentUser} onClick={handleLogin}>Log in</button> 
            </>
            }

        {currentUser && <>
            <Profile/> 
            <button disabled= {loading || !currentUser} onClick={handleLogout} >Log out</button>
            </>}
        </div>

    )
}

export default Signup;
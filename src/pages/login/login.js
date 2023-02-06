import React from 'react'
import './login.scss'

const Login = () => {
  return (
    <div className='loginContainer'>
    <div className="loginWrapper">
        <div className="loginLeft">
        <h1>Social App</h1>
        <h3>Connect with friends and the world<br/> around you on Lamasocial</h3>
        </div>
        <div className="loginRight">
            <div className="loginForm">
            <input type="email" name='email' placeholder='email' />
            <input type="password" name='password' placeholder='password' />
            <button >Log in </button>
            </div>
            
        </div>
        </div>
    </div>
  )
}

export default Login
import  { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated as a, config } from 'react-spring';
import PropTypes from 'prop-types';
import '../style/login.css';

export default function Login({setToken}){

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState('');

  const handleLogout = () => {
    setUser({});
    setUsername('');
    setPassword('');
    localStorage.clear();
  };

  const compute = (i) => {
       return{
        from: {
          opacity: 0,
          transform: 'translateY(100%)'
        },
        to: {
          opacity: 1,
          transform: 'translateY(0)'
        },
        config: config.wobbly,
        delay: i * 200
      }}


    async function loginUser(credentials) {
    return fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
  }

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
  }

  return(
    <>
      <div className='login-page'>
        <a.div className='login-box' style={useSpring(compute(1))}>
          <a.h1 style={useSpring(compute(2))}>Login</a.h1>
          <form onSubmit={handleSubmit}>
            <a.div className='login-username' style={useSpring(compute(3))}>
              <input
                type='text'
                value={username}
                placeholder='Username'
                onChange={e => setUsername(e.target.value) }
              />
            </a.div>
            <a.div className='login-password' style={useSpring(compute(4))}>
              <input
                type='password'
                value={password}
                placeholder='Password'
                onChange={e => setPassword(e.target.value)}
              />
            </a.div>
            <a.button type='submit' style={useSpring(compute(5))}>Login</a.button>
          </form>
        </a.div>
        <a.div className='register-login' style={useSpring(compute(6))}>
          <p>Don't have an account? </p>
          <a>Register here!</a>
        </a.div>
      </div>
    </>
  )
}



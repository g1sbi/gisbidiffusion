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


 const compute = useCallback( (a,b,c,d,e,f) => {
    return {
    from: {
      opacity: 0,
      transform: 'translateY(100%)'
    },
    to: {
      opacity: 1,
      transform: 'translateY(0)'
    },
    config: config.molasses,
    delay: a * 200 + b * 400 + c * 600 + d * 800 + e * 1000 + f * 1200
  }});

  const style1 = useSpring(compute(1,0,0,0,0,0))
  const style2 = useSpring(compute(0,1,0,0,0,0))
  const style3 = useSpring(compute(0,0,1,0,0,0))
  const style4 = useSpring(compute(0,0,0,1,0,0))
  const style5 = useSpring(compute(0,0,0,0,1,0))
  const style6 = useSpring(compute(0,0,0,0,0,1))


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
    setToken(token);
  }

  return(
    <>
      <div className='login-page'>
        <a.div className='login-box' style={style1}>
          <a.h1 style={style2}>Login</a.h1>
          <form onSubmit={handleSubmit}>
              <a.div className='login-username' style={style3}>
                <input
                  type='text'
                  value={username}
                  placeholder='Username'
                  onChange={e => setUsername(e.target.value) }
                />
              </a.div>
              <a.div className='login-password' style={style4}>
                <input
                  type='password'
                  value={password}
                  placeholder='Password'
                  onChange={e => setPassword(e.target.value)}
                />
              </a.div>
            <a.button type='submit' style={style5}>Login</a.button>
          </form>
        </a.div>
        <a.div className='register-login' style={style6}>
          <p>Don't have an account? </p>
          <a>Register here!</a>
        </a.div>
      </div>
    </>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}

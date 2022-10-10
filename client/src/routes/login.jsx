import  { useState, useCallback } from 'react';
import { useSpring, animated as a, config } from 'react-spring';
import axios from 'axios';
import '../style/login.css';

export default function Login(){

  const [registered, setRegister] = useState(false);
  const [warning, setWarning] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirm_password, setConfirmPassword] = useState('');
  const [data, setData] = useState('');

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
      config: config.wobbly,
      delay: a * 200 + b * 400 + c * 600 + d * 800 + e * 1000 + f * 1200,
    }});

  const style1 = useSpring(compute(1,0,0,0,0,0))
  const style2 = useSpring(compute(0,1,0,0,0,0))
  const style3 = useSpring(compute(0,0,1,0,0,0))
  const style4 = useSpring(compute(0,0,0,1,0,0))
  const style5 = useSpring(compute(0,0,0,0,1,0))
  const style6 = useSpring(compute(0,0,0,0,0,1))


  const register = () => {
    if(password===confirm_password){
    axios({
      method: 'POST',
      data: {
        username: username,
        password: password
      },
      withCredentials: true,
      url: 'http://localhost:4000/register'
    })
      .then((res) => console.log(res))
    }else{
      setWarning(true);
    }
  } 
  const login = () => {
    axios({
      method: 'POST',
      data: {
        username: username,
        password: password
      },
      withCredentials: true,
      url: 'http://localhost:4000/login'
    })
      .then((res) => setData(res.data))

  } 
  const getUser = () => {
    axios({
      method: 'GET',
      data: {
        username: username,
        password: password
      },
      withCredentials: true,
      url: 'http://localhost:4000/user'
    })
      .then((res) => console.log(res))

  } 

  return(
    <>
      <div className='login-page'>
        <a.div className='login-box' style={style1}>
          {registered ?
            <>
              <a.h1 style={style2}>Login</a.h1>
            </>
            :
            <>
              <a.h1 style={style2}>Register</a.h1>
            </>
          }
          <a.div className='login-username' style={style3}>
            <input
              type='text'
              value={username}
              placeholder='Email'
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
            {!registered &&
            <input
              type='password'
              value={confirm_password}
              placeholder='Confirm password'
              onChange={e => setConfirmPassword(e.target.value)}
            />
            }
          </a.div>
          {registered ?
            <a.button onClick={login} style={style5}>Login</a.button>
            :
            <a.button onClick={register} style={style5}>Register</a.button>
          }
          {warning && <p>Passwords do not match</p>}
        </a.div>
        <a.div className='register-login' style={style6}>
          {registered ? 
            <>
              <p>Don't have an account? </p>
              <button onClick={() => setRegister(!registered)}>Register here</button>
            </>
            :
            <>
              <p>Already have an account? </p>
              <button onClick={() => setRegister(!registered)}>Log in</button>
            </>
          }
        </a.div>
      </div>
    </>
  )
}


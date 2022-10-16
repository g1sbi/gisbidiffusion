import  { useState, useCallback } from 'react';
import { useSpring, animated as a, config } from 'react-spring';
import axios from 'axios';
import '../style/login.css';

export default function Login(){

  const backUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:4000' : 'https://api.diffusion.gisbi.duckdns.org'

  const [registered, setRegister] = useState(false);
  const [warning, setWarning] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm_password, setConfirmPassword] = useState('');
  const [data, setData] = useState('');
  const [postregister, setPostregister] = useState(false);

  const compute = (x) => {
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
      delay: x,
    }};
  
  const style = [];
  
  style.forEach

  const style1 = useSpring(x)
  const style2 = useSpring(x)
  const style3 = useSpring(x)
  const style4 = useSpring(x)
  const style5 = useSpring(x)
  const style6 = useSpring(x)

  const register = () => {
    console.log(password,confirm_password)
    if(password===confirm_password){
    axios({
      method: 'POST',
      data: {
        email: email,
        username: username,
        password: password
      },
      withCredentials: true,
      url: backUrl + '/register'
    })
      .then((res) => console.log(res))
    }else{
      setWarning(true);
    }
    setPostregister(true);
  } 

  const login = () => {
    axios({
      method: 'POST',
      data: {
        username: username,
        password: password
      },
      withCredentials: true,
      url: backUrl + '/login'
    })
      .then((res) => setData(res.data))

  } 

  return(
    <>
      {!postregister && 
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
              value={email}
              placeholder='Email'
              onChange={e => setEmail(e.target.value) }
            />
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
      }
      {postregister && <h1 className='postregister'>Thanks for registering! Please, check your email for a confirmation link</h1>}
    </>
  )
}


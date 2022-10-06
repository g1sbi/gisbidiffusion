import  { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated as a, config } from 'react-spring';
import axios from 'axios';
import '../style/login.css';

export default function Login(){

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState('');

  //check if user has already logged in
  //  useEffect( () => {
  //    const loggedInUser = localStorage.getItem('user');
  //    if (loggedInUser) {
  //      setUser(loggedInUser);
  //    }
  //  }, [] );

  const handleSubmit = async e => {
    e.preventDefault();
    const user = { username, password };
    //send user and pw to the server
    //    const response = await axios.post(
    //      'http://blogservice.herokuapp.com/api/login',
    //      user
    //    );
    //    setUser(response.data)
    //    //store user in local storage
    //    localStorage.setItem('user', response.data)
    //    console.log(response.data)
  };

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



  //logged user

  if (user) {
    return(
      <>
        <h1>Welcome back {user.username}!</h1>
        <Link route={'/'}>
          <button onClick={handleLogout}>logout</button>
        </Link>
      </>
    )
  }

  //new user / logged out
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
                  onChange={({target}) => setUsername(target.value) }
                />
              </a.div>
              <a.div className='login-password' style={style4}>
                <input
                  type='password'
                  value={password}
                  placeholder='Password'
                  onChange={({target}) => setPassword(target.value)}
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

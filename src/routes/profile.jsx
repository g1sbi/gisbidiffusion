import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../style/login.css'

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
        <div className='login-box'>
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <div className='login-username'>
              <input
                type='text'
                value={username}
                placeholder='Username'
                onChange={({target}) => setUsername(target.value) }
              />
            </div>
            <div className='login-password'>
              <input
                type='password'
                value={password}
                placeholder='Password'
                onChange={({target}) => setPassword(target.value)}
              />
            </div>
            <button type='submit'>Login</button>
          </form>
        </div>
      </div>
    </>
  )
}

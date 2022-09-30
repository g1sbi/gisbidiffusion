import { useState } from 'react';
import axios from 'axios';
import '../style/login.css'

export default function Login(){

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState('');

  const handleSubmit = async e => {

  };

  //logged user

  if (user) {
    return(
      <>
        <h1>Welcome back {user.name}!</h1>
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
              <label htmlFor='username'>Username: </label>
              <input
                type='text'
                value={username}
                onChange={({target}) => setUsername(target.value) }
              />
            </div>
            <div className='login-password'>
              <label htmlFor='password'>Password: </label>
              <input
                type='password'
                value={password}
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

import { useState } from 'react'
import '../style/profile.css'
import Login from './login.jsx'

function setToken(userToken) {
  sessionStorage.setItem('token',JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}

export default function Profile(){

  const token= getToken();

  if (!token){
    return <Login setToken={setToken}/>
  }

  return(
    <>
      <h1>Welcome back!</h1>
    </>
  )
}

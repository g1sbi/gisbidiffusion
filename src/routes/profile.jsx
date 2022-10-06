import { useState } from 'react'
import '../style/profile.css'
import Login from './login.jsx'

export default function Profile(){

  const [token, setToken] = useState();

  if (!token){
    return <Login setToken={setToken}/>
  }

  return(
    <>
    </>
  )
}

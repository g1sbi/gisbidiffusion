import React from 'react';
import '@lottiefiles/lottie-player';
import { Link } from 'react-router-dom';
import '../style/landing.css';
import pic1 from '../assets/fav2.jpeg'
import pic2 from '../assets/fav3.jpeg'
import pic3 from '../assets/fav4.jpeg'


function Landing(){

  const handleClick = (e) => {
  }
     

  return(
    <>
        <div className='content'>
          <div className='header'>
            <h1>Gisbi Diffusion</h1>
            <h2>Stable Diffusion, but mediocre</h2>
          </div>
          <div className='text'>
            <p>Hi, If you landed here, welcome! This is a personal project of mine, where you can run Stable Diffusion prompts on my home computer, running on an RTX 2060 Super and a very slow internet connection. Enjoy!</p>
            <div className='link'>
              <Link to={'home'} onClick={handleClick} >START</Link>
            </div>
            <p id='disclaimer'>Disclaimer: the website is still in production phase, some features may be mock ups / not working</p>
          </div>
        </div>
        <div className='landing'>
          <div className='background'>
            <img src={pic1} id='pc' alt=''></img>
            <img src={pic2} id='pc' alt=''></img>
            <img src={pic3} id='pc' alt=''></img>
          </div>
        </div>
    </>
  )
}

export default Landing;

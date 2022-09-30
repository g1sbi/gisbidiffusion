import React, { useState, useEffect, useRef } from 'react';
import '@lottiefiles/lottie-player';
import { create } from '@lottiefiles/lottie-interactivity';
import { useSpring, animated, easings } from 'react-spring';
import { Outlet, Link } from 'react-router-dom';
import '../style/landing.css';
import pic1 from '../fav2.jpeg'
import pic2 from '../fav3.jpeg'
import pic3 from '../fav4.jpeg'


function Landing(){
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
            <Link to={'home'}>START</Link>
          </div>
        </div>
      </div>
      <div className='landing'>
        <div className='background'>
          <img src={pic1} id='pc'></img>
          <img src={pic2} id='pc'></img>
          <img src={pic3} id='pc'></img>
        </div>
      </div>
    </>
  )
}

export default Landing;

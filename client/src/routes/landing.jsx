import React, { useCallback }from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated as a, config } from 'react-spring';
import '../style/landing.css';
import pic1 from '../assets/fav2.jpeg'
import pic2 from '../assets/fav3.jpeg'
import pic3 from '../assets/fav4.jpeg'


function Landing(){

  const handleClick = (e) => {
  }
     
   const compute = useCallback( (a,b,c,d,e) => {
    return {
    from: {
      opacity: 0,
      transform: 'translateY(50%)'
    },
    to: {
      opacity: 1,
      transform: 'translateY(0)'
    },
    config: config.molasses,
    delay: a * 200 + b * 400 + c * 600 + d * 800 + e * 1000
  }});

  const style1 = useSpring(compute(1,0,0,0,0))
  const style2 = useSpring(compute(0,1,0,0,0))
  const style3 = useSpring(compute(0,0,1,0,0))
  const style4 = useSpring(compute(0,0,0,1,0))
  const style5 = useSpring(compute(0,0,0,0,1))

  return(
    <>
        <div className='content'>
          <a.div style={style4} className='header'>
            <h1>Gisbi Diffusion</h1>
            <h2>A Self hosted Stable Diffusion project</h2>
          </a.div>
          <a.div style={style5} className='text'>
            <p>Hi, If you landed here, welcome! This is a personal project of mine, where you can run Stable Diffusion prompts on my home computer, running on an RTX 2060 Super and a very slow internet connection. Enjoy!</p>
            <div className='link'>
              <Link to={'home'} onClick={handleClick} >START</Link>
            </div>
            <p id='disclaimer'>Disclaimer: the website is still in development, some features may be mock ups / not working. Check the changelog in the home page for updates.</p>
          </a.div>
        </div>
        <div className='landing'>
          <div className='background'>
            <a.img src={pic1} style={style1} id='pc' alt=''/>
              <a.img src={pic2} style={style2} id='pc' alt=''/>
            <a.img src={pic3} style={style3} id='pc' alt=''/>
          </div>
        </div>
    </>
  )
}

export default Landing;

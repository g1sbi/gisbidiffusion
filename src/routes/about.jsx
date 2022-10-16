import { useSpring, animated as a, config} from 'react-spring';
import { useCallback } from 'react';
import PC from '../assets/PC.jpg';
import me from '../assets/me.jpg';
import '../style/about.css';

export default function About(){
  
  const compute = (i) => {
       return{
        from: {
          opacity: 0,
          transform: 'translateY(100%)'
        },
        to: {
          opacity: 1,
          transform: 'translateY(0)'
        },
        config: config.wobbly,
        delay: i * 200
      }}

  return (
    <div className='about-page'>
      <a.div className='about-side' style={useSpring(compute(1))}>
        <h1>About</h1>
      </a.div>
      <div className='about-wrapper'>
        <div className='about-pt1' >
          <a.div className='about-pt1-text' style={useSpring(compute(2))}>
            <h2>Tech Stack</h2>
            <p>The prompts are generated on the little guy to your right, an Nvidia RTX 2060 Super. Nothing super fancy, but it gets the job done. Given that Stable Diffusion requires 10GB of VRAM, to fit the model on the 2060S (8GB of VRAM) I had to reduce the floating point precision to 16-bits. </p>
            <p>The front-end for the website is hosted in a Docker container, on my home server running Ubuntu. </p>
          </a.div>
          <a.img src={PC} alt='PC'style={useSpring(compute(3))}/>
        </div>
        <div className='about-pt2' >
          <a.div className='about-pt2-text' style={useSpring(compute(4))}>
            <h2>&lt;about-me&gt;</h2>
            <p> I love AI, and I've been having lots of fun with using Stable Diffusion on my own computer, ever since it came out. I've been thinking it'd have been great to have access to it when away from home, or let my friends have access to it in a simple way, so I made this website. I also love highly stylized webpages, so I've been having fun making this sort of modern take on a pixel-art inspired page. </p>
          </a.div>
          <a.img src={me} alt='me' style={useSpring(compute(5))}/>
        </div>
      </div>
    </div>

  )}


import { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated as a, useTransition, config } from 'react-spring';
import '../style/home.css'
import back_arrow from '../assets/back-arrow.png'
import pic1 from '../assets/pic1.jpeg'
import pic2 from '../assets/pic2.jpeg'
import pic3 from '../assets/pic3.jpeg'
import pic4 from '../assets/pic4.jpeg'
import pic5 from '../assets/pic5.jpeg'
import pic6 from '../assets/pic6.jpeg'


export default function Home() {

    const [tips, setTips] = useState(false);
    const [results, setResults] = useState(false);
    const handleTips = () => {
        tips ? setTips(false) : setTips(true);
    }

    const handlePrompt = () => {
        setResults(true);
    }

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
        <>
            <div className='home-header'>
                <a.div className='header-left' style={useSpring(compute(1))}>
                    <Link to={'/'}>
                        <img src={back_arrow} alt='back arrow'/>
                    </Link>
                </a.div>
                <a.div className='header-right' style={useSpring(compute(2))}>
                    <Link to={'profile'}>Profile</Link>
                    <Link to={'about'}>About</Link>
                </a.div>
            </div>
            <div className='prompt'>
                <a.div className='input' style={useSpring(compute(3))}>
                    <input type='text' id='text-input' placeholder='A cyberpunk city, with neon lights, photorealistic, digital art'></input>
                    <button type='submit' id='button' onClick={handlePrompt}>COMPUTE</button>
                </a.div>
                <a.div className='tips' style={useSpring(compute(4))}>
                    {tips ?
                        <button onClick={handleTips}>
                            <a.div className='tips-box'>
                                <p>Add details like "highly detailed, 4K, trending on artstation, cinematic lighting, masterpiece, etc.."</p>
                                <p>It's especially helpful to pick an artist to direct the style of the image. Try "art by Greg Rutkowski", or any other artist you have in mind!</p>
                            </a.div>
                        </button>
                        :
                        <button onClick={handleTips}>Click for prompt tips! </button>}
                </a.div>
                {results && <Results/>}
            </div>
        </>
    )
}


function Results() {
    //mock up, actual functionality in production

    const pics = [pic1, pic2, pic3, pic4, pic5, pic6]

    const transitions = useTransition(pics, {
        from: { 
            opacity: 0,
            transform: 'translateY(100%)',

        },
        enter: { 
            opacity: 1,
            transform: 'translateY(0)'
        },
        leave: {
            opacity: 0,
            transform: 'translateY(100%)'
        },
        trail: 200,
        config: config.wobbly
    })


    return (
        <div className='results'>
            { transitions((style, item) => (
                <a.div style={style}>
                    <img src={item} alt='prompt-result'/>
                </a.div>
            ))}
        </div>
    )}

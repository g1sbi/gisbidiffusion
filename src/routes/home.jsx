import { useState } from 'react';
import { Link } from 'react-router-dom';
import { animated as a, useTransition} from 'react-spring';
import '../style/home.css'
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
        console.log(results);
    }

    return (
        <>
            <div className='home-header'>
                <div className='header-left'>
                    <Link to={'/'}>Home</Link>
                </div>
                <div className='header-right'>
                    <Link to={'profile'}>Profile</Link>
                    <Link to={'about'}>About</Link>
                </div>
            </div>
            <div className='prompt'>
                <div className='input'>
                    <input type='text' id='text-input' placeholder='A cyberpunk city, with neon lights, photorealistic, digital art'></input>
                    <button type='submit' id='button' onClick={handlePrompt}>COMPUTE</button>
                </div>
                <div className='tips'>
                    {tips ?
                        <button onClick={handleTips}>
                            <div className='tips-box'>
                                <p>Add details like "highly detailed, 4K, trending on artstation, cinematic lighting, masterpiece, etc.."</p>
                                <p>It's especially helpful to pick an artist to direct the style of the image. Try "art by Greg Rutkowski", or any other artist you have in mind!</p>
                            </div>
                        </button>
                        :
                        <button onClick={handleTips}>Click for prompt tips! </button>}
                </div>
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
            transform: 'translateY(100%) scale(120%)',
            
        },
        enter: { 
            opacity: 1,
            transform: 'translateY(0) scale(100%)'
        },
        leave: {
            opacity: 0,
            transform: 'translateY(100%) scale(0)'
        },
        trail: 100
    })


    return (
        <div className='results'>
            { transitions((style, item) => (
                <a.div style={style}>
                    <img src={item}/>
                </a.div>
    ))}
        </div>
    )}

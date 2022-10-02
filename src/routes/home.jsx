import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/home.css'


export default function Home() {

    const [tips, setTips] = useState(false);
    console.log(tips);
    const handleClick = () => {
        tips ? setTips(false) : setTips(true);
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
                    <button type='submit' id='button'>COMPUTE</button>
                </div>
                <div className='tips'>
                    {tips ?
                        <button onClick={handleClick}>
                            <div className='tips-box'>
                                <p>Add details like "highly detailed, 4K, trending on artstation, cinematic lighting, masterpiece, etc.."</p>
                                <p>It's especially helpful to pick an artist to direct the style of the image. Try "art by Greg Rutkowski", or any other artist you have in mind!</p>
                            </div>
                        </button>
                        :
                        <button onClick={handleClick}>Click for prompt tips! </button>}
                </div>
            </div>
        </>
    )
}


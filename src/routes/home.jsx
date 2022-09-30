import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/home.css'


export default function Home() {

    const [tips, setTips] = useState(false);
    return (
        <>
            <div class='home-header'>
                <div class='header-left'>
                    <Link to={'/'}>Home</Link>
                </div>
                <div class='header-right'>
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
                    <Link to={'tips'}>Click for prompt tips! </Link>
                </div>
            </div>
        </>
    )
}



import '../style/home.css'


export default function Home() {
    return (
        <>
            <div className='pages'>
                <p>Profile</p>
                <p>About</p>
            </div>
            <div className='prompt'>
                <input type='text' id='input' placeholder='A cyberpunk city, with neon lights, photorealistic, digital art'></input>
                <button type='submit' id='button'>COMPUTE</button>
            </div>

        </>
    )
}
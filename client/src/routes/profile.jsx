import { useCallback } from 'react'
import useToken from '../hooks/useToken'
import { Link } from 'react-router-dom'
import { useTransition, useSpring, config, animated as a} from 'react-spring'
import Login from './login.jsx'
import '../style/profile.css'
import pfp from '../assets/me.jpg'
import back_arrow from '../assets/back-arrow.png'
import pic1 from '../assets/pic1.jpeg'
import pic2 from '../assets/pic2.jpeg'
import pic3 from '../assets/pic3.jpeg'
import pic4 from '../assets/pic4.jpeg'
import pic5 from '../assets/pic5.jpeg'
import pic6 from '../assets/pic6.jpeg'

export default function Profile(){

  const {token, setToken} = useToken();

 const compute = useCallback( (a,b,c,d,e) => {
    return {
    from: {
      opacity: 0,
      transform: 'translateY(100%)'
    },
    to: {
      opacity: 1,
      transform: 'translateY(0)'
    },
    config: config.slow,
    delay: a * 200 + b * 400 + c * 600 + d * 800 + e * 1000
  }});

  const style1 = useSpring(compute(1,0,0,0,0))
  const style2 = useSpring(compute(0,1,0,0,0))
  const style3 = useSpring(compute(0,0,1,0,0))
  const style4 = useSpring(compute(0,0,0,1,0))
  const style5 = useSpring(compute(0,0,0,0,1))


  if (!token){
    return <Login setToken={setToken}/>
      console.log(token)
  }


  return(
    <>
      <a.div className='navigation' style={style1}>
        <Link to={'/home'}>
          <img src={back_arrow} alt='back arrow'/>
        </Link>
        <button onClick={setToken('')}>Sign out</button>
      </a.div>
      <div className='profile-wrapper'>
        <div className='info'>
          <a.div className='user' style={style2}>
            <img src={pfp} alt='profile'/>
            <div className='user-wrapper'>
              <h1>Gisbi</h1>
              <h3>Joined 7 Oct 2022</h3>
            </div>
          </a.div>
          <a.div className='prompts-stats' style={style3}>
            <h3>prompts made</h3>
            <h1>26</h1>
          </a.div>
          <a.div className='prompts-stats' style={style4}>
            <h3>time spent creating</h3>
            <h1>02 hours, 15 seconds</h1>
          </a.div>
        </div>
        <a.div className='library' style={style5}>
          <h1>Your library</h1>
          <Results/>
        </a.div>
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
        delay: 1300,
        trail: 200,
        config: config.wobbly
    })


    return (
        <div className='library-pictures'>
            { transitions((style, item) => (
                <a.div style={style}>
                    <img src={item} alt='prompt-result'/>
                </a.div>
            ))}
        </div>
    )}

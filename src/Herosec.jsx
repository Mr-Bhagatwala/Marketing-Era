import React, { useEffect } from 'react'
import herosec from './herosec.css'
//import {Typed} from 'typed.js'
import { Link,useNavigate } from 'react-router-dom'

const Herosec = () => {
  // var typeData = new Typed(".third", {
  //   strings: [
  //     "Full Stack Developer",
  //     "Web Developer",
  //     "UI-UX Designer",
  //     "Backend Developer",
  //     "Coder",
  //   ],
  //   loop: true,
  //   typeSpeed: 100,
  //   backSpeed: 80,
  //   backDelay: 1000,
  // });
  const navigate = useNavigate()
  const author = localStorage.getItem('user');
  // useEffect(()=>{
  // const auth = localStorage.getItem('user');

    
  // }
  // )
  return (
    <div className="hero">
      <div className="welcome">
        <div className="up-wel">
          <div className='first line'>Welcome</div>
          <div className='second line'><span className='M'>M</span>arketing<span className='E'>E</span>ra</div>
          <div className='third line'></div>
        </div>
        <div className="low-wel">
            Ensuring the best return on investment for your <br/>
            bespoke SEO campaign requirement   
        </div>
        <div className='logsign'>
{
  author ?<></> :<><div className='login comm' ><Link style={{textDecoration: 'none',color:'black'}} to='/login'>Login</Link></div>
  <div className='signup comm'><Link style={{textDecoration: 'none',color:'black'}} to='/sign'>Signup</Link></div></>
        
}
        </div>
      </div>
      <div className="pic">  
        <img src={require("./Photo/design1.png")} alt="..." />
      </div>
    </div>
  )
}

export default Herosec
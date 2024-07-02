import { stack, Switch } from '@mui/material'
import { Stack } from '@mui/material'
import { Route, Router } from 'react-router-dom'
import { Link ,useNavigate} from 'react-router-dom'
import { Box } from '@mui/material'
import { display, flexbox } from '@mui/system'
// import SearchBar from './SearchBar';
// import {logo} from '../utils/constants';
import navbar from './navbar.css'
import Services from './Services/Services'

const NavbarAd = (props) => {
  const navigate = useNavigate();
  const author = localStorage.getItem('user');
  const logout = ()=>{
    props.setA(null)
    localStorage.clear();
    navigate("/")
  }
  return(
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: 'sticky',
      background: '#191717',
      top: 0,
      justifyContent: 'space-between',
      color: '#FA7225',
    }}
  >
    
    <div className="logo">
      <img src={require("./Photo/logo.png")} alt="" />
    </div>
    
    <div className="rightnav">
      <div className="Home nav">
        <Link to="/">Home</Link>
        <div className="underline"></div>
      </div>
      <div className="services nav "> 
        <Link to="/Services" >Services</Link>
        <div className="underline"></div>
      </div>
      <div className="courses nav">
        <Link to="/list">List</Link>
        <div className="underline"></div>
      </div>
      <div className="about nav">
        <Link to="/about">About Us</Link>
        <div className="underline"></div>
      </div>
      <div className="contact nav">
      <Link to="/Contact1">Contact</Link>
        <div className="underline"></div>
      </div>
      {
     
      author ?<><div className="contact nav"><button onClick={logout}style={{color:"#fa7225",
      textDecoration: "none",background:"none"}}>Logout</button><div className="underline"></div></div></>: <></>
      }
      {/*    */}
      
    </div>
  </Stack>
  )
}

export default NavbarAd
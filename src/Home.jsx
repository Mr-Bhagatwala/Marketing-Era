import React, { useEffect, useState } from 'react'
import Layout from './layout';
import Login from './component/Login';
import Sign from './Sign';
import Contact1 from './Contact1'
import Register from './component/Register'
import Verify from './component/Verify'
import Services from './Services/Services';
import About1 from './about1';
import Registration from './registration';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Course1 from './course1';
import LayoutAd from './layoutadm';
import List from './list';
import Em1 from './Services/em1';
import NavbarAd from './navbaradm';
import Navbar from './Navbar';

const Home = () => {
  let author = localStorage.getItem('user');
  useEffect(()=>{
    author = localStorage.getItem('user');
  })
  author = JSON.parse(author)
  const[otp,setOtp]=useState("")
  const [a,setA] = useState(author)
  return (
    <>
    <Router>
      {/* <List></List> */}
    {a?(a.type==='admin'?<NavbarAd a={a} setA={setA}/>:<Navbar a={a} setA={setA}/>):<Navbar a={a} setA={setA}/>}
      <Routes>
        <Route path='/list' element={<List/>}/>
      <Route path="/login" element={<Login a={a} setA={setA}/>}/>
      {/* <Route path="/list" element={<List/>}/> */}
      <Route path="/register" element={<Register otp={otp} setOtp={setOtp}/>}/>
      <Route path="/" element={<Layout/>}/>
      <Route path="/Contact1" element={<Contact1/>}/>
      <Route path="/Services" element={<Services/>}/>
      <Route path="/course" element={<Course1/>}/>
      <Route path="/About" element={<About1/>}/>
      <Route path="/verify" element={<Verify otp={otp} setOtp={setOtp}/>}/>
      <Route path="/registration" element={<Registration/>}/>
      <Route path="/layoutadmin" element={<LayoutAd/>}/>
      <Route path="/em1" element={<Em1/>}/>
      <Route path="/sign" element={<Register/>}/>
    </Routes>
    </Router>
    </>
  )
}

export default Home
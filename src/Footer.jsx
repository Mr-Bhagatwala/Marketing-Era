import React from 'react'
import footer from './footer.css'
//import FontAwesomeIcon from 'react-fontawesome'

// import "http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css"
// import "http://fonts.googleapis.com/css?family=Cookie"
const Footer = () => {
  return (
    <footer class="footer-distributed">
       

        <div class="footer-left">
            
            <p class="footer-links">
                <a href="#">Home</a>
                <a href="#">Service</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </p>

            <p class="footer-company-name">Copyright © 2023 <strong>Marketing Era </strong> All rights reserved</p>
        </div>

        <div class="footer-center">
            <div className='line1 line'>
                {/* <i class="fa fa-map-marker"></i> */}
                <p>Anand , Gujarat</p>
            </div>

            <div className='line2 line'>
                {/* <i class="fa fa-phone"></i> */}
                <p>+91 1234567890</p>
            </div>
            <div className='line3 line'>
                {/* <i class="fa fa-envelope"></i> */}
                <p><a href="">MarketingEra@gmail.com</a></p>
            </div>
        </div>
        <div class="footer-right">
            <p class="footer-company-about">
                <span>About the company</span><br/>
                <p className='info'>Marketing Era is a Digital Marketing website where you can grow your buisness using our service.</p> 
            </p>
            <div class="footer-icons">
            {/* <FontAwesomeIcon icon="coffee" />
                <a href="#"><FontAwesomeIcon icon="fa-brands fa-facebook" /></a>
                <a href="#"><i class="fa fa-instagram"></i></a>
                <a href="#"><i class="fa fa-linkedin"></i></a>
                <a href="#"><i class="fa fa-twitter"></i></a>
                <a href="#"><i class="fa fa-youtube"></i></a> */}
            </div>
        </div>
        <h3> <span>M</span>arketing<span>E</span>ra</h3>
    </footer>
  )
}

export default Footer
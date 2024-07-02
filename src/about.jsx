import { Stack, Box } from '@mui/system'
import React from 'react'
import about from './about.css'

const About = () => {
  return (
    <Stack>
      <Box className="aboutus">
        
        <div class="homeimg" >
           
           <img src={require("./Photo/about.png")} alt="..." />
       </div>
        <Box className="info">
          <Box className="title1">About Us</Box>
          <Box className="title2">
            We are Your Partener <br />
            in Your Success
          </Box>
          <Box className="help">
            Welcome to Marketing Era, a digital marketing agency
            <br /> that is here to help you soar to new heights in the
            <br /> digital world. We specialize in grow your business.
          </Box>
        </Box>
      </Box>

      <div className="work_flow">
        <div className="maintitle">Our Customized Work Flow</div>
        <div className='flow'>
          <div className="concept same">
            <div className="number">01</div>
            <div className='side'>
              <span className="title">CONCEPT</span>
              Understand the Concept about clients model
            </div>
            {/* <div className="underline"></div> */}
          </div>
          {/* <div className="underline"></div> */}
          <div className="budget same">
            <div className="number">02</div>
            <div className='side'>
              <span className="title">BUDGET</span>
              Discuss about the budget
            </div>
            <div className="underline"></div>
          </div>
          <div className="development same">
            <div className="number">03</div>
            <div className='side'>
              <span className="title">DEVELOPMENT</span>
              Then go for developed
            </div>
            <div className="underline"></div>
          </div>
          <div className="result same">
            <div className="number">04</div>
            <div className='side'>
              <span className="title">RESULT</span>
              This is what you want
            </div>
            <div className="underline"></div>
          </div>
        </div>
      </div>

      <div className="review">
        <div className="head">
          <div className="head1">
            CLIENT'S
            <br /> KIND WORD
          </div>
          <div className="head2">You are the center of our universe</div>
        </div>
        <div className="reviews">
          <div className="rev1 rev">
            <span className="coma">" </span>I would highly recommend
            MarketingEra to anyone who wants to create a digital marketing
            strategy that takes their business to the next level with measured
            results
          </div>
          <div className="rev2 rev">
            <span className="coma">" </span>Marketing Era have built and
            developed our social media platforms from scratch and we now have
            excellent brand awareness online.
          </div>
          <div className="rev3 rev">
            <span className="coma">" </span>Being a small business it’s
            important for us that we keep control of our marketing spend and get
            maximum return on investment. Marketing Era understand this need.
          </div>
          <div className="rev4 rev">
            <span className="coma">" </span> Wouldn't go anywhere else for my
            digital support. If your website is dying on page 3 of Google and
            you need a boost to get it to page 1, these guys will get you there.
          </div>
        </div>
      </div>
    </Stack>
  )
}

export default About
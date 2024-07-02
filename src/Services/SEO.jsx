import React from 'react'
import seo from './seo.css'

const SEO = () => {
  return (
    <>
         <section class="home" id="home">
        <div class="home-content">
            <h1>Search Engine </h1>
            <h1>Optimization</h1>
                <br/>
                <br/>
            <p>Everyone has their super power. Something that simply cannot be out performed.</p>
            <br/>
            <p>Our bullet-proof strategy has held strong for over a decade with over 200 clients showing a positive ROI.</p>
            <br/>
            <b> <span> Search Engine Optimization </span>is Marketing Era's super power.</b>

            <br/>
            <br/>

            <div class="support"> 
                <i class='bx bx-support'></i>
                <h4>Full Support</h4>
                <h6>Email, Instant Chat,Phone Call</h6>
                <br/>
                <br/>
                <br/>

                <i class='bx bxs-watch'></i>
                <h4>1 hour</h4>
                <h6>Average Response Time</h6>
            </div>
        </div>

        <div class="home-img" >
           
            <img src={require("../Photo/SEO.jpg")} alt="..." />
        </div>
        {/* <div className="pic">  
        <img src={require("./Photo/design1.png")} alt="..." />
      </div> */}
    </section>


    <section class="skills" id ="skills">
        <h2 class="heading">Our 6-Step  <span>SEO </span>Process</h2>
        <div class="skills-container">
            <div class="skill-box">
 
                <h3>Competitive Analysis
                    Comparison</h3>
                <p>Act of checking out your industry's competitive landscape online, and analyzing the information you uncover to boost your own website SEO.</p>
          
            </div>
           
            <div class="skill-box">
 
                <h3>Keyword</h3>
                <h3> Research</h3>
                <p> Focus on Keyword Research, Competition for Keywords, Number of Keyword Searches & Keyword Relevance to Company</p>
          
            </div>

            <div class="skill-box">
                <i class='bx bxs-notepad'></i>
                <h3>Website</h3>
                <h3>Audit</h3>
                <p>What is meant by website audit?
                    A website audit is an examination of page performance prior to SEO or a website redesign.</p>
          
            </div>

            <div class="skill-box">

                <h3>Monthly</h3>
                <h3>Reporting</h3>
                <p>Helps your clients keep track of your work and justify why they're spending money on your services. A good SEO report  insights, progress, and recommendations.</p>
          
            </div>
            <div class="skill-box">

                <h3>Link</h3>
                <h3>Building</h3>
                <p>Link building is the practice of building one-way hyperlinks(backlinks) to a website with the goal of improving search engine    visibility.</p>
          
            </div>
            <div class="skill-box">

                <h3>Constant </h3>
                <h3>Updates</h3>
                <p>Technical SEO updates & algorithm's are always evolving. We have a full team dedicated to testing & researching these updates.</p>
          
            </div>
            
        </div>

    </section>
    </>
  )
}

export default SEO
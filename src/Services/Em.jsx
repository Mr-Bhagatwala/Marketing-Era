import React from 'react'
import em from './em.css'

const Em = () => {
  return (
    <>
        <section class="home" id="home">
        <div class="home-content">
            <h1>Email </h1>
            <h1>Marketing</h1>
            <br/>
            <br/>
            <b>Our email marketing services include everything from Strategy to Development to Execution. Our services are highly customizable to suit your specific needs. We serve 25+ Industries and support 50+ Esps.</b>
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
            {/* <img  class="home-img" src="email.png" alt="" width="250px"></img> */}
            <img src={require("../Photo/email.png")} alt="..." />
        </div>
    </section>

    <section class="home" id="home">

        <div class="home-img" >
            {/* <img  class="home-img" src="stat.png" alt="" width="250px"></img> */}
            <img src={require("../Photo/stat.png")} alt="..." />
            
        </div>
        <div class="home-content">
            <h1>Email Marketing  </h1>
            <h1>Planning & Strategy Services</h1>
            <br/>
            <br/>
            <b>Hire Our Email Marketing Strategist For</b>
            <br/>
            <br/>
            <p>Email Automation Program Strategies </p>
            <p>Email Marketing Audits</p>
            <p>Email Testing and Optimization Plans</p>
            <p>Email Vendor Selection</p>
            <p>Email Marketing Campaign Strategies</p>
            <p>List Growth and Nurturing Strategies</p>
            <p>Channel Integration Recommendations and Strategies</p>
            <br/>
            <br/>
        </div> 
    </section>
    <section class="home" id="home">
     <div class="home-content">
            <h2>Email Campaign  </h2>
            <h2>Management Services</h2>
            <br/>
             <b> Our Expert Team. Your Email Marketing Army.</b>
            <p>
                Don't have the staff, time, resources, or expertise to handle your ongoing email marketing campaigns? Consider <b>Marketing Era</b> your elite special force for creating, setting up, and deploying your email marketing campaigns. We'll get to know you, how you work, what you like (and what you don't). We'll do the work for you and we can work on any email service provider you desire.
            </p>
            <br/>
            <b>Our Full-Service Campaign Management Packages Includes</b>
            <ol type="1">
                <li>Content Coordination</li>
                <li>Dedicated Account Management</li>
                <li> Data Management</li>
                <li> Campaign Development and Production</li>
                <li>Basic A/B Testing and Reporting</li>
                <li>Deployment through Your ESP of Choice</li>
                <li>Deployment through Your ESP of Choice</li>
            </ol>
        </div>
        <div class="home-img" >
            {/* <img  class="home-img" src="EM34.png" alt="" ></img> */}
            <img src={require("../Photo/EM34.png")} alt="..." />
          
        </div>  
    </section>

    <section class="home" id="home">

        <div class="home-img" >
            {/* <img  class="home-img" src="design.png" alt="" width="250px" ></img> */}
            <img src={require("../Photo/design.png")} alt="..." />
        </div>
        <div class="home-content">
            <h1>Email Template Design & </h1>
            <h1>Coding Services</h1>
            <br/>
            <br/>
            <b>Action-Focused Design. Precision Coding.</b>
            <br/>
            <br/>
            <p>A well-executed design and perfectly coded email drives action and generates revenue. Our legion of expert email designers and coders are focused on building mobile-friendly, responsive HTML email templates that render correctly across all of the leading email clients.</p>

            <b>Our Template Design And Coding Packages Include</b>
            <p>Pixel-Precise HTML Coding</p>
            <p>Installation into Your ESP of Choice</p>
            <p>Testing to Guarantee Cross-Device Compatibility</p>
            <p>Training on How to Use Your New Templates in Your ESP of Choice</p>

            <br/>
            <br/>
        </div>    
    </section>

    <section class="home" id="home">
    
        <div class="home-content">
            <h2>Email Automation Services</h2>
            <br/>
             <b> Engaged Customers. Profitable Relationships.</b>
            <p>
                Email automation allows you to engage your customers over a period of time, increase the relevancy of your messaging based on data you collect, and drive higher lifetime value as a result—if done correctly.
            </p>
            <br/>
            <b>Examples Of Email Automation Programs</b>
            <ol type="1">
                <li> Welcome Program</li>
                <li> Birthday Program</li>
                <li> Winback Program</li>
                <li> Next Logical Product Program</li>
                <li> Browse History Trigger Program</li>
                <li> Best Customer Program</li>
                <li> Cart Abandonment Program</li>
            </ol>
        </div>
        <div class="home-img" >
            {/* <img  class="home-img" src="automation.png" alt="" ></img> */}
            <img src={require("../Photo/automation.png")} alt="..." />
            

        </div>

        
    </section>
    
    <section class="home" id="home">

        <div class="home-img" >
            {/* <img  class="home-img" src="exp1.png" alt="" width="250px" ></img> */}
            <img src={require("../Photo/exp1.png")} alt="..." />
        </div>
        <div class="home-content">
            <h1>Trained Email Marketing Experts </h1>
            <h1>Available On-Demand</h1>
   
            <br/>
            <br/>
            <p>We are an email agency who believes in reducing the hassles of recruiting, onboarding, and training? InboxArmy offers dedicated and trained email marketing specialists to solve your talent problem once and for all.</p>
            <br/>
            <br/>
            <p>We are an email agency who believes in reducing the hassles of recruiting, onboarding, and training? InboxArmy offers dedicated and trained email marketing specialists to solve your talent problem once and for all.</p>
            <br/>
            <p>The email campaign managers are responsible for managing email marketing campaigns.</p>
            <p>We help you set up customer journeys and complex workflows in various stages of the customer’s buying cycle.</p>
            <p>We have expertise in Journey Builder, Email Studio, Pardot, Data Studio and Interaction Studio.</p>

            <br/>
            <br/>
        </div>
 
    </section>

    </>
  )
}

export default Em
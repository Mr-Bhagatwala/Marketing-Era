import React from 'react'
import cm from './cm.css'

const Cm = () => {
  return (
    <>
     <section class="home" id="home">
        <div class="home-content">
            <h1>Content </h1>
            <h1>Marketing</h1>
            <br/>
            <br/>
            <b>The Most Essential Form of Online Marketing.</b>
            <br/>
            <br/>
            <p>Trying to launch a digital strategy without good Content Marketing is like a car without it's engine. It simply does not work.</p>
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
            {/* <img  class="home-img" src="CM1.png" alt="" width="250px" ></img> */}
            <img src={require("../Photo/CM1.png")} alt="..." />
        </div>
    </section>

    <section class="home" id="home">

        <div class="home-img" >
            {/* <img  class="home-img" src="CM2.png" alt="" width="250px" ></img> */}
            <img src={require("../Photo/CM2.png")} alt="..." />
        </div>
        <div class="home-content">
            <h1>What is </h1>
            <h1>Content Marketing?</h1>
            <br/>
            <br/>
            <p>Content Marketing is the use of generating & implementing helpful content on your website & overall online strategy.</p>
            <br/>
            <br/>
            <p>Content Marketing is key as it helps increase Google rankings (SERP) and benefits your Search Engine Optimization (SEO) efforts as well.

            </p>
            <br/>
            <br/>
            <p>Marketing Era are experts in this field with an entire dedicated team to the service.</p>
            <br/>
        </div>

        
    </section>


    <section class="home" id="home">

        
        <div class="home-content">
            <h2>Why is Content </h2>
            <h2>Marketing so Important?</h2>
            <br/>
            <p>Good content is the <b> foundation of a solid and successful website.</b></p>
            <p>We utilize industry-leading software to help optimize your content to ensure high traffic, visibility, and probability for a high ranking on Search Engines like Google.</p>
            <ol type="1">
                <li>Content Informs your Audience</li>
                <li>Content Ranks in Google & Other Search Engines</li>
                <li>Content Earns Links from Sites to Increase Website Strength</li>
                <li>Content is Easy to Share on Social Media</li>
                <li>Content Earns you Conversions</li>
                <li>Content Makes you a dominating Industry Figure</li>
            </ol>
        </div>
        <div class="home-img" >
            {/* <img  class="home-img" src="CM3.png" alt="" ></img> */}
            <img src={require("../Photo/CM3.png")} alt="..." />
        </div>
    </section>
    <section class="skills" id ="skills">
        <h2 class="heading">Types of<span>Content Marketing</span></h2>
        <div class="skills-container">
            <div class="skill-box">
 
                <h3>Blog posts</h3>
                <p>Blog posts are a cornerstone of Content Marketing. They build brand awareness and increase engagement with your customers.</p>
          
            </div>
           
            <div class="skill-box">
 
                <h3>Videos</h3>
                <p> Who doesn't love to watch quick videos on interesting topics? Videos are hard to produce, but they generate the greatest results.</p>
          
            </div>

            <div class="skill-box">
                <i class='bx bxs-notepad'></i>
                <h3>eBooks</h3>
                <p> ebooks are also an alternative to producing content on the internet. 
                    They are long-form texts that do more than blog posts for one important reason.</p>
          
            </div>

            <div class="skill-box">

                <h3> Case studies</h3>
                <p>In case studies, your company shows how its expertise has already been used to help other businesses and, in return, gains a great opportunity to make sure your prospects understand what it does and how it does it.

                </p>
          
            </div>
            <div class="skill-box">

                <h3> Influencer marketing</h3>
                <p>Using influencers can also be a big deal for brands. Creating content in partnership with influencers that have everything to do with your brand is a great way to make sure your leads convert.</p>
          
            </div>
            <div class="skill-box">
                <h3>Memes</h3>
                <p>There's no reason you can't have fun with your Content Marketing strategy. 
                    If it aligns with your brand and makes sense for your strategy, memes are a great way to make your audience interested in your message.</p>
            </div>
            <div class="skill-box">
                <h3> Guides and how-tos</h3>
                <p>Guides and how-tos are successful ways to increase your presence on the internet, and also the engagement of your brand. </p>
            </div>
            <div class="skill-box">
                <h3>Whitepapers</h3>
                <p>Whitepapers are types of content marketing that contain more information than the average article, but not as much as an eBook.</p>
            </div>
            <div class="skill-box">
                <h3>Newsletters and Email Lists</h3>
                <p>Newsletters and email lists can help get your companys name in front of your customers regularly.</p>
            </div>
            
        </div>

    </section>
    
    </>
   
  )
}

export default Cm;
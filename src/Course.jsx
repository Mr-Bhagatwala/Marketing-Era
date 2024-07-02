import React from 'react';
import './course.css';
import { useNavigate } from 'react-router-dom';

function Course() {
   
    // function Navigate(){
    //     const navigate=useNavigate()
    //     navigate('/registration')
    // }
    const navigate=useNavigate()
    navigate('/registration')
    const handleClick = ()=>{
        let auth = localStorage.getItem('user');
        if(auth)
        {
            navigate('/registration')
        }
        else
        {
            navigate('/login')
        }
    }
  return (
    <>
    <section className="home" id="home">
    <div className="home-content">
        <h3> Let's learn about new</h3>
        <h1>Knowledge and Abilities</h1>
        <h3> <span></span></h3>
        <p>“If you are looking to increase your skills
            Selecta training is offering best digital marketing course.
            Apply now” </p>
        <br/>
        <br/>
        <div className="social-media">
            <a href="/"><i className='bx bxl-facebook'></i></a>
            <a href="/"><i className='bx bxl-linkedin' ></i></a>
            <a href="/"><i className='bx bxs-envelope' ></i></a>
            <a href="/"><i className='bx bxl-instagram-alt' ></i></a>
        </div>
        <br/>
        <br/>
        {/* <!-- <a href="/" className="btn">Dowload CV</a> --> */}
    </div>

    <div className="home-img" >
        {/* <img  className="home-img" src="co.png" alt=""/> */}
        <img src={require("./Photo/co.png")} alt="..." />
    </div>
</section>
{/* <!-- about section design --> */}
<section className="about" id="about">
        <div className="about img">
            <img src={require("./Photo/co1.png")} alt="..." />
        </div>
        <div className="about-content">
            <h2 className="heading"><span>What is a Short Course in Marketing?</span></h2>
            <h3></h3>
            <p>This course is designed to help marketers and business owners create and execute effective digital marketing strategies. You'll learn how to use a variety of digital marketing channels to reach your target audience, drive traffic to your website, and convert leads into customers.</p>
            <b>To enroll in the course, simply click the "Enroll Now" button and follow</b>
            {/* <!-- <a href="/"  className="btn"> Read More</a> --> */}
        </div>
</section>
{/* <!-- skils section design --> */}
<section className="skills" id ="skills">
    <h2 className="heading">Our <span> Courses</span></h2>
    <div className="skills-container">
        <div className="skillbox">
            <i className='bx bxs-videos'></i>
            <h3>Content marketing</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum velit debitis maiores impedit non praesentium quam molestias nulla harum facere.</p>
            <button onClick={handleClick} className="btn">Enroll Now</button>
            
            {/* <button onClick={Navigate}  id="openbtnn">Enroll Now</button> */}
        </div>
        <div className="skillbox">
            <i className='bx bx-search-alt-2' ></i>
            <h3>SEO </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum velit debitis maiores impedit non praesentium quam molestias nulla harum facere.</p>
            <button onClick={handleClick} to="/" className="btn">Enroll Now</button>
            {/* <button onClick={Navigate} className='btn'  id="openbtnn">Enroll Now</button> */}
        </div>
        <div className="skillbox">
            <i className='bx bxs-envelope' ></i>
            <h3>Email marketing</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum velit debitis maiores impedit non praesentium quam molestias nulla harum facere.</p>
            <button onClick={handleClick} className="btn">Enroll Now</button>
            {/* <button onClick={Navigate}  id="openbtnn">Enroll Now</button> */}
        </div>
    </div>
</section>
    {/* <!-- footer section design --> */}
<section className="Review">
    <div className="rew">
        <h2 className="heading">Our <span> Student </span> Says</h2>
    <div className="testimonials">
        <div className="testimonial-item active">
          <img src={require("./Photo/rew2.png")} alt="..." />
          <p className="testimonial-text">"This course was exactly what I needed to take my digital marketing to the next level. The instructor was knowledgeable and engaging, and the interactive quizzes helped me reinforce my learning."</p>
          <p className="testimonial-author"> - Sarah K.</p>
        </div>
        <div className="testimonial-item">
        <img src={require("./Photo/rew1.png")} alt="..." />
          <p className="testimonial-text">"This course was exactly what I needed to take my digital marketing to the next level. The instructor was knowledgeable and engaging, and the interactive quizzes helped me reinforce my learning."</p>
          <p className="testimonial-author"> - Sarah K.</p>
        </div>
        <div className="testimonial-item">
        <img src={require("./Photo/rew2.png")} alt="..." />
          <p className="testimonial-text">"This course was exactly what I needed to take my digital marketing to the next level. The instructor was knowledgeable and engaging, and the interactive quizzes helped me reinforce my learning."</p>
          <p className="testimonial-author"> - Sarah K.</p>
        </div>
        <div className="testimonial-item">
        <img src={require("./Photo/rew1.png")} alt="..." />
          <p className="testimonial-text">"This course was exactly what I needed to take my digital marketing to the next level. The instructor was knowledgeable and engaging, and the interactive quizzes helped me reinforce my learning."</p>
          <p className="testimonial-author"> - Sarah K.</p>
        </div>
        {/* <!-- Add more testimonial items with images as needed --> */}
        <div className="testimonial-dots">
          <span className="dot active" onClick="currentTestimonial(1)"></span>
          <span className="dot" onClick="currentTestimonial(2)"></span>
          <span className="dot" onClick="currentTestimonial(3)"></span>
          <span className="dot" onClick="currentTestimonial(4)"></span>
          {/* <!-- Add more dots as needed --> */}
        </div>
      </div>
    </div>
</section>
</>)}
      export default Course
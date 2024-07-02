import {useState} from 'react';
import './Contectus.css';

const ContactUs = () => {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [massage, setMassage] = useState('');

  const handleSubmit =async (e) => {
    e.preventDefault();
    console.log(name, email, massage);
    let result =  await fetch("http://localhost:8000/Contectus",{
      method:"post",
      body:JSON.stringify({name,email,massage}),
      headers:{
        'Content-Type':'application/json'
      }
    }) 
    result = await result.json();
    if(!result)
    {
      console.log("error has been occured..!!");
    }
    
  };

  return (
    <div className="bodyimg">
    <div className="contact-section">
     {/* <img src="contact.jpg" alt="">  */}
      <div className="contact-info">
        <div><i className="fas fa-map-marker-alt"></i>charusat complex, Changa</div>
        <div><i className="fas fa-envelope"></i>marketingera@email.com</div>
        <div><i className="fas fa-phone"></i>+10 123 123 123</div>
        <div><i className="fas fa-clock"></i>Mon - Fri 8:00 AM to 5:00 PM</div>
      </div>
      <div className="contact-form">
        <h2>Contact Us</h2>
       
          <input type="text"  value={name} onChange={(e)=>{setName(e.target.value)} }name="name"  className="text-box" placeholder="Your Name" required />
          <input type="email"  value={email} onChange={(e)=>{setEmail(e.target.value)} }name="E-mail"  className="text-box" placeholder="Your Email" required/>
         <textarea name="massage"  value={massage} onChange={(e)=>{setMassage(e.target.value)} }id="massage" rows="10" placeholder="type your massage"></textarea>
          <input type="submit" name="submit" onClick={handleSubmit} className="send-btn"  value="send"/>
      
      </div>
    </div>
   

</div>  
  );

  }
export default ContactUs;

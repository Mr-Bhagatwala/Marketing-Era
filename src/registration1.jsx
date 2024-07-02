import React, { useState } from 'react';
import './style.css'
import { Link, useNavigate } from 'react-router-dom'

const Registration = () => {

  const navigate = useNavigate();
  const [name1, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [gender, setGender] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [course, setCourse] = useState("");
  const [select, setselect] = useState("");
  const handleSubmit = async (e) => {
    // e.preventDefault();

    // let er = document.getElementById('Gender');
    // let val = er.value;
    // setCourse(er.options[er.selectedIndex].text)
    // let er1 = document.getElementById('Course');
    // let val1 = er.value;
    // setGender(er.options[er.selectedIndex].text)
    console.log(name1, email, phone, birthdate, gender, streetAddress, city, pincode, course, select);
    let result = await fetch("http://localhost:8000/regschema", {
      method: "post",
      body: JSON.stringify({ name1, email, phone, birthdate, gender, streetAddress, city, pincode, course, select }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    result = await result.json();
    if (result) {
      navigate('/em1');
    }
    else {
      console.log("error has been occured..!!");
    }

  };

  return (
    <>
      <header>
        <h1>Course Registration</h1>
      </header>

      <main>
        <form>
          <h2>Personal Information</h2>
          <label htmlFor="name">Name</label>
          {/* <input type="text" id="name" name="name" required/> */}
          <input type="text" value={name1} onChange={(e) => { setName(e.target.value) }} name="name" className="text-box" placeholder="Your Name" required />

          <label htmlFor="email">Email</label>
          <input type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} name="name" className="text-box" placeholder="Your Name" required />

          {/* <input type="email" id="email" name="email" required/> */}
          <label htmlFor="phone">Phone Number</label>
          {/* <input type="tel" id="phone" name="phone" required/> */}
          <input type="text" value={phone} onChange={(e) => { setPhone(e.target.value) }} name="name" className="text-box" placeholder="Your Name" required />

          <label htmlFor="date">Select BirthDate:</label>
          {/* <input type="date" id="date" name="date" required/> */}
          <input type="text" value={birthdate} onChange={(e) => { setBirthdate(e.target.value) }} name="name" className="text-box" placeholder="Your Name" required />

          <label htmlFor="Gender">Select a Gender </label>
          <input type="text" value={gender} onChange={(e) => { setGender(e.target.value) }} name="name" className="text-box" placeholder="Your Name" required />

          {/* <select id="Gender" name="Gender" >
				<option value="">Please Select </option>
				<option value={gender}>Male</option>
				<option value={gender}>Female</option>
				<option value={gender}>N/A</option>
			</select> */}

          <h2>Address</h2>
          <label htmlFor="Street Address">Street Address</label>
          {/* <input type="text" id="Street Addresse" name="Street Address" required/> */}
          <input type="text" value={streetAddress} onChange={(e) => { setStreetAddress(e.target.value) }} name="name" className="text-box" placeholder="Your Name" required />

          <label htmlFor="City">City</label>
          {/* <input type="text" id="City" name="City" required/> */}
          <input type="text" value={city} onChange={(e) => { setCity(e.target.value) }} name="name" className="text-box" placeholder="Your Name" required />

          <label htmlFor="Pincode">Pincode</label>
          {/* <input type="number" id="Pincode" name="Pincode" required/> */}
          <input type="text" value={pincode} onChange={(e) => { setPincode(e.target.value) }} name="name" className="text-box" placeholder="Your Name" required />


          <h2>Course Selection</h2>
          <label htmlFor="course">Select a Course:</label>
          <input type="text" value={course} onChange={(e) => { setCourse(e.target.value) }} name="name" className="text-box" placeholder="Your Name" required />

          {/* <select id="course" name="course" >
				<option value="">Select a course</option>
				<option value={course}>Content marketing</option>
				<option value={course}>SEO</option>
				<option value={course}>Email marketing</option>
			</select> */}

          <label htmlFor="date">Select Date</label>
          {/* <input type="date" id="date" name="date" required/> */}
          <input type="text" value={select} onChange={(e) => { setselect(e.target.value) }} name="name" className="text-box" placeholder="Your Name" required />


          {/* <button type="submit" onClick={handleSubmit} id="register-btn">Register</button> */}
          <div className="contact nav"><button onClick={() => handleSubmit()}>Register</button><div className="underline"></div></div>

        </form>
      </main>

      <footer>
        <p>&copy; 2023 Course Registration Inc.</p>
      </footer>


    </>
  );
};

export default Registration;

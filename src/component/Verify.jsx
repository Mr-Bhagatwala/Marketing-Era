import React, { useState } from 'react'
import '../css/Verify.css';
import { Link,useNavigate } from 'react-router-dom';
const closepopup=()=>{}
	// setpop(false);
 

const Verify =(props)=>{
// 	let [time,setTime] = useState("30")
   const navigate = useNavigate()
//   let exit=0;
// const a = setInterval(()=>{
// 	console.log(props.otp)
// 	if(exit===1)
// 	clearInterval(a)
// 	if(!time)
// 	{
// 		clearInterval(a)
// 		console.log("bye")
// 		navigate("/register");
// 	}
// 	else
// 	setTime(--time)},1500)

	const matchOtp = ()=>{
		let b = document.getElementById('number').value;
	//	exit=1;
		if(props.otp === b)
		{
			navigate("/")

		}
		else
		{
			navigate("/login")
		}
	}
	// render() {
    return (
      <div>
        
<main className="main">

	<div className="logincontainer-a" id="text-login-a">
	
		<section className="wrapper">
			<div className="heading">
				<h1 className="text text-large-v" id='text-large-v'>Verify Email</h1>
				<hr style={{color:'#1194A9'}}/>
				<Link onClick={closepopup} to="/" id="close">x</Link>

			</div>
			<div className="lines"> 
			<h2 > Enter the OTP send to your Email ID</h2>

			</div>
			<div className="count" id="count">
			<h1 style={{color:'#1194A9'}}> </h1>
			<input type="number" name="number" id="number" className="input-field-a" />
			<br/>
			<button href="/" onClick={matchOtp} className="loginn-v" id="openbtnn-v">Login</button> 

			</div>
			
			
			<div className="method">
				
				
				
			</div>
			
		</section>
	</div>
</main>

      </div>
    )
//   }
}

export default Verify;
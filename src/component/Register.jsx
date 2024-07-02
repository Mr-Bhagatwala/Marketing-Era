import React,{useState} from 'react'
import { Link ,useNavigate} from 'react-router-dom';
import '../css/Register.css';
// import './Registerngo.css';

const closepopup=()=>{

	
}
const Register =(props)=> {
	const navigate = useNavigate();
	const [username,setUsername] = useState("");
	const [email,setEmail] = useState("");
	const [pass,setPass] = useState("");
	const [cpass,setCpass] = useState("")
	const [errmessage,setErr] = useState("")
	const num = Math.floor(Math.random()*1000000);
	const otp=num.toString(); 
	const collectData = async()=>{
		if(pass===cpass)
		{
				props.setOtp(otp);
				setErr("") 
				console.log(username,email)
				let result = await fetch("http://localhost:8000/register",{
					method:"post",
					body:JSON.stringify({username,email,pass,otp}),
					headers:{
						'Content-Type':'application/json'
					}
				});
				result = await result.json();
				if(result){
					navigate("/verify");
				}
				else
				{
					navigate("/login");
				}
			}
			else
			{
				setErr("Passwords are not matching..!!")
			}
	}
    return (
      <div>
        
<main className="main">

	<div className="logincontainerr" id="text-loginn">
	
		<section className="wrapper">
			<div className="heading">
				<p id="error" style={{color:"red"}}>{errmessage}</p>
				<h1 className="text text-large" id='text-large'>Register</h1>
				<hr style={{color:'#1194A9'}}/>
				
                
				<Link onClick={closepopup} to="/"id="close">x</Link>
                
				
				
				
			</div>
			<div name="signin" className="form">
			{/* <p id='login-label-a'>Username:</p> */}
				<div className="input-control">
					<label htmlFor="email" className="input-label">Username:</label>
					<input type="name" value={username} onChange={(e)=>{setUsername(e.target.value)} }name="user" id="usernamee" className="input-field" />
					<br/>
				</div>
				
				<div className="input-control">
					<label htmlFor="email" className="input-label">Email:</label>
					<input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} name="email" id="emaill" className="input-field" />
					<br/>
				</div>
                <div className="input-control">
				{/* <p id='login-label2'>Password:</p> */}
					<label htmlFor="password" className="input-label">Password:</label>
					<input type="password" value={pass} onChange={(e)=>{setPass(e.target.value)}} name="password" id="passwordd" className="input-field" />
					<br />
				</div>
                <div className="input-control">
				{/* <p id='login-label3'>Confirm Password:</p> */}
					<label htmlFor="password" className="input-label" >Confirm Password:</label>
					<input  type="password" value={cpass} onChange={(e)=>{setCpass(e.target.value)}} name="cpassword" id="confirm" className="input-field"/>
					<br />
				</div>
				
				
				{/* <div>
				{/* <input type="submit" name="submit" className="input-submit" id="text1" value="Login" disabled /> */}
				
				
				
				
			<button href="/" onClick={collectData} className="loginn" id="openbtnn">Register</button>
			</div>
			<br/>
				
		{/* /*	<div className="input-control-fgpass-a"> */}
				
					{/* <p href="/" className="text text-linkss" id="for-passs">For NGOs register <Link id="here" to="/regngo">here</Link></p> */}
					
				{/* </div> */}
			<div className="method">
				
				
				
			</div>
		</section>
	</div>
</main>

      </div>
    )
  
}

export default Register;
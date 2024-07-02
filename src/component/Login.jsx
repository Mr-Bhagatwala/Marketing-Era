import React, {useEffect,useState} from 'react'
import '../css/login.css';
import { Link,useNavigate } from 'react-router-dom';
const closepopup=()=>{
    // setpop(false);

  }
  
 const Login =(props)=>  {
    
    const [username,setUsername] = useState("");
    const [pass,setPass] = useState("");
    const [err,Seterr] = useState("");
    const navigate = useNavigate();
  
    useEffect(()=>{
        const author = localStorage.getItem('user');
        if(author)
        navigate('/');
      })
    const handleSubmit = async()=>{
        let result = await fetch("http://localhost:8000/login",{
            method:'post',
            body:JSON.stringify({username,pass,Seterr}),
            headers:{
                'Content-Type':'application/json'
            }
        })
        // to check anything inside the backend property we should use the json i.e. object format
        result = await result.json();
        const data={
            username:result.username,
            email:result.email,
            _id:result.id,
            type:"user"
        }
        props.setA(data)
        if(result.username)
        {
            // we have to store the data inside localstorage in string format.
            localStorage.setItem('user',JSON.stringify(data))
            navigate('/');
        }
        else
        {
			let res2 = await fetch("http://localhost:8000/login_admin",{
				method:'post',
				body:JSON.stringify({username,pass}),
				headers:{
					'Content-Type':'application/json'
				}
			});
			res2 = await res2.json();
            const data={
                username:res2.username,
                email:res2.email,
                _id:res2.id,
                type:"admin"
            }
            props.setA(data)
			if(res2)
			{
            localStorage.setItem('user',JSON.stringify(data))
				navigate("/layoutadmin");
			}
			else
            Seterr("No users found..!!");
        }
    }
    return (
      <div>
        
<main className="main">

    <div className="logincontainer" id="text-login">
    
        <section className="wrapper">
            <div className="heading">
                <p style={{color:"red"}}>{err}</p>
                <h1 className="text text-large" id='text-large'>Login</h1>
                <hr style={{color:'#1194A9'}}/>
                <Link onClick={closepopup} to="/" id="close">x</Link>

            </div>
            {/* <form name="signin" className="form"> */}
            
                <div className="input-control">
                    <label htmlFor="text" className="input-label" >Username:</label>
                    <input type="text" value={username} onChange={(e)=>{setUsername(e.target.value)}} name="email" id="username" className="input-field" />
                    <br/>
                </div>
                <div className="input-control">
                
                    <label htmlFor="password" className="input-label">Password:</label>
                    <input type="password" value={pass} onChange={(e)=>{setPass(e.target.value)}} name="password" id="email" className="input-field" />
                    <br/>
                </div>
                
                
                {/* <div>
                {/* <input type="submit" name="submit" className="input-submit" id="text1" value="Login" disabled /> */}
                
                
                
                
            {/* </form> */}
            <br/>
            <button onClick={handleSubmit} className="loginn" id="openbtnn">Login</button> 
            <div className="input-control-fgpass-a">
                <span>
                    {/* <a href="/" className="text text-links" id="for-pass">Forgot Password?</a>
                    <Link to="/register" className="text text-links" id="sign-up">Sign up</Link> */}
                    <p href="/" className="text text-linkss" id="for-passs">Forgot Password? <Link id="here" to="/register">Sign Up</Link></p>
                </span>
                        
                </div>
            
            
            <div className="method">
                
                
                
            </div>
            
        </section>
    </div>
</main>

      </div>
    )

}

export default Login;
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

function Register() {

    const navigate = useNavigate();
    const { register, GoogleIn } = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");

    const handleRegister = async(e) => {
        e.preventDefault();
        console.log(email, password);

        try {
            await register(email, password);
            alert("You are successfully registered");
            navigate('/');

        }
        catch(error) {
            console.log(error.message);
        }
       
    }

    const handleGoogleIn = async () => {
  try {
    await GoogleIn();
    navigate("/");
    alert("You have successfully logged in");
  } catch (error) {
    console.log(error.message);
  }
};

   

    

    return (
        <div className=' flex w-full bg-gray-100 justify-center items-center h-screen'>
         
         <form 
         onSubmit={handleRegister}
         className='shadow-md bg-white w-100 h-min110 p-8 rounded text-gray-700'>
           <h1 className='text-2xl bold text-fuchsia-600 text-center'>Register</h1>
           <div >
            <p>First Name</p>
            <input type="text" placeholder='Enter your First Name'
            onChange={(e) => setFname(e.target.value)}
            className='p-2 w-full focus:outline-fuchsia-400'/>
           </div>
           <div >
            <p>Last Name</p>
            <input type="text" placeholder='Enter your Last Name'
            onChange={(e) => setLname(e.target.value)}
            className='p-2 w-full focus:outline-fuchsia-400'/>
           </div>
           <div >
            <p>Username</p>
            <input type="email" placeholder='Enter your email address'
            onChange={(e) => setEmail(e.target.value)}
            className='p-2 w-full focus:outline-fuchsia-400'/>
           </div>
           <div >
            <p>Password</p>
            <input type="password" placeholder='password'
            onChange={(e) => setPassword(e.target.value)}
            className='p-2 w-full focus:outline-fuchsia-400'/>
           </div>
           <div className='pt-4'>
            <button type="submit"
            
            className='shadow-md rounded-2xl bg-fuchsia-600
             text-white w-full p-2 cursor-pointer'
             >Register</button>
           </div>
            
            <h1 className="p-4 text-center">OR</h1>
                 <div className="p-2 text-center cursor-pointer outline-1 text-blue-700 rounded-2xl hover:bg-blue-600 hover:text-white">
                    <i className="fab fa-google"></i>
                    <button type="button"
                    onClick={handleGoogleIn}
                    className="p-1 cursor-pointer h-full text-gray-800 hover:text-white"> Sign in with Google</button>

                 </div>
                 
           <p className='text-sm p-2 text-center'>Already Registered  
            <Link to="/Login" className='text-fuchsia-800 cursor-pointer'> Login</Link> </p>
           
         </form>
        </div>
    )
    
}

export default Register
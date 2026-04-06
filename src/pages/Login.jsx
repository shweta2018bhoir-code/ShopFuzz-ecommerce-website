import { useState } from "react";
import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom"; 

function Login() {
 
    const {login, GoogleIn} = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
         console.log(email, password);
         try {
         await login(email, password);
         navigate("/");
         alert("You have successfully logged in")

         }catch(error) {
         console.log(error.message);
    } 
    
}
     const handleGoogleIn = async (e) => {
        try {
            await GoogleIn();
            navigate('/');
            alert("You have successfully logged in")
        } catch (error) {
            console.log(error.message);
        }


    }
     

    return (
        <div className="w-full h-screen flex items-center
        bg-gray-100 justify-center">
            <form 
            onSubmit={handleLogin}
            className="shadow-md bg-white w-100 h-110 p-8 
            rounded text-gray-700">
                <h1 className="text-2xl bold text-center text-fuchsia-600">Login</h1>
                <div >
                    <p>Username</p>
                    <input 
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 focus:outline-fuchsia-400"
                    type="email" placeholder="Enter your email address"/>
                </div>
                <div >
                    <p>Password</p>
                    <input 
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-2 focus:outline-fuchsia-400"
                    type="password" placeholder="password"/>
                </div>
                <div className="pt-4">
                    <button type="submit"
                    
                    className="bg-fuchsia-600 p-2 rounded-2xl w-full
                     text-white text-center">Login</button>
                </div>
                <h1 className="p-4 text-center">OR</h1>
                 <div className="p-2 text-center cursor-pointer outline-1 text-blue-700 rounded-2xl hover:bg-blue-600 hover:text-white">
                    <i className="fab fa-google"></i>
                    <button 
                    onClick={handleGoogleIn}
                    className="p-1 cursor-pointer h-full text-gray-800 hover:text-white"> Sign in with Google</button>

                 </div>
                 <p className=" text-sm p-2 text-center">New User <Link to="/Register" className="text-fuchsia-600">Register</Link></p>

            </form>
            
        </div>
    )
    
}

export default Login
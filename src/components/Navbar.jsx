import { Link } from 'react-router-dom';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../context/AuthContext';


function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    const { user, logout} = useAuth();

    return (
        <nav className=" bg-white shadow-md
          sticky ">
            <div className="flex items-center justify-between gap-4 p-4 ">
           <img src="src/assets/logo.svg"  />
           <div className="hidden md:flex  gap-4 text-gray-500">
            <Link to="/" className='p-2 hover:rounded cursor-pointer hover:bg-fuchsia-600 hover:text-white'>Home</Link>
            <Link to="/Product" className='p-2 hover:rounded cursor-pointer hover:bg-fuchsia-600 hover:text-white'>Products </Link>
            <Link to="/Orders" className='p-2 hover:rounded cursor-pointer hover:bg-fuchsia-600 hover:text-white'>My orders <i className="fas fa-box text-blue-600"></i></Link>
            <Link to="/Wishlist" className='p-2 hover:rounded cursor-pointer hover:bg-fuchsia-600 hover:text-white'>Wishlist <i className="fas fa-heart text-red-600 "></i></Link>
            <Link to="/Cart" className='p-2 hover:rounded cursor-pointer hover:bg-fuchsia-600 hover:text-white'>Cart <i className="fas fa-shopping-cart"></i></Link>
            { user ? (
                <div className='p-2 hover:rounded cursor-pointer hover:bg-fuchsia-600 hover:text-white'>
                    
                
                    <button
                    onClick={logout}
                    ><i className="fas fa-right-from-bracket "></i></button>

                </div>
            ) : (
                <div className='p-2'>
                  <Link to="/Login" className='p-2 hover:rounded cursor-pointer hover:bg-fuchsia-600 hover:text-white'>Login</Link>
                 <Link to='/Register' className='cursor-pointer p-2 hover:rounded hover:bg-fuchsia-600 hover:text-white'>Register</Link>
                </div>     
            )}
            

           </div>

              <button className="md:hidden cursor-pointer bg-fuchsia-200 px-4 
              py-4 text-gray-600 tx-lg rounded"
            onClick={() => setMenuOpen(!menuOpen)}>
                <i className="fas fa-bars"></i>
              </button>

           </div>
           

           {menuOpen && (
            <div className="md:hidden bg-white p-6 flex flex-col gap-2 text-gray-600">
                <Link to="/" className="hover:bg-fuchsia-600 hover:text-white px-6 hover:py-2 
                rounded transition  cursor-pointer"
                onClick={() => setMenuOpen(false)}>Home</Link>
                <Link to="/Product" className="hover:bg-fuchsia-600 hover:text-white px-6 hover:py-2 
                rounded transition  cursor-pointer"
                onClick={() => setMenuOpen(false)}>Products</Link>
                <div className="hover:bg-fuchsia-600 hover:text-white px-6 hover:py-2 
                rounded transition cursor-pointer"
                onClick={() => setMenuOpen(false)}>My Orders</div>
                <Link to="/Wishlist" className="hover:bg-fuchsia-600 hover:text-white px-6 hover:py-2 
                rounded transition cursor-pointer"
                onClick={() => setMenuOpen(false)}>Wishlist</Link>
                <Link to='/Cart' className="hover:bg-fuchsia-600 hover:text-white px-6 hover:py-2 
                rounded transition cursor-pointer"
                onClick={() => setMenuOpen(false)}>Cart</Link>

                { user ? (
                <div className="hover:bg-fuchsia-600 hover:text-white px-6 hover:py-2 
                rounded transition cursor-pointer">
                   <button 
                   onClick={() => {
                    logout();
                   setMenuOpen(false)}}><i className="fas fa-right-from-bracket"></i></button>
                </div>
                ) : (
                <div className='flex flex-col'>
                <Link to="/Login" className="hover:bg-fuchsia-600 hover:text-white px-6 hover:py-2 
                rounded transition cursor-pointer"
                onClick={() => setMenuOpen(false)}>Login</Link>
                <Link to="/Register" className="hover:bg-fuchsia-600 hover:text-white px-6 hover:py-2 
                rounded transition cursor-pointer"
                onClick={() => setMenuOpen(false)}>Register</Link>
                </div>
                )}

        
                

            </div>
           )}
           
        </nav>
    )
    
}

export default Navbar;

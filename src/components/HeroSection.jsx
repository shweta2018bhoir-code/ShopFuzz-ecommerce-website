import heroimg from '../assets/herosec.jpg';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function HeroSection() {
    return (
        <div className="h-[90vh] w-full bg-cover bg-center
        justify-center flex flex-col"
        style={{backgroundImage: `url(${heroimg})`}}
        >
          <div className='mt-12 px-8 py-8 items-center justify-center'>
            <h1 className='text-6xl bold text-white'>
                Discover your <br/> style</h1>
          </div>

          <div className='px-8 items-center justify-center '>
                <Link to="/Product" className='rounded-2xl py-2 px-2 w-50 bg-white
                 text-center cursor-pointer hover:bg-black hover:text-white text-black'>
                    Explore <i className="fas fa-arrow-right"></i>
                </Link>
                
          </div>


        </div>
    )
    
}

export default HeroSection
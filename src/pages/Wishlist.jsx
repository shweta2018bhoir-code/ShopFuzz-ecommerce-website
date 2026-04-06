import { useStore } from "../context/StoreContext";
import { Link } from "react-router-dom";

function Wishlist() {
    
  const { wishlist, removeFromWishlist } = useStore();

  return (
    <div className="p-8 flex flex-col gap-4">
      

      {wishlist.map((item) => (
        <Link to={`/Product/${item.id}`} key={item.id} className="shadow-md bg-fuchsia-100 p-2 relative flex flex-col md:flex-row">
          <button className='absolute top-2 right-2 bg-white 
           text-gray-500 cursor-pointer rounded-full w-8 h-8'
           onClick={() => removeFromWishlist(item.id)}>
                <i className="fas fa-xmark"></i></button>
          <div className="p-2 object-contain bg-white rounded h-30 w-30">
             <img src={item.thumbnail}
              />
          </div>

          <div className='p-4 flex flex-col gap-1 '>
               
               <p className="font-bold text-md">{item.title}</p>
                <p className="text-md text-red-600">{item.discountPercentage} %</p>
               <p className="font-semibold text-green-700">${item.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
    


export default Wishlist
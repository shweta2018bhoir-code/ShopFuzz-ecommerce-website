import { useStore } from "../context/StoreContext.jsx";
import { Link } from "react-router-dom";

function Cart () {

    const { cart, removeFromCart, increaseQty, decreaseQty } = useStore();

  

   return (

    <div className="p-8 flex flex-col gap-4">
      

      {cart.map((item) => (
        <Link to={`/Product/${item.id}`} key={item.id} className="shadow-md bg-fuchsia-100 p-2 relative flex flex-col md:flex-row">
          <button className='absolute top-2 right-2 bg-white 
           text-gray-500 cursor-pointer rounded-full w-8 h-8'
           onClick={() => removeFromCart(item.id)}>
                <i className="fas fa-xmark"></i></button>
          <div className="p-2 object-contain bg-white rounded h-30 w-30">
             <img src={item.thumbnail}
              />
          </div>

          <div className='p-4 flex flex-col gap-1 '>
               
               <p className="font-bold text-md">{item.title}</p>
               <div className="flex gap-2">
                  <p>Quantity: </p>
                  <button 
                  onClick={() => increaseQty(item.id)}
                  className='w-8 h-8 bg-fuchsia-600 text-white text-xl font-bold rounded-full cursor-pointer'>+</button>
                  <p  className="bg-white w-15 text-center font-semibold rounded-xl">{item.quantity}</p>
                  <button
                  onClick={() => decreaseQty(item.id)}
                   className='w-8 h-8 bg-fuchsia-600 text-white text-xl font-bold rounded-full cursor-pointer'>-</button>
               </div>
                 <p className="font-semibold text-green-700">${item.price * item.quantity}</p>
          </div>
        </Link>
      ))}
    </div>

   )
}

export default Cart
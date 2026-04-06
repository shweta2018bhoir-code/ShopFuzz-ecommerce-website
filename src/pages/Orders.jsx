import { useStore } from "../context/StoreContext";
import { Link } from 'react-router-dom';

function Orders() {
  const { orders } = useStore();

  return (
    <div className="p-8 flex flex-col gap-4">
      <h1 className="text-2xl font-bold text-fuchsia-600 ">My Orders</h1>

      {orders.map((order) => (
        <div key={order.id} className="shadow-md bg-fuchsia-100 p-2 relative flex flex-col md:flex-row">
          <Link to={`/Product/${order.product.id}`} className="absolute bottom-2 right-5 bg-fuchsia-600 font-semibold cursor-pointer rounded-2xl text-white p-2">Order again</Link>
          <div className="p-2 object-contain bg-white rounded h-30 w-30">
             <img src={order.product.thumbnail}
              />
          </div>
          <div className='p-2 flex flex-col gap-1 '>
          <p className="font-bold text-md">{order.product.title}</p>
          <p className="text-md text-gray-800">Quantity: {order.quantity}</p>
          <p>Total: <span className="font-semibold text-green-700">₹{order.total}</span></p> 
          <p className="font-semibold">Order Placed on: {order.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Orders
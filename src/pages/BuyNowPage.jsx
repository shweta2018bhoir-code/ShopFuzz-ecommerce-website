import { useNavigate } from 'react-router-dom';
import { useProduct } from '../context/ProductContext';
import { useParams } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import { useState } from 'react';
import { useStore } from '../context/StoreContext';

function BuyNowPage() {

    const navigate = useNavigate();
    const { products, loading } = useProduct();

    const { placeOrder } = useStore();

    const [selectQuantity, setSelectQuantity] = useState(1);
    const [paymentMethod, setPaymentMethod] = useState("Cash on Delivery");
    const [form, setForm] = useState({
        name: '',
        address: '',
    });
    
    const { state } = useLocation();
    const { id } = useParams();

    const product =
    state?.product || products.find((p) => p.id === Number(id));

    if (!product) {
    return <p className="p-6">Loading...</p>;
  }

    console.log(product)

    const Total = product.price*selectQuantity;

    const RazorPayApi = 'rzp_test_SYzDRy6Q1xOztu';
    const ApiTestSec = 'ExhRXWj6XChWz6fbjbabWPXq';

    const quantity = [1,2,3,4,5,6,7,8,9,10];

    const handlePayment = () => {
        const options = {
            key: 'rzp_test_SYzDRy6Q1xOztu',
            amount: Total*100,
            currency: "INR",
            name: 'Shopfuzz',
            description: product.title,
            handler: function(response) {
                placeOrder(product, selectQuantity);
                alert("Payment Successful, Your order has been successfully placed");
                console.log(response); 
            },
            prefill: {
                name: form.name,
            },
            theme: {
                color: "#c800de",
            },
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
    };

    const handleOrder = () => {
        if(paymentMethod === 'Cash on Delivery') {
            placeOrder(product, selectQuantity);
            alert("Your Order has been successfully placed (Cash on Delivery)")
        } else {
            handlePayment();
        }
    }
    return (

        <div className="p-8 dark:bg-gray-900 flex items-center justify-center shadow-md">
            <div className='shadow-md p-2 w-150'>
                <div className='p-1 flex flex-col gap-2 text-gray-700'>
                    <h1 className='text-center text-2xl '>Shipping Details</h1>
                    <p>Full Name: </p>
                    <input type="text" placeholder='Enter your Name...'
                    onChange={(e) => setForm({...form, name: e.target.value})}
                    className='w-full focus:outline-fuchsia-600 p-2 ' />
                    <p>Delivery Address: </p>
                    <input type="text" placeholder='Enter your address...'
                    onChange={(e) => setForm({...form, address: e.target.value})}
                    className='w-full focus:outline-fuchsia-600 p-2 ' />
                    <p>Select payment method</p>
                    <select className='w-full focus:outline-fuchsia-600 p-2'
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}>
                        <option>Cash on Delivery</option>
                        <option>Online Payment</option>
                    </select>

                </div>
               <div className='mt-4 p-4 bg-fuchsia-50 text-gray-600 text-sm rounded'>
                   <h1 className='text-center text-2xl text-gray-700 p-2' >Order Summary: id-{product.id} </h1>
                   <p>Product Name: {product.title}</p>
                   <p>Brand: {product.brand}</p>
                   <p>price: $ {product.price}</p>
               </div>

               <div className='flex p-4 text-sm justify-between'>
                    <div>

                       <p className='text-gray-800'>Select quantity: </p>
                      <select className='focus:outline-fuchsia-600'
                      value={selectQuantity}
                      onChange={(e) => setSelectQuantity(Number(e.target.value))}>

                        {quantity.map((q) => (
                            <option key={q} value={q}>{q}</option>
                        ) )}

                      </select>
                    </div>
                    <div>
                        <p className='flex font-semibold items-center gap-2 justify-center'>Total: <span className='bg-fuchsia-600 px-2 py-1 rounded-2xl text-white'> $ {Total}</span></p>
                    </div>

               </div>

               <button className='p-3 w-full bg-fuchsia-600 cursor-pointer 
               text-md font-bold rounded-2xl text-white'
               onClick={handleOrder}>Place order</button>
              

              
            </div>
        </div>
    )
}

export default BuyNowPage
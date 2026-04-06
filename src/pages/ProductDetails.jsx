import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useProduct } from  '../context/ProductContext.jsx'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../context/StoreContext.jsx';


function ProductDetails() {

    const { id } = useParams();
    const { products, loading } = useProduct();
    const [currentImage, setCurrentImage] = useState(0);

    const { cart, addToCart, wishlist, addToWishlist, removeFromWishlist } = useStore();

    const navigate = useNavigate();


    const product = products.find((p) => p.id === Number(id));

     if (loading || !product) {
    return <p className="p-6">Loading...</p>;
  }

    const images = product.images || [];


    const nextImage = () => {
        setCurrentImage((prev) => 
            prev === images.length -1 ? 0 : prev + 1

        )
    }

    const prevImage = () => {
        setCurrentImage((prev) => 
          prev === 0 ? images.length-1 : prev -1 
      );
    };

    const isInWishlist = wishlist.some((item) => item.id === product.id);

    const isInCart = cart.some((item) => item.id === product.id);

    const handleWishlist = () => {
       if (isInWishlist) {
          removeFromWishlist(product.id);
       } else {
         addToWishlist(product);
       }
    };


    return (
        <div className='p-6 grid md:grid-cols-2 gap-8'>
            <div className='relative w-full'>
                <img src={images[currentImage]}
                 className='w-full h-75 md:h-125 object-contain rounded-lg'/>

            

              {images.length > 1 && (
                <>
                <button
                className="absolute top-1/2 left-2 bg-fuchsia-600 text-white
                px-3 py-1 rounded"
                onClick={prevImage}
                ><i className="fas fa-chevron-left"></i></button>
                <button 
                 className='absolute top-1/2 right-2 bg-fuchsia-600 text-white
                px-3 py-1 rounded'
                onClick={nextImage}
                >
                    <i className="fas fa-chevron-right"></i>
                </button>
                </>
            ) }

             {images.length > 1 && (
                <div className='flex gap-4 items-center mt-4 '>
                    {images.map((img, index) => (
                        <img
                          key={index}
                          src={img}
                          onClick={() => setCurrentImage(index)}
                          className={`w-16 h-16 p-1 object-contain cursor-pointer 
                            rounded border-2 ${currentImage === index 
                                ? "border-fuchsia-600 border-2" 
                                : "border border-gray-300 hover:border-fuchsia-400"}

                             `}
                             />
                    ))}
                    </div>
                    )}
            </div>

            <div className='p-1'>
                <h1 className="font-bold mb-2 p-1 text-3xl text-gray-700">
                 {product.title}
                </h1>

                <p className="text-gray-600 mb-4 p-1">
                   {product.description}
                </p>

        <p className="text-xl text-green-400 mb-2 p-1">
          {product.discountPercentage} %<span className='text-sm '> off</span>
          <span className='text-2xl text-gray-800'>   ${product.price}</span>
        </p>

        

        <p className="text-sm text-gray-500 mb-4 border-gray-200 border-2 p-1">
           Rating: <span className='bg-green-600 text-white font-semibold px-2 rounded'>{product.rating} <i className="fas fa-star text-xs"></i></span>
        </p>

        <div className='text-sm text-gray-600 bg-fuchsia-100 rounded-2xl p-2 pt-4'>
          Details
          <p>Brand: {product.brand}</p>
          <p>Category: {product.category}</p>
          <p>Dimensions: height-{product.dimensions.height}, width-{product.dimensions.width}, depth-{product.dimensions.depth}</p>
          <p>Weight: {product.weight} grms</p>
          <p>Return Policy: {product.returnPolicy}</p>
          <p>Shipping Information: {product.shippingInformation}</p>
          <p>Warranty Period: {product.warrantyInformation}</p>
        </div>

        {/* Buttons */}
        <div className="pt-8 flex flex-col gap-2">
          <button className="bg-yellow-300 font-semibold px-6 py-2 rounded 
          cursor-pinter w-full"
          onClick={() => addToCart(product)}>
            {isInCart ? "Added ✅" : "Add to Cart"}
          </button>

          <button 
          onClick={handleWishlist}
          className="px-6 py-2 rounded font-semibold bg-gray-100 hover:bg-gray-200  cursor-pointer mt-4 w-full">
           <i className={`fas fa-heart ${
                isInWishlist ? "text-red-600" : "text-gray-400"
                }`}></i> {isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
          </button>

          <button 
          onClick={() => navigate(`/BuyNow/${product.id}`, { state: { product } })}
          className='px-6 py-2 rounded font-semibold text-white bg-fuchsia-600 cursor-pointer w-full'>
            Buy Now
          </button>
        </div>

      </div>
        </div>
    )
}

export default ProductDetails
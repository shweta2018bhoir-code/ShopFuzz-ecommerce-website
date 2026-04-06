
import { useProduct } from "../context/ProductContext";
import { Link } from 'react-router-dom';
import { useStore } from "../context/StoreContext";

function ProductCard() {

    const {
    filteredProducts,
    category,
    loading,
    search,
    setSearch,
    filterCategory,
    setFilterCategory,
  } = useProduct();

  const { wishlist, addToWishlist, removeFromWishlist } = useStore();

  const isInWishlist = (id) => {
        return wishlist.some((item) => item.id === id);
    };

    const handleWishlist = (product) => {
        if (isInWishlist(product.id)) {
              removeFromWishlist(product.id);
        } else {
            addToWishlist(product);
          }
    };

    return (

        filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
                <Link to={`/Product/${product.id}`} className='bg-white min-h-80 w-70 shadow-md rounded-2xl
                 flex flex-col gap-0.5 p-2 relative'
                 key={product.id}>

                   <button className='absolute p-2 rounded-2xl hover:bg-gray-200 
                   right-2 cursor-pointer '
                   onClick={(e) => {
                     e.preventDefault();
                     e.stopPropagation();
                     handleWishlist(product);
                   }}>
                    <i className={`fas fa-heart ${isInWishlist(product.id) ? 'text-red-700' : "text-gray-400"}`}></i></button>

                  <div className=' h-60 flex flex-col gap-1 '>
                        <img 
                          className='w-full h-40'
                          src={product.thumbnail}/>
                         <p className='text-sm text-gray-600'>{product.title}</p>
                          <div className='flex gap-4'>
                         <p className='text-sm text-gray-800 font-bold'>$ {product.price}</p>
                        <p className='text-sm text-green-600 bg-green-100 px-2 rounded-2xl'>{product.discountPercentage}% off</p>
                  </div>
                
               
                      <div className='flex flex-col gap-2'>
                          <p className='text-sm text-green-700'>{product.availabilityStatus}</p>

                          <div className='flex justify-between'>
                          <p className='min-w-15 text-sm bg-green-800 text-center text-white rounded-2xl px-2 py-1'>{product.rating} <i className="fas fa-star text-xs"></i></p>

                          <div className='flex gap-4 '>
                           
                           
                           </div>
                          </div>
                      </div>

            </div>
        </Link>

            ))
            
        ) : (
            <p className='text-gray-800'>no products found...</p>
        )
    )
    
}

export default ProductCard
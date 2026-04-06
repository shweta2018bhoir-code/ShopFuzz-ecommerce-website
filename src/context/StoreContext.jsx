import { useContext, createContext, useState, useEffect } from 'react';

const StoreContext = createContext();

export const useStore = () => useContext(StoreContext);

export const StoreProvider = ({ children }) => {

    const [cart, setCart] = useState(() => {
        return JSON.parse(localStorage.getItem('cart')) || []
    });

    const [wishlist, setWishlist] = useState(() => {
        return JSON.parse(localStorage.getItem('wishlist')) || []
    })

    const [orders, setOrders] = useState(() => {
        return JSON.parse(localStorage.getItem('orders')) || []
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        localStorage.setItem('orders', JSON.stringify(orders));
    }, [cart, wishlist, orders]);

    const addToCart = (product, qty = 1) => {

        const quantity = Number(qty);

          
          setCart((prevCart) => {
              const exist = prevCart.find((item) => item.id === product.id);

               if (exist) {
                    return prevCart.map((item) =>
                           item.id === product.id
                           ? { ...item, quantity: item.quantity + quantity }
                           : item
                           );
                } else {
                     return [...prevCart, { ...product, quantity }];
                    }
            });
            alert("Product successfully added to cart")
       };

    const removeFromCart = (id) => {
         setCart((prev) => prev.filter((item) => item.id !== id));
         alert("product successfully removed from cart")
    }  

    const decreaseQty = (id) => {
        setCart((prev) =>
             prev.map((item) =>
               item.id === id
                ? { ...item, quantity: (item.quantity || 1) - 1 }
               : item
             )
             .filter((item) => item.quantity > 0)
        );

    };
     
     const increaseQty = (id) => {
           setCart((prev) =>
           prev.map((item) =>
           item.id === id
           ? { ...item, quantity: (item.quantity || 1) + 1 }
           : item
           )
        );
    };  



    const addToWishlist = (product) => {
         const exist = wishlist.find((item) => item.id === product.id);

         if (!exist) {
            setWishlist([...wishlist, product]);
        }
        alert('product successfully added to wishlist');
    };

    const removeFromWishlist = (id) => {
       setWishlist(wishlist.filter((item) => item.id !== id));
       alert('product successfully removed from cart')
    };

     const placeOrder = (product, quantity) => {
         const newOrder = {
                id: Date.now(),
                product,
                quantity,
                total: product.price * quantity,
                date: new Date().toLocaleDateString()
        };

         setOrders((prev) => [newOrder, ...orders]);
     };


     return (
             <StoreContext.Provider
               value={{
                        cart,
                        wishlist,
                        orders,
                        addToCart,
                        removeFromCart,
                        decreaseQty,
                        addToWishlist,
                        removeFromWishlist,
                        placeOrder,
                        increaseQty,
                   }}>
                             {children}
            </StoreContext.Provider>
)

}
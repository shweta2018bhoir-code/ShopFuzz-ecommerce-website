import { useContext, createContext, useState, useEffect } from "react";
import { isRouteErrorResponse } from "react-router-dom";

const ProductContext = createContext();

export const useProduct = () => useContext(ProductContext);

export const ProductProvider = ({children}) => {

    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [filterCategory, setFilterCategory] = useState('');

    const filteredProducts = products.filter((product) => {
        return (
            product.title?.toLowerCase().includes(search.toLowerCase()) &&
            (filterCategory === "" || product.category === filterCategory)
        )
    });



    const fetchProducts = async () => {
        try {
            const result = await fetch('https://dummyjson.com/products');
            const data = await result.json();
            setProducts(data.products);

            const fetchCategories = [
                ...new Set(data.products.map((product) => product.category))
            ]
            
            setCategory(fetchCategories);

        } catch(error) {
            console.log(error.message);
        }
    }



    useEffect(() => {
        const loadData = async () => {
            await fetchProducts();
            setLoading(false);
        };
        loadData();
    }, []);

    return (
        <ProductContext.Provider
        value={{products, category, loading, search, setSearch,
            filterCategory, setFilterCategory, filteredProducts
        }}>
            {children}

        </ProductContext.Provider>
    );

};



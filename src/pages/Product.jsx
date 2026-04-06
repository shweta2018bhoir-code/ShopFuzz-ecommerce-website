import ProductCard from "../components/ProductCard"
import SideBarFilter from "../components/SideBarFilter";
import { useProduct } from "../context/ProductContext"

function Product() {

    const { products, category, loading, search, setSearch,
            filterCategory, setFilterCategory, filteredProducts } = useProduct();

    return (
        <div className="flex flex-col md:flex-row">
            <SideBarFilter/>

            <div className='flex-1 p-4'>

                <input type='text' 
                placeholder='Search products'
                value={search}
                className='rounded-2xl p-4 cursor-pointer w-full 
                border-r focus:outline-fuchsia-600 bg-fuchsia-100'
                onChange={(e) => setSearch(e.target.value)}/>

                <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2">
                    <ProductCard/>
                 </div>
            </div>
        </div>
    )
}

export default Product
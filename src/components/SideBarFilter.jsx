import { useProduct } from "../context/ProductContext"

function SideBarFilter() {

    const {category, loading,
            filterCategory, setFilterCategory,
        } = useProduct();

    return (
        <div className="w-full md:w-60 p-4 border-r lg:h-screen shadow-lg">
              <h2>Filter By Categories</h2>

              <select value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className=":w-full focus:outline-fuchsia-600
              p-2 text-gray-700 border text-md rounded bg-fuchsia-100">

                <option value=''>All</option>
                 
                {category.map((cat) => (
                    <option 
                    key={cat}
                    value={cat}>{cat}

                    </option>
                ))}
              </select>
        </div>


    )
}

export default SideBarFilter
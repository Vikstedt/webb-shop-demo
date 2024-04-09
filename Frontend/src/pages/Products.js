import ShoppingCartContext from "../Context/ShoppingCartContext"; // Importing ShoppingCartContext


import { Link } from 'react-router-dom';
import { useContext } from "react"; // Importing useContext hook from React
import DisplayProduct from "../components/DisplayProduct";

export default function Products() {
  const { Products } = useContext(ShoppingCartContext);

  return (
    <div className="py-6">
      <div className='flex w-[80%] mx-auto text-base font-semibold py-4'>
        <Link to="/" className=''>Start Page {">"}</Link>
        <Link to="/products" className='mx-4'>Products</Link>
      </div>
      <div className="flex flex-wrap md:w-[70%] mx-auto justify-center">
        {Products.length > 0 ? (
          Products.map((product, index) => (
            <DisplayProduct key={index} product={product} />
          ))
        ) : (
          <div className="flex flex-col justify-center items-center h-screen w-screen bg-gray-100 rounded-3xl">
            <div className="text-center">
              <h1 className="md:text-4xl text-2xl font-bold mb-4 text-gray-800">404 - No Products Loaded</h1>
              <p className="text-lg text-gray-600 mb-8">
                Oops! It seems like the the products on this site has an issue.
              </p>
            </div>
          </div>
        )
        }
      </div>

    </div>

  )
}
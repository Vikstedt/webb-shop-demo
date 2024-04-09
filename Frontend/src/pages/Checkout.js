import ShoppingCartContext from "../Context/ShoppingCartContext"; // Importing ShoppingCartContext
import { useContext } from "react"; // Importing useContext hook from React

import DisplayShoppingCart from "../components/DisplayShoppingCart";

export default function Checkout() {
    const { totalCost, Cart } = useContext(ShoppingCartContext);

    return (
        <div className="lg:w-[60%] mx-auto my-20 shadow-2xl">
            <div className="bg-gray-300 px-4 py-2">
                <h1 className="text-2xl font-semibold m-4">Shopping cart</h1>
            </div>
            <div className="lg:w-[80%] mx-auto my-8">
                {Cart.map((item, index) => (
                    <DisplayShoppingCart key={index} item={item} />
                ))}                
            </div>
            <div className="flex  items-center justify-between bg-gray-200 md:w-[80%] px-12 py-2 mx-auto">
                <h1 className="text-xl font-semibold m-4">Total cost:</h1>
                <p className="text-xl font-semibold">{totalCost} :-</p>
            </div>
            <div className="flex items-center justify-center  px-4 py-8">
                <button className="bg-green-400 hover:bg-green-500 transform duration-500 px-10 py-4 font-bold">continue</button>
            </div>
        </div>
    )
}
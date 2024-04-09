import { Link } from "react-router-dom";
import { useContext } from "react"; // Importing useContext hook from React

import ShoppingCartContext from "../../Context/ShoppingCartContext"; // Importing ShoppingCartContext

import DisplayShoppingCart from "../DisplayShoppingCart";

import { CgShoppingCart, CgClose } from "react-icons/cg";


export default function OpenCartNavbar({ cartIsOpen, changeCartOpen  }) {
    const { Cart, totalCost, totalQuantity } = useContext(ShoppingCartContext);

    return(
        <>
            {cartIsOpen ? (
                <div className="fixed bg-gray-400 bg-opacity-50 w-full h-screen z-50">
                    <div className="fixed top-0 right-0 bottom-0 md:w-[40%] sm:w-[70%] w-[90%] bg-white transform translate-x-0 transition-transform duration-500 ease-in-out">
                        <button onClick={changeCartOpen} className="absolute p-4 top-0 right-0">
                            <CgClose className="h-6 w-6 text-gray-800" />
                        </button>
                        {Cart.length === 0 ? (
                            <div className="flex flex-col  h-full">
                                <div className="bg-slate-200 shadow-xl p-4">
                                    <h1 className="text-lg font-bold text-center">Your Cart Are Empty</h1>
                                </div>
                                <div className="my-auto text-center">
                                    <CgShoppingCart className="h-32 w-32 mb-4 mx-auto"/>
                                    <p className="text-xl text-gray-800 mb-2 font-bold">Your cart is empty</p>
                                    <p className="text-sm text-gray-600">Browse our products and start adding items to your cart.</p>
                                </div>
                            </div>
                        ) : (
                            <div className="flex flex-col">
                                <div className="bg-slate-200 shadow-xl p-4">
                                    <h1 className="text-lg font-bold text-center">Din varukorg ({totalQuantity})</h1>
                                </div>
                                <div className="flex flex-col mx-auto py-5 w-full">
                                    <Link to="/checkout" onClick={changeCartOpen} className="flex flex-row w-2/3 md:w-1/2 mx-auto items-center justify-center bg-green-300 py-2 px-4 font-bold my-4">
                                        <CgShoppingCart className="h-6 w-6" />
                                         <h1 className="ml-2">Gå till kassan</h1>                                           
                                    </Link>
                                </div>
                                <div className="flex flex-row w-full justify-between p-4 md:text-xl text-base font-bold bg-slate-100">
                                    <h2>Totalt</h2>
                                    <h2>{totalCost} SEK</h2>
                                </div>
                                <div className="flex flex-col overflow-y-auto max-h-[350px] w-full py-6 mx-2">
                                    {Cart.map((item, index) => (
                                        <DisplayShoppingCart key={index} item={item} />
                                    ))}
                                </div>
                            </div>

                        )}
                    </div>
                </div>


            ) : (
                <div className="fixed bg-gray-400 bg-opacity-0 w-full z-50">
                    <div className="fixed top-0 right-0 bottom-0 md:w-[40%] sm:w-[70%] w-[90%] bg-white transform translate-x-full transition-transform duration-500 ease-in-out">
                        <button onClick={changeCartOpen} className="absolute p-4 top-0 right-0">
                            <CgClose className="h-6 w-6 text-gray-800" />
                        </button>
                        {Cart.length === 0 ? (
                            <div className="flex flex-col  h-full">
                                <div className="bg-slate-200 shadow-xl p-4">
                                    <h1 className="text-lg font-bold text-center">Your Cart Are Empty</h1>
                                </div>
                                <div className="my-auto text-center">
                                    <CgShoppingCart className="h-32 w-32 mb-4 mx-auto"/>
                                    <p className="text-xl text-gray-800 mb-2 font-bold">Your cart is empty</p>
                                    <p className="text-sm text-gray-600">Browse our products and start adding items to your cart.</p>
                                </div>
                            </div>
                        ) : (
                            <div className="flex flex-col">
                                <div className="bg-slate-200 shadow-xl p-4">
                                    <h1 className="text-lg font-bold text-center">Din varukorg ({totalQuantity})</h1>
                                </div>
                                <div className="flex flex-col mx-auto py-5 w-full">
                                    <Link to="/checkout" onClick={changeCartOpen} className="flex flex-row w-2/3 md:w-1/2 mx-auto items-center justify-center bg-green-300 py-2 px-4 font-bold my-4">
                                        <CgShoppingCart className="h-6 w-6" />
                                        <h1 className="ml-2">Gå till kassan</h1>
                                    </Link>
                                </div>
                                <div className="flex flex-row w-full justify-between p-4 md:text-xl text-base font-bold bg-slate-100">
                                    <h2>Totalt</h2>
                                    <h2>{totalCost} SEK</h2>
                                </div>
                                <div className="flex flex-col overflow-y-auto max-h-[350px] w-full py-6 mx-2">
                                    {Cart.map((item, index) => (
                                        <DisplayShoppingCart key={index} item={item} />
                                    ))}
                                </div>
                            </div>

                        )}
                    </div>
                </div>
            )}
        </>
    )
}
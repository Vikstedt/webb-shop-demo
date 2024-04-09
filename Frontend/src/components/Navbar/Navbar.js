import { Link } from "react-router-dom";

import { CgShoppingCart } from "react-icons/cg";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

import { useState, useContext } from "react";

import OpenCartNavbar from "./OpenCartNavbar";
import OpenSideNavbar from "./OpenSideNavbar";

import ShoppingCartContext from "../../Context/ShoppingCartContext"; // Importing ShoppingCartContext


export default function Navbar() {
    const { totalQuantity } = useContext(ShoppingCartContext);

    const [cartIsOpen, setCartIsOpen] = useState(false)
    const [sideIsOpen, setSideIsOpen] = useState(false)

    function changeCartOpen() {
        setCartIsOpen(!cartIsOpen)
    }

    return (
        <>
            <header className="sticky top-0 z-40 bg-slate-300 shadow-md">
                <nav className="flex flex-row items-center justify-between w-[80%]  h-20 mx-auto ">


                    <div className="md:flex hidden flex-row items-center gap-4">
                        <p className="border-gray-400 border-2 px-4 py-1 rounded-lg">LOGO</p>
                        <Link to="/">
                            <h1 className="bg-gray-400 px-4 py-1 rounded-lg">Home</h1>
                        </Link>
                        <Link to="/products">
                            <h1 className="bg-gray-400 px-4 py-1 rounded-lg">Products</h1>
                        </Link>
                    </div>


                    {/* Mobile menu, toggle className based on menu state */}
                    <div className="flex md:hidden">
                        <HiOutlineMenuAlt3 className="h-8 w-8" onClick={() => setSideIsOpen(!sideIsOpen)} />
                        <OpenSideNavbar sideIsOpen={sideIsOpen} setSideIsOpen={setSideIsOpen} />
                    </div>

                    <p className="border-gray-400 border-2 px-4 py-1 rounded-lg md:hidden">LOGO</p>


                    <button className="relative ">
                        <CgShoppingCart className="md:h-10 md:w-10 h-10 w-10" onClick={changeCartOpen} />

                        {totalQuantity !== 0 ? (
                            <div className="absolute h-4 w-4 -top-1 -right-2 flex justify-center items-center bg-red-500 shadow-lg rounded-full md:p-[12px] p-[10px]">
                                <p className="text-sm">{totalQuantity}</p>
                            </div>
                        ) : (null)
                        }
                    </button>
                </nav>

            </header>
            <OpenCartNavbar cartIsOpen={cartIsOpen} changeCartOpen={changeCartOpen} />
        </>
    )
}
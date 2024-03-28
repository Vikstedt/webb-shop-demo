import { Link } from "react-router-dom";
import { CgShoppingCart } from "react-icons/cg";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

import { useState } from "react";

import OpenCartNavbar from "./OpenCartNavbar";
import OpenSideNavbar from "./OpenSideNavbar";



export default function Navbar() {
    const [cartIsOpen, setCartIsOpen] = useState(false)
    const [sideIsOpen, setSideIsOpen] = useState(false)

    const [totalQuantity, setTotalQuantity] = useState();

    function changeCartOpen() {
        setCartIsOpen(!cartIsOpen)
    }

    const handleTotalQuantityCartNavbar = (data) => {
        setTotalQuantity(data)
    };
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
                        <CgShoppingCart className="h-12 w-12" onClick={changeCartOpen} />
                        {totalQuantity !== 0 ? (
                            <div className="absolute h-4 w-4 top-0 -right-2 flex justify-center items-center bg-red-500 rounded-full p-3">
                                <p className="">{totalQuantity}</p>
                            </div>
                        ) : (null)
                        }
                    </button>
                </nav>

            </header>
            <OpenCartNavbar cartIsOpen={cartIsOpen} changeCartOpen={changeCartOpen} sendTotalQuantityCartNavbar={handleTotalQuantityCartNavbar} />
        </>
    )
}
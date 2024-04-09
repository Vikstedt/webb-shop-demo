
import { CgClose, CgChevronRight  } from "react-icons/cg";
import { Link } from "react-router-dom";


export default function OpenSideNavbar({ sideIsOpen, setSideIsOpen }) {
    return (
        <>
            {sideIsOpen ? (
                <div className="fixed inset-0 bg-gray-400 bg-opacity-50 z-50">
                    <div className="fixed top-0 left-0 bottom-0 md:w-[40%] sm:w-[70%] w-[70%] bg-white transform translate-x-0 transition-transform duration-500 ease-in-out">
                        <button onClick={() => setSideIsOpen(!sideIsOpen)} className="absolute p-4 top-0 right-0">
                            <CgClose className="h-6 w-6 text-gray-800" />
                        </button>
                        <div className="flex flex-col  h-full">
                            <div className="bg-slate-200 shadow-xl py-4">
                                <p className="border-gray-400  px-4 py-1 rounded-lg text-center text-lg font-bold">LOGO</p>
                            </div>

                            <div className="flex flex-col  gap-1 pt-8">
                                <Link to="/" onClick={() => setSideIsOpen(!sideIsOpen)} className="bg-gray-200 flex justify-between items-center py-3">
                                    <h1 className=" px-4 ">Home </h1>
                                    <CgChevronRight className="mx-4"/>
                                </Link>
                                <Link to="/products" onClick={() => setSideIsOpen(!sideIsOpen)} className="bg-gray-200 flex justify-between items-center py-3">
                                    <h1 className="mx-4">Products</h1>
                                    <CgChevronRight className="mx-4"/>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>


            ) : (
                <div className="fixed bg-gray-400 bg-opacity-0 w-full z-50">
                    <div className="fixed top-0 left-0 bottom-0 md:w-[40%] sm:w-[40%] w-[40%] bg-white transform -translate-x-full transition-transform duration-500 ease-in-out">
                    <button onClick={() => setSideIsOpen(!sideIsOpen)} className="absolute p-4 top-0 right-0">
                            <CgClose className="h-6 w-6 text-gray-800" />
                        </button>
                        <div className="flex flex-col  h-full">
                            <div className="bg-slate-200 shadow-xl py-4">
                                <p className="border-gray-400  px-4 py-1 rounded-lg text-center text-lg font-bold">LOGO</p>
                            </div>

                            <div className="flex flex-col  gap-1 pt-8">
                                <Link to="/" onClick={() => setSideIsOpen(!sideIsOpen)} className="bg-gray-200 flex justify-between items-center py-3">
                                    <h1 className=" px-4 ">Home </h1>
                                    <CgChevronRight className="mx-4"/>
                                </Link>
                                <Link to="/products" onClick={() => setSideIsOpen(!sideIsOpen)} className="bg-gray-200 flex justify-between items-center py-3">
                                    <h1 className="mx-4">Products</h1>
                                    <CgChevronRight className="mx-4"/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import ShoppingCartContext from "../Context/ShoppingCartContext";

import NumberDisplay from './NumberDisplay';

export default function Display({ product }) {
    const { addItemToCart } = useContext(ShoppingCartContext);
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative h-[300px] w-52 m-4 border-[1px] overflow-hidden shadow-lg"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            
            <Link to={`/product/${product.id}`}>

                {/* Img of product */}
                <div className="w-full h-1/2">
                    <img src={product.img} alt="" className="h-full w-auto mx-auto p-4" />
                </div>

                {/* Product info (title, description) */}
                <div className={`m-2 h-1/4`} >
                    <div className="h-[40px] overflow-hidden">
                        <h1 className="font-bold text-sm ">
                            {product.title}
                        </h1>
                    </div>
                    <div className="h-[40px] overflow-hidden">
                        <p className="text-sm text-gray-500">
                            {product.description}
                        </p>
                    </div>
                </div>
            </Link>

            <div className='flex flex-col md:h-1/4 h-1/4'>

                <div className='absolute w-full bottom-0'>
                    <div className='mx-2 py-1 border-t-2 bg-white'>
                        <NumberDisplay amount={product.price} />
                    </div>

                    {/* Mobile View */}
                    <div className='md:hidden relative flex'>
                        <button className="w-full" onClick={() => addItemToCart(product.id)}>
                            <div className="bg-black p-2 border border-gray-300 text-center text-white">
                                <p className=''>Lägg i varukorg</p>
                            </div>
                        </button>
                    </div>

                    {/* Desktop View */}
                    <div className="hidden md:flex relative">
                        {isHovered ? (
                            <button
                                className={`w-full bottom-0 transform transition duration-500 ease-in-out translate-y-0 opacity-100`}
                                onClick={() => addItemToCart(product.id)}
                            >
                                <div className="bg-black p-2 border border-gray-300 text-center text-white">
                                    <p className=''>Lägg i varukorg</p>
                                </div>
                            </button>
                        ) : (
                            <button
                                className={`absolute bottom-0 left-0 w-full transform transition duration-500 ease-in-out translate-y-20 opacity-0`}
                                onClick={() => addItemToCart(product.id)}
                                style={{ pointerEvents: 'none' }} // Add this line to prevent clicks when hidden
                            >
                                <div className="bg-black p-2 border border-gray-300 text-center text-white">
                                    <p className=''>Lägg i varukorg</p>
                                </div>
                            </button>
                        )}
                    </div>

                </div>


            </div>
        </div>
    );
}

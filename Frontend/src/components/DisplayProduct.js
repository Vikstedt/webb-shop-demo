import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import ShoppingCartContext from "../Context/ShoppingCartContext";
import { useContext } from "react";

import NumberDisplay from './NumberDisplay';

export default function Display({ product }) {
    const {
        addItemToCart,
        subItemFromCart,
        delItemFromCart,
        Cart
    } = useContext(ShoppingCartContext);

    const [isHovered, setIsHovered] = useState(false);


    return (
        // <Link to={`/product/${product.id}`}>
        <div
            className="relative h-80 w-52 m-4 border-[1px] overflow-hidden shadow-lg"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Link to={`/product/${product.id}`}>
            <div className="w-full h-1/2">
                <img src={product.img} alt="" className="h-full w-auto mx-auto p-4" />
            </div>
            </Link>
            <div className='flex flex-col h-1/2'>
                <div className={`m-2 overflow-hidden ${isHovered ? 'h-1/3 ' : 'h-[60%]'}`}>
                    <h1 className="font-bold">
                        {product.title}
                    </h1>
                    <p className=' text-gray-500'>{product.description}</p>
                </div>
                <div className='absolute w-full bottom-0'>
                    <div className='mx-2 py-2 border-t-2'>
                        {/* {product.price} */}
                        <NumberDisplay amount={product.price} />    
                    </div>
                    {isHovered && (
                        <button
                            className={`w-full bottom-0 transform transition duration-500 ease-in-out ${isHovered ? 'translate-y-0 ' : 'translate-y-20'}`}
                            onClick={() => addItemToCart(product.id)}
                        >

                            <div className="bg-black p-2 border border-gray-300 text-center text-white">
                                <p className=''>Lägg i varukorg</p>
                            </div>

                        </button>
                    )}
                </div>

            </div>
        </div>
    );
}

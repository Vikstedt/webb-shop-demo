import { useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import ShoppingCartContext from "../Context/ShoppingCartContext"; // Import your context here

import NoProductPage from '../components/NoProductFound';

export default function ViewProduct() {
    const { id } = useParams();
    const { Products, addItemToCart } = useContext(ShoppingCartContext);

    const [newToCart, setNewToCart] = useState(1)


    const UpdateNewToCart = (input) => {
        if (input !== "-1") {
            setNewToCart(newToCart + input);
        } else if (input === "-1" && newToCart !== 1) {
            setNewToCart(newToCart + parseInt(input));
        }
    }

    // Find the product with the matching id
    const product = Products.find(product => product.id === parseInt(id));

    // Check if the product exists
    if (!product) {
        return <NoProductPage/>;
    }

    return (
        <div className='md:w-[80%] w-full mx-auto py-10'>
            <div className='flex mx-4 text-base font-semibold'>
                <Link to="/" className=''>Start Page {">"}</Link>
                <Link to="/products" className='mx-4'>Products {">"}</Link>
                <p className=''>{product.title}</p>                
            </div>

            <h1 className="text-2xl font-bold mb-4 mx-4 mt-4">{product.title}</h1>
            <div className='flex md:flex-row flex-col py-8'>
                <div className='md:w-1/2 flex justify-center items-center'>
                    <img src={product.img} alt={product.title} className=' lg:max-h-[250px] max-h-[200px] object-cover mb-6' />
                </div>
                <div className='md:w-1/2 flex flex-col mx-4'>
                    <h2 className='font-bold text-3xl'>{product.price}</h2>
                    <div className='mt-10'>
                        <div className="flex flex-row justify-between items-center " >
                            <div className='flex'>
                                <button className=" bg-slate-200 px-4 py-2" onClick={() => UpdateNewToCart(1)}>+</button>
                                <p className="mx-1 bg-slate-200 px-4 py-2">{newToCart}</p>
                                <button className="bg-slate-200 px-4 py-2" onClick={() => UpdateNewToCart("-1")}>-</button>
                            </div>

                            <button
                                className={`w-2/3 bottom-0`}
                                onClick={() => addItemToCart(product.id, newToCart)}
                            >
                                <div className="flex justify-center bg-black p-2 border border-gray-300 text-center text-white ">
                                    <p className='font-bold'>Lägg i varukorg</p>
                                    <p className='mx-2 text-gray-400'>( {newToCart} )</p>
                                </div>
                            </button>

                        </div>
                        <div className='py-10 border-t-2 mt-10'>
                            <h3 className='text-2xl font-bold'>Product Description</h3>
                            <p className="font-semibold mb-2 mt-4">{product.description}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

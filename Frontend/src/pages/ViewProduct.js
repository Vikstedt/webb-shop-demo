import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import ShoppingCartContext from "../Context/ShoppingCartContext"; // Import your context here

export default function ViewProduct() {
    const { id } = useParams();
    const { Products } = useContext(ShoppingCartContext);

    // Find the product with the matching id
    const product = Products.find(product => product.id === parseInt(id));

    // Check if the product exists
    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className='w-[70%] py-10 mx-auto'>
            <Link to="/products" className='font-bold p-4 m-4 rounded-3xl hover:bg-slate-300 bg-slate-200 duration-500 transform'> {'<- '}tillbaka till produkter</Link>
            <div className="flex flex-col items-center mx-auto justify-center py-20">
                <img src={product.img} alt={product.title} className='w-auto h-52 object-cover mb-6' />
                <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
                <p className="text-gray-600 mb-2">{product.description}</p>
                <p className="text-lg font-semibold text-gray-800 mb-2">Price: {product.price}</p>
                {/* Add more product details here */}
            </div>            
        </div>


    )
}

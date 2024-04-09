import { Link } from 'react-router-dom';

export default function NoProductPage() {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">No Product Found</h1>
                <p className="text-lg">We couldn't find the product you're looking for.</p>
                <Link to="/products" className="text-blue-500 hover:underline">Browse Products</Link>
            </div>
        </div>
    );
}
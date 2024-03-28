import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-gray-500 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">About Us</h3>
                        <p className="text-sm">This is an example e-shop for new experience!</p>
                    </div>
                    <div>
                        <Link to='/contact' className="text-lg font-semibold hover:border-b-2">Contact Us</Link>
                        <p className="text-sm mt-4">Email: info@example.com</p>
                        <p className="text-sm">Phone: +46 (0)70-123 45 67</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                        <ul className="list-none">
                            <li className="inline-block mr-4"><a href="#" className="text-sm text-gray-400 hover:text-white">Facebook</a></li>
                            <li className="inline-block mr-4"><a href="#" className="text-sm text-gray-400 hover:text-white">Twitter</a></li>
                            <li className="inline-block mr-4"><a href="#" className="text-sm text-gray-400 hover:text-white">Instagram</a></li>
                        </ul>
                    </div>
                </div>
                <hr className="border-gray-800 my-8" />
                <div className="text-center">
                    <p className="text-sm">&copy; 2024 Example e-shop. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
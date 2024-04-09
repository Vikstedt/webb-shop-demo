import { Link } from 'react-router-dom';

export default function NoPage() {
    return (
        <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">404 - Page Not Found</h1>
          <p className="text-lg text-gray-600 mb-8">
            Oops! It seems like the page you're looking for does not exist.
          </p>
          <Link to="/" className="text-blue-500 hover:underline">
            Go back to homepage
          </Link>
        </div>
      </div>
      );
    }
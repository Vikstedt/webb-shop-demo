
export default function SideSection() {
    return (
        <div className="bg-gray-200 p-6 lg:rounded-lg shadow-lg h-full lg:mx-4">
          <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
          <div className="mb-6">
            <h3 className="text-lg font-semibold">Customer Service (Private)</h3>
            <p className="text-gray-700">Phone: <a href="tel:+46701234567">+46 (0)70-123 45 67</a></p>
            <p className="text-gray-700">Hours: Monday - Friday, 09:00 AM - 06:00 PM</p>
            <p className="text-gray-700">Email: <a href="mailto:info@example.com">info@example.com</a></p>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-semibold">Business Customers</h3>
            <p className="text-gray-700">Phone: <a href="tel:+46701234567">+46 (0)70-123 45 67</a></p>
            <p className="text-gray-700">Hours: Monday - Friday, 09:00 AM - 05:00 PM</p>
            <p className="text-gray-700">Email: <a href="mailto:info@example.com">info@example.com</a></p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Write to Us</h3>
            <p className="text-gray-700">Example AB</p>
            <p className="text-gray-700">123 45 Stockholm</p>
          </div>
        </div>
      );
    }
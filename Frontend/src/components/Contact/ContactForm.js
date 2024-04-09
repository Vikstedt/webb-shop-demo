import { useState } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        phone: '',
        message: '',
    });

    const [formErrors, setFormErrors] = useState({});
    const [isFormSent, setIsFormSent] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setFormErrors({ ...formErrors, [name]: null });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const errors = {};

        if (!formData.email.match(/^\S+@\S+\.\S+$/)) {
            errors.email = 'Invalid email address';
        }

        if (Object.keys(errors).length === 0) {
            // Form submission logic (replace with your actual submission code)
            sendMessageToServer(formData);


            setIsFormSent(true);
            setFormData({
                email: '',
                firstName: '',
                lastName: '',
                phone: '',
                message: '',
            });

            // Call the send function here if you want to send the email upon successful form submission

        } else {
            setFormErrors(errors);
        }
    };

    const sendMessageToServer = async (input) => {
        try {
            const response = await fetch('http://localhost:5000/send_message', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify(input)
            });

            if (response.ok) {
                console.log('Message sent successfully');
                // Do something after sending the message if needed
            } else {
                console.error('Failed to send message:', response.statusText);
            }
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };
    return (
        <div className=" bg-gray-500  p-4  shadow-2xl text-white">
            <h2 className="text-2xl font-semibold mb-6 " >Contact us</h2>
            {isFormSent && (
                <p className="text-green-600 mb-4">Thank you! Your form has been successfully sent.</p>
            )}
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="firstName" className="block  text-sm font-medium mb-1">
                        First Name:
                    </label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded border-gray-300 bg-transparent"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="lastName" className="block  text-sm font-medium mb-1">
                        Last Name:
                    </label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded border-gray-300 bg-transparent"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block  text-sm font-medium mb-1">
                        Email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded ${formErrors.email ? 'border-red-500' : 'border-gray-300'} bg-transparent`}
                        required
                    />
                    {formErrors.email && <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="phone" className="block  text-sm font-medium mb-1">
                        Phone:
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded border-gray-300 bg-transparent"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block  text-sm font-medium mb-1">
                        Message:
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded border-gray-300 bg-transparent"
                        rows="4"
                        required
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500  py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
                >
                    Skicka
                </button>
            </form>
        </div>
    );
}
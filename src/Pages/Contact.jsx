import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log(formData);
    };

    return (
        <div className='bg-slate-500 p-32'>
            <form onSubmit={handleSubmit} className="bg-black p-6 rounded-md mt-32 w-10/12 mx-auto">
                <h2 className="text-white text-2xl mb-4">Contact me</h2>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-white">Name:</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="border border-gray-300 bg-gray-700 text-white px-4 py-2 rounded-md w-full" />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-white">Email:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="border border-gray-300 bg-gray-700 text-white px-4 py-2 rounded-md w-full" />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-white">Message:</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4" className="border border-gray-300 bg-gray-700 text-white px-4 py-2 rounded-md w-full"></textarea>
                </div>
                <button type="submit" className="bg-white text-black px-4 py-2 rounded-md">Submit</button>
            </form>
        </div>
    );
};

export default Contact;



import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        registrationNumber: '',
        department: '',
        session: '',
        contactNumber: '',
        tshirtSize: '',
    });

    const [status, setStatus] = useState({ type: '', message: '' });
    const [loading, setLoading] = useState(false);

    const sessions = ['2022-2023', '2023-2024', '2024-2025'];
    const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', message: '' });

        // Client-side validation
        if (!formData.session || !formData.tshirtSize) {
            setStatus({ type: 'error', message: 'Please select both Session and T-shirt Size.' });
            setLoading(false);
            return;
        }

        try {
            const res = await axios.post('http://localhost:5000/api/register', formData);
            setStatus({ type: 'success', message: res.data.message });
        } catch (err) {
            setStatus({
                type: 'error',
                message: err.response?.data?.message || 'Registration failed. Try again.'
            });
        } finally {
            setLoading(false);
        }
    };

    if (status.type === 'success') {
        return (
            <div className="min-h-screen py-20 px-4 flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="glass-card w-full max-w-lg p-10 rounded-2xl shadow-xl text-center"
                >
                    <CheckCircle size={80} className="text-neon-green mx-auto mb-6" />
                    <h2 className="text-3xl font-bold mb-4 neon-text">Registration Complete!</h2>
                    <p className="text-gray-300 mb-8 text-lg">Thank you for registering for INTRA SUST.</p>

                    <div className="flex flex-col gap-4">
                        <Link to="/" className="bg-neon-green text-dark-bg font-bold py-3 rounded-lg hover:bg-green-400 transition-colors">
                            Go Home
                        </Link>
                        <button
                            onClick={() => {
                                setStatus({ type: '', message: '' });
                                setFormData({
                                    name: '',
                                    registrationNumber: '',
                                    department: '',
                                    session: '',
                                    contactNumber: '',
                                    tshirtSize: '',
                                });
                            }}
                            className="bg-transparent border border-gray-600 text-gray-300 font-bold py-3 rounded-lg hover:bg-white/5 transition-colors"
                        >
                            Register Another Person
                        </button>
                    </div>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen py-20 px-4 flex items-center justify-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card w-full max-w-2xl p-8 rounded-2xl shadow-xl"
            >
                <Link to="/" className="text-neon-green hover:underline mb-6 block">&larr; Back to Home</Link>
                <h2 className="text-3xl font-bold mb-6 text-center neon-text">Participant Registration</h2>

                {status.message && (
                    <div className={`p-4 mb-6 rounded-lg flex items-center gap-2 ${status.type === 'success' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                        {status.type === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
                        {status.message}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-gray-400 mb-2">Full Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full bg-dark-bg/50 border border-gray-700 rounded-lg p-3 text-white focus:border-neon-green focus:outline-none transition-colors"
                                placeholder="John Doe"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-400 mb-2">Registration No.</label>
                            <input
                                type="text" // Kept as text to allow leading zeros or alphanumeric if needed
                                name="registrationNumber"
                                value={formData.registrationNumber}
                                onChange={handleChange}
                                required
                                className="w-full bg-dark-bg/50 border border-gray-700 rounded-lg p-3 text-white focus:border-neon-green focus:outline-none transition-colors"
                                placeholder="2020331000"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-gray-400 mb-2">Department</label>
                            <input
                                type="text"
                                name="department"
                                value={formData.department}
                                onChange={handleChange}
                                required
                                className="w-full bg-dark-bg/50 border border-gray-700 rounded-lg p-3 text-white focus:border-neon-green focus:outline-none transition-colors"
                                placeholder="CSE"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-400 mb-2">Contact Number</label>
                            <input
                                type="text"
                                name="contactNumber"
                                value={formData.contactNumber}
                                onChange={handleChange}
                                required
                                className="w-full bg-dark-bg/50 border border-gray-700 rounded-lg p-3 text-white focus:border-neon-green focus:outline-none transition-colors"
                                placeholder="01712345678"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-gray-400 mb-2">Session</label>
                        <div className="grid grid-cols-3 gap-4">
                            {sessions.map((s) => (
                                <button
                                    key={s}
                                    type="button"
                                    onClick={() => setFormData({ ...formData, session: s })}
                                    className={`border rounded-lg p-3 text-center transition-all duration-200 ${formData.session === s
                                            ? 'bg-neon-green text-dark-bg font-bold border-neon-green shadow-[0_0_15px_rgba(57,255,20,0.4)]'
                                            : 'border-gray-700 hover:border-gray-500 text-gray-400 hover:text-white'
                                        }`}
                                >
                                    {s}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <label className="block text-gray-400 mb-2">T-shirt Size</label>
                        <div className="flex flex-wrap gap-4">
                            {sizes.map((s) => (
                                <button
                                    key={s}
                                    type="button"
                                    onClick={() => setFormData({ ...formData, tshirtSize: s })}
                                    className={`border rounded-lg w-12 h-12 flex items-center justify-center transition-all duration-200 ${formData.tshirtSize === s
                                            ? 'bg-neon-green text-dark-bg font-bold border-neon-green shadow-[0_0_15px_rgba(57,255,20,0.4)]'
                                            : 'border-gray-700 hover:border-gray-500 text-gray-400 hover:text-white'
                                        }`}
                                >
                                    {s}
                                </button>
                            ))}
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-neon-green text-dark-bg font-bold py-4 rounded-lg hover:bg-green-400 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? 'Registering...' : <><Send size={20} /> Complete Registration</>}
                    </button>
                </form>
            </motion.div>
        </div>
    );
};

export default Register;

'use client';
import React, { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react';


function Login() {
    const [contactInfo, setContactInfo] = useState("")
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [id]: value }));
    };

    return (
        <div className=' bg-slate-900'>
            <div className='min-h-screen flex items-center justify-center'>
                <div className='w-full max-w-md mx-auto shadow-md rounded bg-slate-800 p-2 gap-2'>
                    <div className="flex justify-center mb-4">
                        <p className="font-bold text-white text-xl rounded-full bg-gradient-to-r from-orange-300 via-orange-400 to-orange-600 w-8 h-8 flex items-center justify-center mt-6">
                            E
                        </p>
                    </div>

                    <div className='text-center'>
                        <h1 className='text-white font-bold text-3xl'>Sign in to your account</h1>
                    </div>
                    <p className='text-center text-sm p-1 font-semibold text-gray-500'>Welcome back to Eastern Zaika</p>
                    <div className='flex flex-col p-2'>
                        <label className="text-white text-md font-semibold p-1">Email Address</label>
                        <input
                            type='text'
                            placeholder="enter your email"
                            value={contactInfo}
                            onChange={(e) => setContactInfo(e.target.value)}
                            className='border border-gray-700 py-2 rounded-md p-2 bg-white text-black font-semibold'
                        />

                    </div>
                    <div className="relative p-2">
                        <label className="text-white text-md font-semibold p-1">Password</label>

                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            className="w-full p-2 py-2 border border-gray-700 rounded-md  pr-12"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-6 top-14 transform -translate-y-1/2 text-gray-500"
                        >
                            {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                        </button>
                    </div>
                    <div className="flex items-center space-x-2 px-4">
                        <input
                            type="checkbox"
                            id="checkbox"
                            className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <label htmlFor="checkbox" className="text-gray-400">
                            Remember me
                        </label>
                    </div>

                    <div className='flex justify-center p-2 mt-4'>
                        <button type="submit" className="w-full bg-gradient-to-r from-orange-300 via-orange-400 to-orange-600 text-white py-3 rounded-lg  transition-colors font-semibold">
                            Signin
                        </button>
                    </div>

                    <p className="text-center text-white">
                        Don&apos;t have an account?{' '}
                        <button className="text-yellow-500 hover:text-yellow-600 font-medium">
                            Sign Up
                        </button>
                    </p>

                </div>


            </div>
        </div>
    )
}

export default Login
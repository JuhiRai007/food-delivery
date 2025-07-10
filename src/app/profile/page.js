'use client'
import { useState } from "react";
import { Mail, Phone, Calendar, User } from 'lucide-react';

function Profile() {
    const [activeTab, setActiveTab] = useState('Profile');
    const [profileData, setProfileData] = useState({
        fullName: 'Creed',
        email: 'anubhav3131@gmail.com',
        bio: '',
        favoriteRamenStyles: ''
    })
    
    const handleInputChange = (field, value) => {
        setProfileData(prev => ({
            ...prev,
            [field]: value
        }));
    };
    
    return (
        <div className="bg-slate-900 min-h-screen">
            <div className="max-w-7xl mx-auto p-6">
                {/* Header */}
                <div className="flex justify-between items-start text-white p-6 bg-slate-800 shadow-lg rounded-lg mb-6">
                    <div>
                        <h1 className="text-2xl font-bold text-left">
                            User <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-600 to-amber-700">Profile</span>
                        </h1>
                        <p className="text-gray-400 mt-1">View and manage your personal information</p>
                        <div className="w-16 h-1 mt-4 bg-gradient-to-r from-amber-400 via-amber-600 to-amber-700 rounded-lg"></div>
                    </div>
                    <div>
                        <button className="text-sm font-semibold bg-gradient-to-r from-amber-400 via-amber-600 to-amber-700 text-black py-2 px-4 rounded-md hover:opacity-90 transition-opacity">
                            📝 Edit Profile
                        </button>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex gap-6">
                    {/* Left Profile Card */}
                    <div className="bg-gray-800 rounded-lg p-6 w-80 h-fit">
                        {/* Profile Avatar */}
                        <div className="flex flex-col items-center mb-6">
                            <div className="w-24 h-24 bg-gray-600 rounded-full flex items-center justify-center text-2xl font-bold text-yellow-400 mb-4">
                                J
                            </div>
                            <h2 className="text-xl font-semibold text-white mb-2">Juhi</h2>
                            <span className="bg-yellow-600 text-black px-3 py-1 rounded-full text-sm font-medium">
                                Ramen Enthusiast
                            </span>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-4 mb-8">
                            <div className="flex items-center gap-3 text-gray-300">
                                <Mail size={16} className="text-yellow-400" />
                                <span className="text-sm">juhi311@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-300">
                                <Phone size={16} className="text-yellow-400" />
                                <span className="text-sm">7809920670</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-300">
                                <Calendar size={16} className="text-yellow-400" />
                                <span className="text-sm">Joined: 22 june 2025</span>
                            </div>
                        </div>

                        {/* Navigation Tabs */}
                        <div className="flex bg-gray-700 rounded-lg p-1">
                            {['Profile', 'Addresses', 'Preferences'].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                                        activeTab === tab
                                            ? 'bg-yellow-600 text-black'
                                            : 'text-gray-300 hover:text-white'
                                    }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right Content Panel */}
                    <div className="bg-gray-800 rounded-lg p-6 flex-1">
                        {activeTab === 'Profile' && (
                            <>
                                <h1 className="text-2xl font-semibold text-white mb-8">Profile Information</h1>

                                <div className="space-y-6">
                                    {/* Full Name */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            value={profileData.fullName}
                                            onChange={(e) => handleInputChange('fullName', e.target.value)}
                                            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                                        />
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            value={profileData.email}
                                            onChange={(e) => handleInputChange('email', e.target.value)}
                                            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                                        />
                                        <p className="text-xs text-gray-400 mt-1">Your email cannot be changed.</p>
                                    </div>

                                    {/* Bio */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">
                                            Bio
                                        </label>
                                        <textarea
                                            value={profileData.bio}
                                            onChange={(e) => handleInputChange('bio', e.target.value)}
                                            placeholder="No bio provided yet."
                                            rows={2}
                                            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent resize-none"
                                        />
                                    </div>

                                    {/* Favorite Ramen Styles */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">
                                            Favorite Ramen Styles
                                        </label>
                                        <textarea
                                            value={profileData.favoriteRamenStyles}
                                            onChange={(e) => handleInputChange('favoriteRamenStyles', e.target.value)}
                                            placeholder="No favorites selected yet."
                                            rows={2}
                                            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent resize-none"
                                        />
                                    </div>
                                </div>
                            </>
                        )}

                        {activeTab === 'Addresses' && (
                            <>
                                <h1 className="text-2xl font-semibold text-white mb-8">Delivery Addresses</h1>
                                
                                {/* Empty State */}
                                <div className="flex flex-col items-center justify-center h-96">
                                    <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center mb-6">
                                        <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-white mb-3">No addresses yet</h3>
                                    <p className="text-gray-400 text-center mb-6 max-w-md">
                                        You haven&apos;t added any delivery addresses.
                                    </p>
                                    <button className="bg-gradient-to-r from-amber-400 via-amber-600 to-amber-700 text-black font-medium px-6 py-2 rounded-lg hover:opacity-90 transition-opacity">
                                        Add Address
                                    </button>
                                </div>
                            </>
                        )}

                        {activeTab === 'Preferences' && (
                            <>
                                <h1 className="text-2xl font-semibold text-white mb-8">Preferences</h1>
                                <div className="flex items-center justify-center h-96">
                                    <p className="text-gray-400 text-lg">Preferences content coming soon...</p>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
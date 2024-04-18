import React, { useState } from 'react';
import profileImg from '../assets/logo.png'; 
import gangLogo from '../assets/logo.png'; 

const Profile = () => {
  const [profileInfo, setProfileInfo] = useState({
    firstName: 'Az Zikra',
    lastName: 'Ismunandar',
    age: '21',
    phone: '+62 6456 7890',
    email: 'azzikra1s@rocketmail.com',
    username: 'The Saint'
  });

  const [passwordInfo, setPasswordInfo] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileInfo({
      ...profileInfo,
      [name]: value
    });
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordInfo({
      ...passwordInfo,
      [name]: value
    });
  };

  const handleSaveChanges = () => {
    console.log('Changes saved:', profileInfo);
  };

  const handleOpenChangePasswordModal = () => {
    console.log('Opening change password modal');
  };

  const handleEditFoto = () => {
    console.log('Edit foto clicked');
  };

  return (
    <div className="min-h-screen flex justify-center items-center relative overflow-hidden bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 text-white">
      <div className="max-w-3xl w-full px-6 py-8 shadow-lg bg-gray-900 bg-opacity-90 relative z-10">
        <div className="flex items-center mb-8">
          <div className="flex-shrink-0 relative mr-4">
            <img
              src={profileImg}
              alt="Profile"
              className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-purple-500"
            />
            <button
              onClick={handleEditFoto}
              className="absolute bottom-0 right-0 bg-purple-600 text-white rounded-full w-8 h-8 flex justify-center items-center cursor-pointer hover:bg-purple-700"
            >
              Edit
            </button>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-2">{profileInfo.username}</h2>
            <div className="flex items-center">
              <img src={gangLogo} alt="Gang Logo" className="w-7 h-7 mr-2" />
              <p className="text-lg text-purple-400 font-semibold">
                Saints Row
              </p>
            </div>
            <p className="text-lg text-purple-400">Level 100 | Gang Leader</p>
          </div>
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-2">Personal Information</h3>
          <form className="space-y-4">
            <div className="flex flex-wrap -mx-3 mb-4">
              <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                <label
                  htmlFor="firstName"
                  className="text-sm font-semibold mb-1 block"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={profileInfo.firstName}
                  onChange={handleInputChange}
                  className="w-full rounded-full py-3 px-4 bg-transparent border border-white border-opacity-50 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition duration-300"
                  placeholder="First Name"
                  required
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                <label
                  htmlFor="lastName"
                  className="text-sm font-semibold mb-1 block"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={profileInfo.lastName}
                  onChange={handleInputChange}
                  className="w-full rounded-full py-3 px-4 bg-transparent border border-white border-opacity-50 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition duration-300"
                  placeholder="Last Name"
                  required
                />
              </div>
              <div className="w-full px-3">
                <label
                  htmlFor="username"
                  className="text-sm font-semibold mb-1 block"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={profileInfo.username}
                  onChange={handleInputChange}
                  className="w-full rounded-full py-3 px-4 bg-transparent border border-white border-opacity-50 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition duration-300"
                  placeholder="Username"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="age" className="text-sm font-semibold mb-1 block">
                Age
              </label>
              <input
                type="number"
                id="age"
                name="age"
                value={profileInfo.age}
                onChange={handleInputChange}
                className="w-full rounded-full py-3 px-4 bg-transparent border border-white border-opacity-50 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition duration-300"
                placeholder="Age"
                required
              />
            </div>
            <div className="flex flex-col mb-4">
              <label
                htmlFor="phone"
                className="text-sm font-semibold mb-1 block"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={profileInfo.phone}
                onChange={handleInputChange}
                className="w-full rounded-full py-3 px-4 bg-transparent border border-white border-opacity-50 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition duration-300"
                placeholder="Phone"
                required
              />
            </div>
            <div className="flex flex-col mb-4">
              <label
                htmlFor="email"
                className="text-sm font-semibold mb-1 block"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={profileInfo.email}
                onChange={handleInputChange}
                className="w-full rounded-full py-3 px-4 bg-transparent border border-white border-opacity-50 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition duration-300"
                placeholder="Email Address"
                required
              />
            </div>
            <div className="flex justify-end mb-6">
              <button
                onClick={handleSaveChanges}
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-full mr-2 focus:outline-none focus:shadow-outline"
              >
                Save Changes
              </button>
              <button className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">
                Cancel
              </button>
            </div>
          </form>
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-2">Change Password</h3>
          <form className="space-y-4">
            <div className="flex flex-col mb-4">
              <label
                htmlFor="currentPassword"
                className="text-sm font-semibold mb-1 block"
              >
                Current Password
              </label>
              <input
                type="password"
                id="currentPassword"
                name="currentPassword"
                value={passwordInfo.currentPassword}
                onChange={handlePasswordChange}
                className="w-full rounded-full py-3 px-4 bg-transparent border border-white border-opacity-50 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition duration-300"
                placeholder="Current Password"
                required
              />
            </div>
            <div className="flex flex-col mb-4">
              <label
                htmlFor="newPassword"
                className="text-sm font-semibold mb-1 block"
              >
                New Password
              </label>
              <input
                type="password"
                id="newPassword"
                name="newPassword"
                value={passwordInfo.newPassword}
                onChange={handlePasswordChange}
                className="w-full rounded-full py-3 px-4 bg-transparent border border-white border-opacity-50 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition duration-300"
                placeholder="New Password"
                required
              />
            </div>
            <div className="flex flex-col mb-4">
              <label
                htmlFor="confirmPassword"
                className="text-sm font-semibold mb-1 block"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={passwordInfo.confirmPassword}
                onChange={handlePasswordChange}
                className="w-full rounded-full py-3 px-4 bg-transparent border border-white border-opacity-50 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition duration-300"
                placeholder="Confirm Password"
                required
              />
            </div>
            <div className="flex justify-end mb-6">
              <button
                onClick={handleOpenChangePasswordModal}
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-full mr-2 focus:outline-none focus:shadow-outline"
              >
                Change Password
              </button>
            </div>
          </form>
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Gang Information</h3>
          <p className="text-gray-300 leading-relaxed">
            The Saints Row gang is one of the largest and most influential gangs
            in the city. They are known for their criminal activities and
            control over various illegal businesses.
          </p>
          <ul className="list-disc list-inside text-gray-300 mt-2">
            <li>Number of Members: 50</li>
            <li>Established Since: 1985</li>
            <li>Heritage: Inherited from legendary gang founders</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;

import { useState } from 'react';
import { HiOutlineSearch, HiOutlineBell, HiOutlineUser, HiOutlineCog, HiOutlineLogout, HiChevronDown, HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import profileImg from '../../assets/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  return (
    <nav className="bg-black flex w-full h-[71px] px-7 items-center justify-end sticky top-0 z-50">
      <div className="hidden lg:flex flex-1">
        <div className="relative">
          <input type="text" placeholder="Search" className="w-64 border-2 border-gray-600 p-2 rounded-full bg-transparent focus:ring focus:ring-gray-400 focus:outline-none focus:border-gray-400" />
          <button className="text-white justify-center items-center absolute right-3 top-1/2 transform -translate-y-1/2">
            <HiOutlineSearch size={20} />
          </button>
        </div>
      </div>

      <div className="hidden md:flex items-center space-x-4 mr-5">
        <Link to="#" className="text-white hover:text-purple-400 transition duration-300">Dashboard</Link>
        <div className="border-l border-gray-600 h-6 mx-4"></div> 
        <Link to="#" className="text-white hover:text-purple-400 transition duration-300">Profile</Link>
      </div>

      <div className="relative inline-block text-left ml-4">
        <button className="inline-flex items-center text-white hover:text-purple-400 focus:outline-none" onClick={toggleUserMenu}>
          <img className="rounded-full w-9 h-9" src={profileImg} alt="Profile" />
          <span className="font-semibold ml-2 transition duration-300">The Saint</span>
          <HiChevronDown className="w-5 h-5 transition duration-300" />
        </button>
        {isUserMenuOpen && (
          <div className="absolute right-0 mt-2 w-56 origin-top-right bg-black divide-y divide-gray-600 rounded-md shadow-lg ring-1 ring-gray-700 ring-opacity-70 focus:outline-none">
            <Link to="/profile" className="group flex items-center w-full px-2 py-2 text-sm text-white hover:text-purple-400 focus:outline-none transition duration-300">
              <HiOutlineUser className="w-5 h-5 mr-2" />
              My Profile
            </Link>
            <Link to="/settings" className="group flex items-center w-full px-2 py-2 text-sm text-white hover:text-purple-400 focus:outline-none transition duration-300">
              <HiOutlineCog className="w-5 h-5 mr-2" />
              Settings
            </Link>
            <Link to="/" className="group flex items-center w-full px-2 py-2 text-sm text-red-500 hover:text-red-400 focus:outline-none transition duration-300">
                <HiOutlineLogout className="w-5 h-5 mr-2" />
                Logout
            </Link>
          </div>
        )}
      </div>

      <div className="md:hidden">
        {isMenuOpen ? (
          <HiX className="text-white text-2xl cursor-pointer transition duration-300" onClick={toggleMenu} />
        ) : (
          <HiOutlineUser className="text-white text-2xl cursor-pointer transition duration-300" onClick={toggleMenu} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import images from '../assets/images';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Search query:', searchQuery);
  };

  const navigation = [
    { name: 'Home', route: '/' },
    { name: 'Properties', route: '/propertylistingpage' },
    { name: 'Profile', route: '/userprofilepage' },
    { name: 'Contact', route: '/contactpage' }
  ];

  return (
    <header id="Header_1" className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div id="Header_2" className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img src={images[0]} alt="Logo" className="h-8 w-auto hover:opacity-80 transition-opacity" />
              <span className="ml-2 text-white font-bold text-xl">RealEstate</span>
            </Link>
          </div>

          <div id="Header_3" className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.route}
                  className={`${location.pathname === item.route ? 'bg-blue-700 text-white' : 'text-white hover:bg-blue-700'} px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div id="Header_4" className="hidden md:flex items-center">
            <form onSubmit={handleSearch} className="mr-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search properties..."
                  className="w-64 px-4 py-1 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  🔍
                </button>
              </div>
            </form>
            <div id="Header_5" className="flex space-x-2">
              <Link to="/loginpage" className="bg-white text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                Login
              </Link>
              <Link to="/registerpage" className="bg-blue-500 text-white hover:bg-blue-400 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                Register
              </Link>
            </div>
          </div>

          <div id="Header_6" className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-700 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div id="Header_7" className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.route}
                className={`${location.pathname === item.route ? 'bg-blue-700 text-white' : 'text-white hover:bg-blue-700'} block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200`}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/loginpage" className="block px-3 py-2 text-white hover:bg-blue-700 rounded-md text-base font-medium transition-colors duration-200">
              Login
            </Link>
            <Link to="/registerpage" className="block px-3 py-2 text-white hover:bg-blue-700 rounded-md text-base font-medium transition-colors duration-200">
              Register
            </Link>
          </div>
          <div className="px-2 pb-3">
            <form onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Search properties..."
                className="w-full px-4 py-2 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
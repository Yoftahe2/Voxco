import React, { useEffect, useRef, useState } from 'react'
import { House, User, UserRound } from 'lucide-react'
import { Hash, ArrowDownLeft, ArrowUpRight, Network } from "lucide-react";
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from './AuthContext';

function Header() {
   const { logout, user } = useAuth();
   
const navigate = useNavigate()
const [isOpen, setIsOpen] = useState(false);
const [isDropdownOpen, setIsDropdownOpen] = useState(false);

const [mobileOpen, setMobileOpen] = useState(false);
const [mobileOrderOpen, setMobileOrderOpen] = useState(false);


const [isOrderDropdownOpen, setIsOrderDropdownOpen] = useState(false);
const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

const toggleOrderDropdown = () => setIsOrderDropdownOpen(!isOrderDropdownOpen);
const closeOrderDropdown = () => setIsOrderDropdownOpen(false);

const toggleProfileDropdown = () => setIsProfileDropdownOpen(!isProfileDropdownOpen);
const closeProfileDropdown = () => setIsProfileDropdownOpen(false);

const handleMouseEnterOrder = () => setIsOrderDropdownOpen(true);
const handleMouseLeaveOrder = () => setIsOrderDropdownOpen(false);

const handleMouseEnterProfile = () => setIsProfileDropdownOpen(true);
const handleMouseLeaveProfile = () => setIsProfileDropdownOpen(false);

    const handleNumbersClick = () => {
        navigate('/numbers'); 
        closeOrderDropdown();
    };

    const handlePortInClick = () => {
        alert('Port-in functionality coming soon!'); 
        closeOrderDropdown();
    };

    const handlePortOutClick = () => {
        alert('Port-out functionality coming soon!');
        closeOrderDropdown();
    };

    const handleSipTrunkClick = () => {
        alert('SIPTRUNK functionality coming soon!');
        closeOrderDropdown();
    };

    const handleServicesClick = () => {
        navigate('/about'); 
    };

    const handleResetPassword = () => {
        navigate('/reset-password');
        closeProfileDropdown();
    };

  const dropdownRef = useRef(null);

// Close dropdown if clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
       document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [])


    const handleLogout = () => {
    logout();
    navigate('/sign-in');
  };

  return (
    <header className="bg-[#215F9A] text-white py-4 sm:py-6 px-4 sm:px-8 shadow-lg relative z-50">
  <div className="flex justify-between items-center">

    {/* LOGO */}
    <div
      className="flex items-center gap-3 cursor-pointer"
      onClick={() => navigate("/")}
    >
      <img
        src="/logo.png"
        alt="Voxco Communications"
        className="w-36 sm:w-52 md:w-60 transition-all"
      />
    </div>

    {/* DESKTOP NAV (hidden on mobile) */}
    <nav className="hidden md:flex items-center gap-6 lg:gap-10 text-base lg:text-lg">

      {/* Order Dropdown */}
      <div
        className="relative"
        onMouseEnter={handleMouseEnterOrder}
        onMouseLeave={handleMouseLeaveOrder}
      >
        <button
          onClick={toggleOrderDropdown}
          className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-[#2c78c0] transition-colors cursor-pointer cursor-pointer"
        >
          ORDER
        </button>

        {/* Desktop Dropdown */}
        
        {isOrderDropdownOpen && (
  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50 border border-gray-200 text-gray-700">

    <button 
      onClick={handleNumbersClick}
      className="w-full text-left px-4 py-3 text-base hover:bg-gray-100 flex items-center gap-3 transition-colors cursor-pointer"
    >
      <Hash className="w-5 h-5 text-gray-600" />
      Numbers
    </button>

    <button 
      onClick={handlePortInClick}
      className="w-full text-left px-4 py-3 text-base hover:bg-gray-100 flex items-center gap-3 transition-colors cursor-pointer"
    >
      <ArrowDownLeft className="w-5 h-5 text-gray-600" />
      Port-in
    </button>

    <button 
      onClick={handlePortOutClick}
      className="w-full text-left px-4 py-3 text-base hover:bg-gray-100 flex items-center gap-3 transition-colors cursor-pointer"
    >
      <ArrowUpRight className="w-5 h-5 text-gray-600" />
      Port-out
    </button>

    <button 
      onClick={handleSipTrunkClick}
      className="w-full text-left px-4 py-3 text-base hover:bg-gray-100 flex items-center gap-3 transition-colors cursor-pointer"
    >
      <Network className="w-5 h-5 text-gray-600" />
      SIPTRUNK
    </button>

  </div>
)}
      </div>

      {/* Services */}
      <button
        onClick={handleServicesClick}
        className="px-3 py-2 rounded-lg cursor-pointer hover:bg-[#2c78c0] transition-colors"
      >
        SERVICES
      </button>

      {/* Welcome */}
      <span className="text-base lg:text-lg font-medium">
        Welcome, {user?.email}
      </span>
    </nav>

    {/* PROFILE BUTTON (desktop only) */}
    <div
      className="relative hidden md:block"
      onMouseEnter={handleMouseEnterProfile}
      onMouseLeave={handleMouseLeaveProfile}
    >
      <button
     onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
    className="flex items-center gap-2 p-2 cursor-pointer rounded-lg bg-gray-100"
    >
    <User className="w-5 h-5 text-gray-700" />
    <span className="text-gray-700">{user?.name}</span>
    </button>

      {isProfileDropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 border border-gray-200">
          <button
            onClick={closeProfileDropdown}
            className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2 cursor-pointer"
          >
            Profile
          </button>

          <button
            onClick={handleResetPassword}
            className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2 border-t cursor-pointer"
          >
            Reset Password
          </button>

          <button
            onClick={handleLogout}
            className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2 cursor-pointer"
          >
            Logout
          </button>
        </div>
      )}
    </div>

    {/* MOBILE MENU BUTTON */}
    <button
      onClick={() => setMobileOpen(!mobileOpen)}
      className="md:hidden p-2 rounded-lg hover:bg-[#2c78c0] cursor-pointer"
    >
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {!mobileOpen ? (
          <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        ) : (
          <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        )}
      </svg>
    </button>
  </div>

  {/* MOBILE MENU */}
  {mobileOpen && (
    <div className="md:hidden mt-4 bg-white text-gray-800 rounded-lg shadow-lg p-4 space-y-4">

      {/* ORDER mobile version */}
      <div>
        <button
          onClick={() => setMobileOrderOpen(!mobileOrderOpen)}
          className="w-full flex justify-between items-center px-2 py-2 bg-gray-100 rounded-lg cursor-pointer"
        >
          ORDER
          <span>{mobileOrderOpen ? "▲" : "▼"}</span>
        </button>

        {mobileOrderOpen && (
          <div className="mt-2 space-y-2">
            <button onClick={handleNumbersClick} className="block w-full text-left px-3 py-2 hover:bg-gray-200 rounded cursor-pointer">
              Numbers
            </button>
            <button onClick={handlePortInClick} className="block w-full text-left px-3 py-2 hover:bg-gray-200 rounded">
              Port-in
            </button>
            <button onClick={handlePortOutClick} className="block w-full text-left px-3 py-2 hover:bg-gray-200 rounded cursor-pointer">
              Port-out
            </button>
            <button onClick={handleSipTrunkClick} className="block w-full text-left px-3 py-2 hover:bg-gray-200 rounded cursor-pointer">
              SIPTRUNK
            </button>
          </div>
        )}
      </div>

      {/* SERVICES */}
      <button onClick={handleServicesClick} className="w-full text-left px-3 py-2 rounded hover:bg-gray-200 cursor-pointer">
        SERVICES
      </button>

      {/* MOBILE PROFILE SECTION */}
      <div className="border-t pt-3">
        <p className="text-sm text-gray-600 mb-2">Logged in as <b>{user?.email}</b></p>

        <button onClick={closeProfileDropdown} className="block w-full text-left px-3 py-2 hover:bg-gray-200 rounded cursor-pointer">
          Profile
        </button>
        <button onClick={handleResetPassword} className="block w-full text-left px-3 py-2 hover:bg-gray-200 rounded cursor-pointer">
          Reset Password
        </button>
        <button onClick={handleLogout} className="block w-full text-left px-3 py-2 hover:bg-gray-200 rounded cursor-pointer">
          Logout
        </button>
      </div>
    </div>
  )}
</header>
  )
}

export default Header
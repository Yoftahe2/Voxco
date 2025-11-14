import React, { useEffect, useRef, useState } from 'react'
import { House, UserRound } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from './AuthContext';

function Header() {
   const { logout, user } = useAuth();
   
const navigate = useNavigate()
const [isOpen, setIsOpen] = useState(false);
const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
        navigate('/numbers'); // Navigates to numbers search page
        closeOrderDropdown();
    };

    const handlePortInClick = () => {
        alert('Port-in functionality coming soon!'); // Placeholder - not functional yet
        closeOrderDropdown();
    };

    const handlePortOutClick = () => {
        alert('Port-out functionality coming soon!'); // Placeholder - not functional yet
        closeOrderDropdown();
    };

    const handleSipTrunkClick = () => {
        alert('SIPTRUNK functionality coming soon!'); // Placeholder - not functional yet
        closeOrderDropdown();
    };

    const handleServicesClick = () => {
        navigate('/about'); // To ABOUT VOXCO page (placeholder route)
    };

    const handleResetPassword = () => {
        navigate('/reset-password');
        closeProfileDropdown();
    };

//  const handleResetPassword = () => {
//         // Navigate to reset password page or handle the action
//         navigate('/reset-password');
//         setIsDropdownOpen(false);
//     };
// Ref for click outside to close
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

 // Toggle dropdown
  const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

  const handleMouseEnter = () => {
        setIsDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        setIsDropdownOpen(false);
    };

   

    const handleProfile = () => {
        // Handle profile action, e.g., navigate to profile page
        navigate('/profile');
    }


// const handleLogout = () => {
//         // Handle logout logic, e.g., clear auth state, localStorage, then navigate to signin
//         localStorage.removeItem('token'); // Example: clear token
//         navigate('/sign-in');
//         setIsDropdownOpen(false);
//     };
    const handleLogout = () => {
    logout();
    navigate('/sign-in');
  };

  return (

    // <div className='flex justify-between px-10 bg-[#215F9A] py-2 shadow-sm shadow-gray-300 fixed w-screen z-999 h-[100px]'>
    //     <div>
    //      <Link to=''>
    //       <img src='/logo.png' alt='logo' className='w-60' />
    //     </Link>
    //     </div>
    //     <div className='text-white flex items-center font-serif text-xl gap-5 mr-10 '>
    //       <p>Welcome {'John Doe'}</p>
    //       <div className='flex gap-5'>
    //       <House className='cursor-pointer hover:scale-110' size={30} color='orange' />
    //       <div 
    //             onMouseEnter={handleMouseEnter}
    //             onMouseLeave={handleMouseLeave}
    //             onClick={toggleDropdown}>
    //       <UserRound className='cursor-pointer hover:scale-110' size={30} color='orange' />

    //       {isDropdownOpen && (
    //                 <div className="absolute right-5 mt-0 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
    //                     {/* Username Item */}
    //                     <button
    //                         onClick={handleProfile}
    //                         className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
    //                     >
    //                         {/* Optional small icon */}
    //                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
    //                             <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
    //                         </svg>
    //                         John Doe
    //                     </button>

    //                     {/* Reset Password Item */}
    //                     <button
    //                         onClick={handleResetPassword}
    //                         className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
    //                     >
    //                         {/* Optional small icon */}
    //                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
    //                             <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 00-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
    //                         </svg>
    //                         Reset Password
    //                     </button>
    //                     <button
    //                         onClick={handleLogout}
    //                         className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
    //                     >
    //                         {/* Logout SVG Icon */}
    //                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
    //                             <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
    //                         </svg>
    //                         Logout
    //                     </button>

    //                     {/* Optional: Add more items like Logout */}
    //                     {/* <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</button> */}
    //                 </div>
    //             )}
    //       </div>
        
    //         {/* <img src='pp.jpg' alt='pp' className='w-12 rounded-full'/> */}
    //     </div>
    //     </div>
    // </div>
    <header className="bg-[#215F9A] text-white py-6 px-8 flex justify-between items-center shadow-lg relative z-50" style={{ fontSize: '1.5em' }}> {/* 1.5x bigger */}
            {/* Logo - Clickable, bigger */}
            <div className="flex items-center gap-4 cursor-pointer" onClick={() => navigate('/')}>
                <img src='/logo.png' alt='"Voxco Communications' className='w-60' />
            </div>  

            {/* Navigation */}
            <nav className="flex items-center gap-8 text-lg"> {/* Bigger text */}
                {/* Order Dropdown */}
                <div 
                    className="relative"
                    onMouseEnter={handleMouseEnterOrder}
                    onMouseLeave={handleMouseLeaveOrder}
                    onClick={toggleOrderDropdown}
                >
                    <button className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-[#2c78c0] transition-colors cursor-pointer">
                        ORDER
                    </button>
                    {isOrderDropdownOpen && (
                        <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50 border border-gray-200 text-gray-700">
                            <button 
                                onClick={handleNumbersClick}
                                className="w-full text-left px-4 py-3 text-base hover:bg-gray-100 flex items-center gap-3 transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25a2.25 2.25 0 01-2.25-2.25V15.75z" />
                                </svg>
                                Numbers
                            </button>
                            <button 
                                onClick={handlePortInClick}
                                className="w-full text-left px-4 py-3 text-base hover:bg-gray-100 flex items-center gap-3 transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5M9.75 6.75h4.5M9.75 6.75L9 3.75m3.75 3L15 3.75M9 12.75h3m-3 3h3m-6-6h.01M9 16.5h.01" />
                                </svg>
                                Port-in
                            </button>
                            <button 
                                onClick={handlePortOutClick}
                                className="w-full text-left px-4 py-3 text-base hover:bg-gray-100 flex items-center gap-3 transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M15 9.75H18M15 12H18M15 15H18M5.625 4.5h12.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-12.75a2.25 2.25 0 01-2.25-2.25v-7.5a2.25 2.25 0 012.25-2.25z" />
                                </svg>
                                Port-out
                            </button>
                            <button 
                                onClick={handleSipTrunkClick}
                                className="w-full text-left px-4 py-3 text-base hover:bg-gray-100 flex items-center gap-3 transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.25h13.5M5.25 13.5h13.5M5.25 21h13.5M9 3.75v16.5m0-16.5h6m-6 0v16.5m6-16.5v16.5" />
                                </svg>
                                SIPTRUNK
                            </button>
                        </div>
                    )}
                </div>

                {/* Services */}
                <button 
                    onClick={handleServicesClick}
                    className="px-4 py-2 rounded-lg hover:bg-[#2c78c0] transition-colors cursor-pointer"
                >
                    SERVICES
                </button>

                {/* Welcome Greeting */}
                <span className="text-lg font-medium">Welcome, {user?.email}</span>
            </nav>

            {/* Profile Icon Dropdown */}
            <div 
                className="relative"
                onMouseEnter={handleMouseEnterProfile}
                onMouseLeave={handleMouseLeaveProfile}
                onClick={toggleProfileDropdown}
            >
                <button className="flex items-center gap-2 p-3 rounded-full hover:bg-[#2c78c0] transition-colors">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth={1.5} 
                        stroke="currentColor" 
                        className="w-7 h-7" // Bigger icon
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                    <span className="hidden md:inline text-xl">{user?.name}</span>
                </button>
                {isProfileDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
                        <button
                            onClick={() => { /* Profile action */ closeProfileDropdown(); }}
                            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            Profile
                        </button>
                        <button
                            onClick={handleResetPassword}
                            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2 border-t border-gray-100"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 00-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                            </svg>
                            Reset Password
                        </button>
                        <button
                            onClick={handleLogout}
                            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                        >
                            {/* Logout SVG Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                            </svg>
                            Logout
                        </button>
                    </div>
                )}
            </div>
        </header>
  )
}

export default Header
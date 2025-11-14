// import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import {useAuth} from '../components/AuthContext'
// // import axios from 'axios';
// function Signin({setIsAdmin}) {

//     const navigate = useNavigate()
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
//     const [error, setError] = useState('')

//  const { login } = useAuth();
//   const handleClick = (e) =>  {
//     e.preventDefault();
//     if (!email.trim() || !password.trim()) {
//             setError('Please fill in all fields.')
//             return
//         }
    
//     const users = JSON.parse(localStorage.getItem('users')) || [];
//     const user = users?.find((u) => u.email === email);

//     if (!user) {
//       setError('Invalid username or password');
//       return;
//     }
//     console.log(user)
//         // Simulate token (in real app, use JWT or proper auth)
//         const token = 'dummy-token'; // Replace with actual token logic if needed
//         login(token, user);
//         navigate('/');
//         setError('')
    
//   }

//   const handleInputChange = () => {
//         if (error) {
//             setError('')
//         }
//     }

//     useEffect(()=>{
//         setIsAdmin(true)
//     },[setIsAdmin])
//   return (
//     <div className='flex flex-col items-center gap-5 justify-center w-[30%] rounded-3xl shadow-sm  shadow-gray-500 m-auto mt-[2%] bg-white py-10 px-5'>
//         <div>
//             <img src='/logo.png' className='bg-[#215F9A] px-4 py-2 rounded-2xl' alt='logo'/>
//         </div>
        
//         <div className='flex flex-col items-center gap-5'>
//             <div>
//             <p className='text-xl font-semibold'>Voxco Number Ordering Portal</p>
//             <p>Sign in to continue</p>
//             </div>

//             <div className='flex flex-col gap-5 w-full'>
//                 <input className='py-2 border-2 border-gray-500 rounded-md px-5' 
//                 type="email"
//                 id="email"
//                 name="email"
//                 placeholder="Email" 
//                 value={email}
//                 onChange={(e)=>{
//                     setEmail(e.target.value)
//                     handleInputChange()
//                 }}
//                 required />
//                 <input className='py-2 px-5 border-2 border-gray-500 rounded-md' 
//                 type="password"
//                  placeholder="Password"
//                  value={password}
//                  onChange={(e)=>{
//                     setPassword(e.target.value)
//                     handleInputChange()
//                  }}
//                   required />
//             </div>
//             {error && (
//                     <p className='text-red-500 text-sm w-full -mt-4'>{error}</p>
//                 )}
//             <button onClick={handleClick} className='bg-[#215F9A] hover:bg-[#2c78c0] text-white text-2xl rounded-2xl py-4 w-full cursor-pointer'>Sign In</button>
//             <p>Don't have an account? <span className='text-indigo-900 cursor-pointer' onClick={()=>navigate('/sign-up')}>Please get start</span></p>
//         </div>
//     </div>
//   )
// }

// export default Signin

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../components/AuthContext';

function Signin({ setIsAdmin }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();

  const handleClick = (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      setError('Please fill in all fields.');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find((u) => u.email === email && u.password === password);

    if (!user) {
      setError('Invalid email or password');
      return;
    }

    // Simulate token (in real app, use JWT or proper auth)
    const token = 'dummy-token'; // Replace with actual token logic if needed
    login(token, user);
    navigate('/');
    setError('');
  };

  const handleInputChange = () => {
    if (error) {
      setError('');
    }
  };

  // Removed unconditional setIsAdmin(true) – set it conditionally if needed (e.g., based on user role after login)

  return (
    <div className="flex flex-col items-center gap-5 justify-center w-[30%] rounded-3xl shadow-sm shadow-gray-500 m-auto mt-[2%] bg-white py-10 px-5">
      <div>
        <img src="/logo.png" className="bg-[#215F9A] px-4 py-2 rounded-2xl" alt="logo" />
      </div>

      <div className="flex flex-col items-center gap-5">
        <div>
          <p className="text-xl font-semibold">Voxco Number Ordering Portal</p>
          <p>Sign in to continue</p>
        </div>

        <div className="flex flex-col gap-5 w-full">
          <input
            className="py-2 border-2 border-gray-500 rounded-md px-5"
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              handleInputChange();
            }}
            required
          />
          <input
            className="py-2 px-5 border-2 border-gray-500 rounded-md"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              handleInputChange();
            }}
            required
          />
        </div>
        {error && <p className="text-red-500 text-sm w-full -mt-4">{error}</p>}
        <button
          onClick={handleClick}
          className="bg-[#215F9A] hover:bg-[#2c78c0] text-white text-2xl rounded-2xl py-4 w-full cursor-pointer"
        >
          Sign In
        </button>
        <p>
          Don't have an account?{' '}
          <span className="text-indigo-900 cursor-pointer" onClick={() => navigate('/sign-up')}>
            Please get started
          </span>
        </p>
      </div>
    </div>
  );
}

export default Signin;
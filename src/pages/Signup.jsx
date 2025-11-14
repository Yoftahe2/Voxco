// import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'

// function Signup({setIsAdmin}) {

//   const navigate = useNavigate()
//   const [email, setEmail] = useState('')
//   const [name, setName] = useState('')
//   const [message, setMessage] = useState('')
//   const [error, setError] = useState('')

//   const handleClick = (e) =>  {
//     e.preventDefault();
//     if(!email.trim() || !name.trim() || !message.trim()){
//         setError('Please fill in all fields.')
//         return
//     }
//     // Simulate storing user (in real app, use backend or more secure storage)
//     const users = JSON.parse(localStorage.getItem('users')) || [];
//     if (users.some((user) => user.name === name)) {
//       setError('Username already exists');
//       return;
//     }

//     users.push({ email, name }); // Note: Never store plain passwords in production!
//     localStorage.setItem('user', JSON.stringify(users));

//     // Redirect to sign-in after sign-up
//     navigate('/sign-in');
//   }



//   const handleInputChange = () =>{
//     setError('')
//   }

//     useEffect(()=>{
//           setIsAdmin(true)
//       },[setIsAdmin])


//   return (
//     <div className='flex flex-col items-center gap-2 justify-center w-[30%] rounded-3xl shadow-sm  shadow-gray-500 m-auto mt-[2%] bg-white py-2 px-5'>
//         <div>
//             {/* <h2 className='flex flex-col gap-0 py-5'><span><strong className='text-indigo-900 text-3xl'>Gizat</strong><small className='text-indigo-900 text-3xl'>global</small></span> <span className='ml-[22%] -mt-1 text-sm'>Communication</span></h2> */}
//             <img src='/logo.png' className='bg-[#215F9A] px-4 py-1 rounded-2xl' alt='logo'/>
//         </div>
        
//         <div className='flex flex-col items-center gap-2'>
//             <div>
//             <p className='text-xl font-semibold'>Voxco Number Ordering Portal</p>
//             <p>Get Start to continue</p>
//             </div>

//             <div className='flex flex-col gap-2 w-full mb-2'>
//              <form>
//               <div className="mb-2">
//                 <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={name}
//                   onChange={(e)=>{
//                     setName(e.target.value)
//                     handleInputChange()
//                   }}
//                   required
//                  className='py-2 px-5 border-2 border-gray-500 rounded-md w-full' 
//                   placeholder="Your Name"
//                 />
//               </div>
//               <div className="mb-2">
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={email}
//                   onChange={(e)=>{
//                     setEmail(e.target.value)
//                     handleInputChange()
//                   }}
//                   required
//                   className='py-2 px-5 border-2 border-gray-500 rounded-md w-full' 
//                   placeholder="Your Email"
//                 />
//               </div>
//               <div className="mb-2">
//                 <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
//                 <textarea
                
//                   id="message"
//                   name="message"
//                   value={message}
//                   onChange={(e)=>{
//                     setMessage(e.target.value)
//                     handleInputChange()
//                   }}
//                   required
//                   rows="4"
//                   className='py-2 px-5 border-2 border-gray-500 rounded-md w-full'
//                 //   className="mt-1 px-2 py-1 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
//                   placeholder="Your Message"
//                 ></textarea>
//               </div>
//               {error && (
//                     <p className='text-red-500 text-sm w-full my-2'>{error}</p>
//                 )}
//                <button onClick={handleClick} className='bg-[#215F9A] hover:bg-[#2c78c0] text-white text-2xl rounded-2xl py-4 w-full cursor-pointer'>Get Started Now</button>
//             <p>Do have an account? <span className='text-orange-700 cursor-pointer' onClick={()=>navigate('/sign-in')}>Please sign in</span></p>
//             </form>
//             </div>
           
//         </div>
//     </div>
//   )
// }

// export default Signup


import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup({ setIsAdmin }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState(''); // Added password state
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    if (!email.trim() || !name.trim() || !password.trim() || !message.trim()) {
      setError('Please fill in all fields.');
      return;
    }

    // Simulate storing user (in real app, use backend or more secure storage)
    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.some((user) => user.email === email)) { // Check duplicate by email, not name
      setError('Email already exists');
      return;
    }

    // Store all fields, including password (NEVER do this in production without hashing!)
    const newUser = { name, email, password, message };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users)); // Fixed key to 'users' (plural)

    // Redirect to sign-in after sign-up
    navigate('/sign-in');
    setError(''); // Clear any errors
  };

  const handleInputChange = () => {
    setError('');
  };

  // Removed unconditional setIsAdmin(true) – set it conditionally if needed (e.g., after login)

  return (
    <div className="flex flex-col items-center gap-2 justify-center w-[30%] rounded-3xl shadow-sm shadow-gray-500 m-auto mt-[2%] bg-white py-2 px-5">
      <div>
        <img src="/logo.png" className="bg-[#215F9A] px-4 py-1 rounded-2xl" alt="logo" />
      </div>

      <div className="flex flex-col items-center gap-2">
        <div>
          <p className="text-xl font-semibold">Voxco Number Ordering Portal</p>
          <p>Get started to continue</p>
        </div>

        <div className="flex flex-col gap-2 w-full mb-2">
          <form>
            <div className="mb-2">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  handleInputChange();
                }}
                required
                className="py-2 px-5 border-2 border-gray-500 rounded-md w-full"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  handleInputChange();
                }}
                required
                className="py-2 px-5 border-2 border-gray-500 rounded-md w-full"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  handleInputChange();
                }}
                required
                className="py-2 px-5 border-2 border-gray-500 rounded-md w-full"
                placeholder="Your Password"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  handleInputChange();
                }}
                required
                rows="4"
                className="py-2 px-5 border-2 border-gray-500 rounded-md w-full"
                placeholder="Your Message"
              ></textarea>
            </div>
            {error && <p className="text-red-500 text-sm w-full my-2">{error}</p>}
            <button
              onClick={handleClick}
              className="bg-[#215F9A] hover:bg-[#2c78c0] text-white text-2xl rounded-2xl py-4 w-full cursor-pointer"
            >
              Get Started Now
            </button>
            <p>
              Do you have an account?{' '}
              <span className="text-orange-700 cursor-pointer" onClick={() => navigate('/sign-in')}>
                Please sign in
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
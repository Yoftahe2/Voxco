import React, { useEffect } from 'react'
// import Main from '../components/dashboard/Main'
// import Sidebar from '@/components/dashboard/Sidebar'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'


function AppLayout({setIsAdmin}) {

  useEffect(()=>{
    setIsAdmin(true)
  },[setIsAdmin])

  return (
    <div className='flex flex-col'>
       <div className='flex h-full  mt-10'>
          <div className='w-[30%] min-h-screen mt-2 bg-white p-5 shadow-lg shadow-gray-800 hover:shadow-lg hover:shadow-black-600'>
            <Sidebar />
          </div>
          <main className='w-[70%]  m-10 h-fit p-5 rounded-2xl'>
            <Outlet/>
          </main>
       </div>
    </div>
  )
}

export default AppLayout
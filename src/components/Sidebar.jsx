import React from 'react'
import { IdCard, ListOrdered, NotebookTabs } from 'lucide-react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div className='flex flex-col gap-4 mt-16'>
        <div className='flex gap-4 hover:bg-[#215F9A] hover:text-white p-2 rounded-lg cursor-pointer'>
            <ListOrdered />
            <Link to={'/orders'}>Orders</Link>
        </div>
        <div className='flex gap-4 hover:bg-[#215F9A] hover:text-white p-2 rounded-lg cursor-pointer'>
            <NotebookTabs />
            <Link to={'/numbers'}>Numbers</Link>
        </div>
         <div className='flex gap-4 hover:bg-[#215F9A] hover:text-white p-2 rounded-lg cursor-pointer'>
            <IdCard />
            <Link to={'/port-in'}>Order Port-in</Link>
        </div>
         <div className='flex gap-4 hover:bg-[#215F9A] hover:text-white p-2 rounded-lg cursor-pointer'>
            <NotebookTabs />
            <Link to={'/port-out'}>Order Port-out</Link>
        </div>
    </div>
  )
}

export default Sidebar
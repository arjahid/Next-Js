import React from 'react'

export default function layout({children}) {
  return (
    <div className='min-h-screen grid grid-cols-12 gap-4 bg-gray-50'>
        <div className='col-span-3 bg-white p-6 shadow-md rounded-lg flex flex-col items-start'>
            <h2 className='text-xl font-bold mb-4 text-gray-700'>Dashboard</h2>
            <ul className='space-y-2 w-full'>
                <li className='w-full'>
                    <a href="#" className='block px-3 py-2 rounded hover:bg-gray-100 text-gray-800 font-medium'>User Home</a>
                </li>
                <li className='w-full'>
                    <a href="#" className='block px-3 py-2 rounded hover:bg-gray-100 text-gray-800 font-medium'>Profile</a>
                </li>
                <li className='w-full'>
                    <a href="#" className='block px-3 py-2 rounded hover:bg-gray-100 text-gray-800 font-medium'>Settings</a>
                </li>
            </ul>
        </div>
        <div className='col-span-9 bg-gray-100 p-6 rounded-lg shadow'>
            {children}
        </div>
    </div>
  )
}

import React from 'react'

export default function Navbar() {
  return (
     <nav className='bg-gray-800 text-white p-4 flex justify-center'>
          <ul className='flex space-x-4 justify-between w-1/2'>
            <li>Home</li>
            <li>Contact</li>
            <li>about</li>
            <li>blog</li>
          </ul>
        </nav>
  )
}

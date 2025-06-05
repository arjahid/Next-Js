import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
     <nav className='bg-gray-800 text-white p-4 flex justify-center'>
          <ul className='flex space-x-4 justify-between w-1/2'>
            <Link href='/'><li>Home</li></Link>
            <Link href='/contact'><li>Contact</li></Link>
           <Link href='/about'><li>About</li></Link>
            <Link href='/blog'><li>Blog</li></Link>
            <Link href='/servicess'><li>services</li></Link>
            <Link href='/dashboard'><li>Dashboard</li></Link>
          </ul>
        </nav>
  )
}

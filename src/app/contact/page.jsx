'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation';

import React from 'react'

export default function page() {
    const router=useRouter();
    const isloggin=true;
    const handleClick=()=>{
        if(isloggin){
            router.push('/contact/more');
        }
        else{
            router.push('/login');
        }

    }
  return (

    <div> 
        <ul>
            <Link href='/contact/more'>more</Link>
           <button type='button' onClick={handleClick}> </button>
        </ul>
    </div>
  )
}

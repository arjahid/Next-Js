'use client'
import Link from 'next/link'
import React from 'react'


export default function Services() {
    const data=[
        {id:1, name:"service1"},
        {id:2, name:"service2"},
        {id:3, name:"service3"},
        {id:4, name:"service4"},
        {id:5, name:"service5"}
    ]
  return (
    <div>new services
        {
            data.map((item) => (
                <div key={item.id}>
                    <Link href={`/servicess/${item.id}`}>
                        <h2>{item.name}</h2>
                    </Link>
                </div>
            ))
        }
    </div>
  )
}

import React from 'react'

export default function serviceDetails({params}) {
    const id= params.id;
  return (
    <div>
        <h1>Service Details</h1>
        <p>Service ID: {id}</p>
        <p>This is the details page for service with ID: {id}</p>
    </div>
  )
}

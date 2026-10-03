"use client"
import { useParams } from 'next/navigation'
import React from 'react'


const page = () => {

    const {city} = useParams()

  return (
    <div className='m-15 ms-30'> 
    <h1 className='text-2xl  mb-5'>Description</h1>
    <p> {city} is the beautiful city</p>
       
    </div>
  )
}

export default page
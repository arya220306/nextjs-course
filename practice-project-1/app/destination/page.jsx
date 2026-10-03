"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const Destination = () => {

  const destination = ["Tokyo", "London", "NewYork"]

  const router = useRouter()
  return (
    <div className='flex flex-col gap-10 justify-center items-center'>
      <h1 className='text-3xl mt-10'>Choose your destination</h1>

    <div className="destination flex flex-col gap-4 ">
    { destination.map((item, index)=>(

      <button key={index} onClick={()=>router.push(`/destination/${item}`)} className='bg-white text-black border rounded-2xl hover:opacity-50 transition-all duration-300 w-35 h-20 cursor-pointer font-medium text-2xl '>{item}</button>
    ))
    }
    </div>

    </div>
  )
}

export default Destination
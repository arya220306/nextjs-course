import Image from 'next/image'
import React from 'react'
import tokyo from "@/assets/tokyo.jpeg"
import london from "@/assets/london.jpg"
import nyc from "@/assets/nyc.jpg"

const city = async({params}) => {

    const {city} = await params

  return (
    <div>
       <h1 className='text-2xl text-center mt-5'>Welcome to {city} ! Discover amazing sites and cultures here</h1>

       {city == "Tokyo" && <Image src={tokyo} width={600} loading="eager" alt='tokyo' />}
       {city == "London" && <Image src={london} width={600} loading="eager" alt='london' />}
       {city == "NewYork" && <Image src={nyc} width={600} loading="eager"  alt= 'nyc' />}
    </div>
  )
}

export default city
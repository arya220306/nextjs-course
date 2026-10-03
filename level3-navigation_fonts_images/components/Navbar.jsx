"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

function Navbar() {

    const router = useRouter()

  return (
    <div className='flex justify-end me-5 mt-3'>
        <ul className='flex gap-3'>
            <Link href={"/"}><li>Home</li></Link>
            <Link href={"/about"}><li>About</li></Link>
            <Link href={"/contact"}><li>Contact</li></Link>
        </ul>

        <button onClick={()=>router.push("/about")}>Click Me</button>
    </div>
  )
}

export default Navbar
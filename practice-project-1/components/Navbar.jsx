"use client"
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import logo from "@/assets/logo.jpg"

const Navbar = () => {
    const pathname = usePathname()
    // console.log(pathname)
  return (
    <div className='flex justify-between items-center px-3  py-2 bg-white'>

      <div className="logo">
        <Image src={logo} width={50} height={50} alt='logo' />
      </div>

        <ul className='flex gap-5'>
           <Link href={"/"} className={`hover:underline cursor-pointer ${pathname =="/" ? "text-blue-500": ""}`}><li>Home</li></Link>
            <Link href={"/destination"}><li className={`hover:underline cursor-pointer ${pathname =="/destination" ? "text-blue-500": ""}`}>Destination</li></Link>
            <Link href={"/contact"}><li className={`hover:underline cursor-pointer ${pathname =="/contact" ? "text-blue-500": ""}`}>Contact</li></Link>
        </ul>
    </div>
  )
}

export default Navbar
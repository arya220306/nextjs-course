import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-4 py-5 text-white bg-gray-700'>
        <div className="logo font-bold text-2xl">
            MyApp
        </div>
        <div>
            <ul className='flex justify-center items-center gap-4'>
                <Link href={"/"}><li className='hover:text-gray-300 hover:underline'>Home</li></Link>
                <Link href={"/about"}><li className='hover:text-gray-300 hover:underline'>About</li></Link>
                <Link href={"/contact"}><li className='hover:text-gray-300 hover:underline'>Contact</li></Link>
                <Link href={"/gallery"}><li className='hover:text-gray-300 hover:underline'>Gallery</li></Link>
            </ul>
        </div>
        <div>
            <Link href={"/signup"}><p>SignUp</p></Link>
        </div>
    </div>
  )
}

export default Navbar
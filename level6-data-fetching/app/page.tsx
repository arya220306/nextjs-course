"use client"
import next from 'next'
// import { revalidatePath } from 'next/cache'
import React, { useEffect } from 'react'

const page =  () => {

  // csr = client side rendering


  const handleApi = async () =>{

      let res = await fetch("/api/user")
      let data = await res.json()
      console.log(data)

  }

  useEffect(() => {
    handleApi()
  }, [])
  


// const page = async () => {

// these methods always work on server components

  // // ssr-server side rendering
  // let response = await fetch("http://localhost:3000/api/user", {cache:"no-store"})
  // // console.log(response)
  // let data = await response.json()
  // console.log(data)

// ssg = static site generation

// let response = await fetch("http://localhost:3000/api/user", {cache:"force-cache"})
//   let data = await response.json()
//   console.log(data)


// // isr = incremental static regeneration
// let response = await fetch("http://localhost:3000/api/user", {next:{revalidate:10}})
//   let data = await response.json()
//   console.log(data)


  return (
    <div>page</div>
  )
}

export default page
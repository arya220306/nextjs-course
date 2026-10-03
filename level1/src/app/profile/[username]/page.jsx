import React from 'react'

async function page({params}) {

    const {username} = await params

  return (
    <div>
        {username}
    </div>
  )
}

export default page
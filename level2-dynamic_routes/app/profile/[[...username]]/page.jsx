import React from 'react'


// optional catch-all segment
// [...username] - catch-all segment
// [username] - dynamic route

async function Dynamic({params}) {

    const data = await params
    console.log(data)

  return (
    <div>Dynamic Route

    </div>
  )
}

export default Dynamic



import Button from '@/Button'
import React, { useRef, useState } from 'react'

const page = () => {

  // const [count, setCount] = useState<number>(0)
  // setCount(89)


// const fn = ()=>{
  
// }

  const input = useRef<HTMLInputElement>(null)

  const handleSubmit = (e:React.SubmitEvent) => {
    e.preventDefault()
  }

  const handleClick = (e:React.MouseEvent) =>{
    e.preventDefault()
  }
  const handleChange = (e:React.ChangeEvent) =>{
    e.preventDefault()
  }


  return (
    <div>

        <form action="" onSubmit={handleSubmit}>
          <input type="text" ref={input} onChange={handleChange}/>
          <button onClick={handleClick}>Click</button>
        </form>


      {/* <Button data={"ayush"} action={fn} /> */}
    </div>
  )
}

export default page
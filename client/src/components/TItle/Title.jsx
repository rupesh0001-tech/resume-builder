import React from 'react'

const Title = ({title, des}) => {
  return (
    
    <div className='text-center flex flex-col flex-wrap gap-2 my-5 justify-center '>
        <h1 className=' text-3xl text-teal-950 font-semibold  '>{title} </h1>
        <p className=' text-md text-gray-500 '>{des} </p>
    </div>
    
  )
}

export default Title
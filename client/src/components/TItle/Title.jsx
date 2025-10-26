import React from 'react'

const Title = ({title, des}) => {
  return (
    
    <div className='text-center flex flex-col gap-4 '>
        <h1 className=' text-3xl text-teal-950 font-semibold  '>{title} </h1>
        <p className=' text-md text-gray-500 '>{des} </p>
    </div>
    
  )
}

export default Title
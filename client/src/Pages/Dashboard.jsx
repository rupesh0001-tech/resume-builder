import React from 'react'
import Title from './../components/TItle/Title.jsx';
const Dashboard = () => {
  return (
    
    <>
      <div className="dashboard">
        <Title title={ 'Hello, Rupesh'} des={ 'Create or Enchance Your Resume '} />
        <div className="flex px-30 py-5 gap-6 ">

          <button className=' bg-[#f7eeee] h-46 w-38 px-5 py-4 shadow cursor-pointer hover:shadow-xl' >
            <i class=" text-3xl fa-solid fa-plus"></i>
            <p className=' text-gray-600 text-sm' >Make New Resume </p>
          </button>

          <button className=' bg-[#f7eeee] h-46 w-38 mx-w-38  px-5 py-4 shadow cursor-pointer hover:shadow-xl ease-in-out transition-all duration-200 ' >
            <i class=" text-3xl fa-solid fa-cloud-arrow-up "></i>
            <p className=' text-gray-600 text-sm' > Upload existing  </p>
          </button>

        </div>

        <hr />

        
      </div>
    </>
  )
}

export default Dashboard
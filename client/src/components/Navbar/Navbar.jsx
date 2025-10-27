import React from 'react'
import {Link, Navigate, useNavigate} from 'react-router-dom'

const Navbar = () => {
    const user = {name : 'rupesh'}
    const navigate = useNavigate();

    const logout = () => {
        navigate('/')
    }

  return (
    
    
    <div className='flex h-15 w-full bg-white shadow items-center justify-between px-10 md:px-30'>
     <Link to={'/'}>
        <img src="/logo.svg" alt="logo-img" />
     </Link>

     <div className="right-side flex  md:gap-6 items-center">
        <p className=' hidden  md:block '> Hello, {user.name}</p>
        <button onClick={logout} className=' bg-red-400 px-3 py-1.5 rounded-2xl font-medium text-md cursor-pointer '>
            Log out
        </button>
     </div>

    </div>
  )
}

export default Navbar
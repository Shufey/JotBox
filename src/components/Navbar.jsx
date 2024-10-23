import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='h-[10%] flex justify-center items-center gap-20 text-2xl'>
        <NavLink
         to = "/"
         className={({ isActive }) => (isActive ? 'text-purple-500' : 'text-white')}>
            Home
        </NavLink>

        <NavLink
         to = "/notes"
         className={({ isActive }) => (isActive ? 'text-purple-500' : 'text-white')}>
            Notes
        </NavLink>
    </div>
  )
}

export default Navbar
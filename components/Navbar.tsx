import React from 'react'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'

const Navbar = () => {
  return (
    <div className='w-full flex justify-between text-emerald-400 shadow-md p-5 mx-auto'>
        <div>
            Navbar
        </div>
        <div>
            <ShoppingCartIcon className='w-6 h-6'/>
        </div>
    </div>
  )
}

export default Navbar
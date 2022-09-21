import React from 'react'
import Link from 'next/link'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'

const Navbar = () => {
  return (
    <div className='w-full flex justify-between items-center text-emerald-400 shadow-md p-5 mx-auto'>
      <div>
          Store Logo
      </div>
      <div className='flex items-center'>
        <div className='px-2'>
          <Link href='/signin'>
            <a className='bg-white text-emerald-400 hover:bg-emerald-400 hover:text-white border border-emerald-400 px-2 py-1'>Signin</a>
          </Link>
        </div>
        <div className='px-2'>
          <Link href='login'>
            <a className='bg-white text-emerald-400 hover:bg-emerald-400 hover:text-white border border-emerald-400 px-2 py-1'>Login</a>
          </Link>
        </div>
        <div className='px-2'>
          <ShoppingCartIcon className='w-6 h-6 cursor-pointer'/>
        </div>
      </div>
    </div>
  )
}

export default Navbar
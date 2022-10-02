import React from 'react'
import Link from 'next/link'
import CartItemsCountBadge from './CartItemsCountBadge'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'

const Navbar = () => {
  return (
    <div className='w-full flex justify-between items-center text-emerald-400 shadow-md p-5 mx-auto'>
      <div className='flex items-center'>
        <div className='px-2'>
            <Link href='/'>
              <a>Crystalbase</a>
            </Link>
        </div>
        <div className='px-2'>
            <Link href='/crystals'>
              <a>Crystals</a>
            </Link>
        </div>
      </div>
      <div className='flex items-center'>
        <div className='px-2'>
          <Link href='/signin'>
            <button className='bg-white text-emerald-400 hover:bg-emerald-400 hover:text-white border border-emerald-400 px-2 py-1'>Signin</button>
          </Link>
        </div>
        <div className='px-2'>
          <Link href='/login'>
            <button className='bg-white text-emerald-400 hover:bg-emerald-400 hover:text-white border border-emerald-400 px-2 py-1'>Login</button>
          </Link>
        </div>
        <div className='px-2'>
          <Link href='/cart'>
            <a>
              <ShoppingCartIcon className='w-6 h-6'/>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
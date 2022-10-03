import React from 'react'
import Link from 'next/link'
import { ShoppingCartIcon, Bars3Icon } from '@heroicons/react/24/outline'

const Navbar = () => {
  return (
    <nav className='w-full shadow-md p-5 mx-auto'>
      <div>
        <div className='flex justify-between items-center text-emerald-400'>
            <div className='px-2'>
                <Link href='/'>
                  <a>Crystalbase</a>
                </Link>
            </div>
            <div className='px-2 invisible sm:visible'>
                <Link href='/crystals'>
                  <a>Crystals</a>
                </Link>
            </div>
            <div className='px-2 invisible sm:visible'>
              <Link href='/signin'>
                <button className='hover:bg-emerald-400 hover:text-white border border-emerald-400 px-2 py-1'>Signin</button>
              </Link>
            </div>
            <div className='px-2 invisible sm:visible'>
              <Link href='/login'>
                <button className='hover:bg-emerald-400 hover:text-white border border-emerald-400 px-2 py-1'>Login</button>
              </Link>
            </div>
            <div className='px-2 invisible sm:visible'>
              <Link href='/cart'>
                <a>
                  <ShoppingCartIcon className='w-6 h-6'/>
                </a>
              </Link>
            </div>
            <div className='px-2 sm:invisible'>
              <button onClick={() => {console.log('navbar dropdown')}}>
                <Bars3Icon className='w-6 h-6'/>
              </button>
            </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
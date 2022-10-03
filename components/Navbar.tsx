import React from 'react'
import Link from 'next/link'
import { ShoppingCartIcon, Bars3Icon } from '@heroicons/react/24/outline'

const Navbar = () => {
  return (
    <nav className='w-full shadow-md p-5 mx-auto'>
      <div className='sm:invisible bg-white text-emerald-400'>
        <button onClick={() => {console.log('navbar dropdown')}}>
          <Bars3Icon className='w-6 h-6'/>
        </button>
      </div>
      <ul className='flex justify-between invisible sm:visible items-center text-emerald-400'>
          <li className='px-2'>
              <Link href='/'>
                <a>Crystalbase</a>
              </Link>
          </li>
          <li className='px-2'>
              <Link href='/crystals'>
                <a>Crystals</a>
              </Link>
          </li>
          <li className='px-2'>
            <Link href='/signin'>
              <button className='hover:bg-emerald-400 hover:text-white border border-emerald-400 px-2 py-1'>Signin</button>
            </Link>
          </li>
          <li className='px-2'>
            <Link href='/login'>
              <button className='hover:bg-emerald-400 hover:text-white border border-emerald-400 px-2 py-1'>Login</button>
            </Link>
          </li>
          <li className='px-2'>
            <Link href='/cart'>
              <a>
                <ShoppingCartIcon className='w-6 h-6'/>
              </a>
            </Link>
          </li>
      </ul>
    </nav>
  )
}

export default Navbar
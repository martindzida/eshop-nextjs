import React from 'react';
import Link from 'next/link';
import {ShoppingCartIcon, Bars3Icon} from '@heroicons/react/24/outline';

const Navbar = () => {
  return (
    <nav className='w-full shadow-md p-5 mx-auto'>
      <div className='flex justify-between items-center text-emerald-400 font-semibold'>
        <div className='flex items-center'>
          <div className='px-2'>
            <Link href='/'>
              <a>Logo</a>
            </Link>
          </div>
          <div className='px-2 invisible sm:visible'>
            <Link href='/crystals'>
              <a>Crystals</a>
            </Link>
          </div>
        </div>
        <div className='flex items-center'>
          <div className='px-2 hidden sm:block'>
            <Link href='/signup'>
              <button className='hover:bg-emerald-400 hover:text-white border border-emerald-400 rounded-lg px-4 py-2'>Sign up</button>
            </Link>
          </div>
          <div className='px-2 hidden sm:block'>
            <Link href='/login'>
              <button className='hover:bg-emerald-400 hover:text-white border border-emerald-400 rounded-lg px-4 py-2'>Log in</button>
            </Link>
          </div>
          <div className='px-2 hidden sm:block'>
            <Link href='/cart'>
              <a>
                <ShoppingCartIcon className='w-6 h-6' />
              </a>
            </Link>
          </div>
          <div className='px-2 sm:hidden'>
            <button
              onClick={() => {
                console.log('navbar dropdown');
              }}
            >
              <Bars3Icon className='w-6 h-6' />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


import React from 'react';
import Link from 'next/link';
import {ShoppingCartIcon, Bars3Icon} from '@heroicons/react/24/outline';
import CartItemsCountBadge from './CartItemsCountBadge';

const Navbar = () => {
  return (
    <nav className='w-full shadow-md p-5 mx-auto'>
      <div className='flex justify-between items-center text-emerald-400 font-semibold'>
        <div className='flex gap-6 items-center'>
          <div className='p-2 text-lg'>
            <Link href='/'>
              <a>Logo</a>
            </Link>
          </div>
          <div className='p-2 invisible sm:visible text-lg'>
            <Link href='/crystals'>
              <a>Crystals</a>
            </Link>
          </div>
        </div>
        <div className='flex items-center'>
          <div className='px-2 hidden sm:block'>
            <Link href='/signup'>
              <button className='transition ease-in-out duration-200 hover:bg-emerald-400 hover:text-white border border-emerald-400 rounded-lg px-4 py-2'>
                Sign up
              </button>
            </Link>
          </div>
          <div className='px-2 hidden sm:block'>
            <Link href='/login'>
              <button className='transition ease-in-out duration-200 hover:bg-emerald-400 hover:text-white border border-emerald-400 rounded-lg px-4 py-2'>
                Log in
              </button>
            </Link>
          </div>
          <div className='px-2 hidden sm:block'>
            <Link href='/cart'>
              <a className='relative'>
                <CartItemsCountBadge count={2} />
                <ShoppingCartIcon className='w-8 h-8' />
              </a>
            </Link>
          </div>
          <div className='px-2 sm:hidden'>
            <button
              onClick={() => {
                console.log('navbar dropdown');
              }}
            >
              <Bars3Icon className='w-8 h-8' />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


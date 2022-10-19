import React from 'react';
import Link from 'next/link';
import {ShoppingCartIcon, Bars3Icon} from '@heroicons/react/24/outline';
import CartItemsCountBadge from './CartItemsCountBadge';
import {useSession, signIn} from 'next-auth/react';
import ProfileDropdownMenu from './ProfileDropdownMenu';

const Navbar = () => {
  const {data: session, status} = useSession();

  return (
    <nav className='w-full shadow-md px-6 py-4 mx-auto'>
      <div className='flex justify-between items-center text-emerald-400 font-semibold'>
        <div className='flex gap-6 items-center'>
          <div className='p-2 text-lg'>
            <Link href='/'>
              <a>Logo</a>
            </Link>
          </div>
          {status === 'authenticated' && (
            <div className='p-2 invisible sm:visible text-lg'>
              <Link href='/crystals'>
                <a>Crystals</a>
              </Link>
            </div>
          )}
        </div>
        <div className='flex items-center'>
          {status !== 'authenticated' && (
            <div className='px-2 hidden sm:block'>
              <button
                onClick={() => signIn()}
                className='transition ease-in-out duration-200 hover:bg-emerald-400 hover:text-white border border-emerald-400 rounded-lg px-4 py-2'
              >
                Sign in
              </button>
            </div>
          )}
          {status === 'authenticated' && (
            <div className='flex items-center gap-5'>
              <div className='hidden sm:block'>
                <Link href='/cart'>
                  <a className='relative'>
                    <CartItemsCountBadge count={2} />
                    <ShoppingCartIcon className='w-8 h-8' />
                  </a>
                </Link>
              </div>
              <ProfileDropdownMenu />
            </div>
          )}
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


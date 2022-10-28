import React from 'react';
import Link from 'next/link';
import {Bars3Icon} from '@heroicons/react/24/outline';
import {useSession} from 'next-auth/react';
import SignInBtn from './SignInBtn';
import ProfileAvatar from './ProfileAvatar';

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
          {status !== 'authenticated' ? <SignInBtn /> : <ProfileAvatar />}
          <div className='px-2 sm:hidden'>
            <Bars3Icon className='w-8 h-8' />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


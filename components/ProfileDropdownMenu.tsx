import React from 'react';
import {useSession, signOut} from 'next-auth/react';
import {Menu} from '@headlessui/react';
import Image from 'next/image';
import {useRouter} from 'next/router';
import Link from 'next/link';

const ProfileDropdownMenu = () => {
  const {data: session, status} = useSession();
  const router = useRouter();

  const handleSignOut = () => {
    signOut();
    router.push('/');
  };

  return (
    <Menu as='div' className='relative ml-3'>
      <div>
        <Menu.Button className='flex rounded-full'>
          {session !== null && session.user?.image && (
            <Image src={session.user?.image} alt='avatar' width={40} height={40} className='rounded-full' />
          )}
        </Menu.Button>
      </div>
      <Menu.Items className='absolute right-0 z-10 mt-2 w-48 origin-top-right divide-y divide-slate-200 text-center rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
        <Menu.Item>
          {({active}) => (
            <Link href='/profile'>
              <a className={'bg-white block px-4 py-2 text-sm text-emerald-400'}>My Profile</a>
            </Link>
          )}
        </Menu.Item>
        <Menu.Item>
          {({active}) => (
            <a onClick={handleSignOut} className={'text-emerald-400 cursor-pointer block px-4 py-2 text-sm bg-white'}>
              Sign out
            </a>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
};

export default ProfileDropdownMenu;


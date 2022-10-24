import React from 'react';
import Image from 'next/image';
import type {Session} from 'next-auth';

interface Props {
  session: Session | null;
}

const ProfileInfoPanel = ({session}: Props) => {
  return (
    <div className='p-10 text-white bg-emerald-300 rounded-lg'>
      {session?.user?.image && <Image src={session?.user?.image} width={80} height={80} className='rounded-full' />}
      <h2 className='font-bold text-xl py-4'>{session?.user?.name}</h2>
      <span className='font-semibold py-4'>{session?.user?.email}</span>
    </div>
  );
};

export default ProfileInfoPanel;


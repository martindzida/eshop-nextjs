import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  id: number;
  name: string;
  image: string;
}

const CrystalListItem = ({id, name, image}: Props) => {
  return (
    <div className='flex flex-col items-center text-center border border-emerald-400 p-8 mx-4 my-4'>
      <div className='p-4'>
        <h3 className='text-emerald-400 text-xl font-bold'>{name}</h3>
      </div>
      <div className='p-4 pb-6'>
        <Image src={image} alt='Product image' width={50} height={50} />
      </div>
      <Link href={`/crystals/${id}`}>
        <a className='bg-white text-emerald-400 hover:bg-emerald-400 hover:text-white hover:shadow-lg hover:shadow-emerald-400/50 font-medium border border-emerald-400 p-2 uppercase'>
          Purchase
        </a>
      </Link>
    </div>
  );
};

export default CrystalListItem;

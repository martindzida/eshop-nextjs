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
    <div className='flex flex-col items-center text-center border border-emerald-400 rounded-xl p-8'>
      <div className='p-4'>
        <h3 className='text-emerald-400 text-3xl font-bold'>{name}</h3>
      </div>
      <div className='p-8 pb-10'>
        <Image src={image} alt='Product image' width={80} height={80} />
      </div>
      {/*TODO: error when clicking link repeatedly */}
      <Link href={`/crystals/${id}`}>
        <a className='text-white bg-emerald-300 text-lg hover:bg-emerald-400 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-400/50 transition ease-in-out duration-400 rounded-lg font-medium p-3'>
          Purchase
        </a>
      </Link>
    </div>
  );
};

export default CrystalListItem;


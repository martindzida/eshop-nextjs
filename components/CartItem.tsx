import React from 'react';
import Image from 'next/image';
import {XMarkIcon} from '@heroicons/react/24/solid';

interface Props {
  id: number;
  name: string;
  image: string;
  quantity: number;
  price: number;
}

const CartItem = ({id, name, image, quantity, price}: Props) => {
  return (
    <div className='flex justify-between text-emerald-400 border font-semibold text-lg rounded-lg shadow-md w-2/3 p-8 m-4'>
      <div className='flex items-center gap-8'>
        <Image src={image} alt='Cart item image' width={50} height={50} />
        <h3 className=''>{name}</h3>
      </div>
      <div className='flex items-center gap-6'>
        <span>{quantity}x</span>
        <span>{price} €</span>
        <button onClick={() => console.log(id)} className='bg-emerald-400 rounded-lg p-1 m-1 text-center'>
          <XMarkIcon className='w-6 h-6 text-white' />
        </button>
      </div>
    </div>
  );
};

export default CartItem;


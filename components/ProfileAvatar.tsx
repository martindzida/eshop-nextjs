import React from 'react';
import Link from 'next/link';
import CartItemsCountBadge from './CartItemsCountBadge';
import {ShoppingCartIcon} from '@heroicons/react/24/solid';
import ProfileDropdownMenu from './ProfileDropdownMenu';
import {useContext} from 'react';
import {CartContext} from '../utils/CartContext';
import {cartItemType} from '../pages/crystals/[id]';

const ProfileAvatar = () => {
  const {cartItems, setCartItems} = useContext(CartContext);
  const cartItemsCount = (): number => {
    return cartItems.reduce((acc: number, obj: cartItemType) => {
      return acc + obj.quantity;
    }, 0);
  };

  return (
    <div className='flex items-center gap-5'>
      <div className='hidden sm:block'>
        <Link href='/cart'>
          <a className='relative'>
            <CartItemsCountBadge count={cartItemsCount()} />
            <ShoppingCartIcon className='w-8 h-8' />
          </a>
        </Link>
      </div>
      <ProfileDropdownMenu />
    </div>
  );
};

export default ProfileAvatar;


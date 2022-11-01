import React from 'react';
import CartItem from './CartItem';
import {CartItemType} from '../pages/crystals/[id]';

interface Props {
  items: CartItemType[];
}

const CartItemsList = ({items}: Props) => {
  const cart = items.map((cartItem: CartItemType) => (
    <CartItem
      key={cartItem.item.id}
      id={cartItem.item.id}
      name={cartItem.item.name}
      image={cartItem.item.image}
      quantity={cartItem.quantity}
      price={cartItem.item.price}
    />
  ));
  return <section className='flex flex-col items-center'>{items.length ? cart : 'Your cart is empty'}</section>;
};

export default CartItemsList;


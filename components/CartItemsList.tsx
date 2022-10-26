import React from 'react';
import CartItem from './CartItem';
import {useContext} from 'react';
import {CartContext} from '../utils/CartContext';
import {CartItemType} from '../pages/crystals/[id]';

const CartItemsList = () => {
  const {cartItems} = useContext(CartContext);
  const items = cartItems.map((cartItem: CartItemType) => (
    <CartItem
      key={cartItem.item.id}
      id={cartItem.item.id}
      name={cartItem.item.name}
      image={cartItem.item.image}
      quantity={cartItem.quantity}
      price={cartItem.item.price}
    />
  ));
  return <section className='flex flex-col items-center'>{cartItems.length ? items : 'Your cart is empty'}</section>;
};

export default CartItemsList;


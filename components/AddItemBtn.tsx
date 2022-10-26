import React from 'react';
import {useContext} from 'react';
import {CartContext} from '../utils/CartContext';
import {CartItemType} from '../pages/crystals/[id]';

//FIXME: any because of props in crystals/[id]
interface Props {
  item: any;
}

const AddItemBtn = ({item}: Props) => {
  const {cartItems, setCartItems} = useContext(CartContext);
  const handleCartItemPush = (newItem: CartItemType) => {
    if (cartItems.findIndex((i: CartItemType) => i.item.id === newItem.item.id) >= 0) {
      const newObjs = cartItems.map((i: CartItemType) => {
        if (i.item.id === newItem.item.id) {
          return {...i, quantity: i.quantity + 1};
        }
        return {...i};
      });
      setCartItems(newObjs);
    } else {
      setCartItems([...cartItems, newItem]);
    }
  };
  return (
    <button
      onClick={() => handleCartItemPush({item: item, quantity: 1})}
      className='text-lg transition ease-in-out duration-200 text-emerald-400 font-semibold hover:bg-emerald-400 hover:text-white border border-emerald-400 rounded-lg px-6 py-4'
    >
      Add to cart
    </button>
  );
};

export default AddItemBtn;


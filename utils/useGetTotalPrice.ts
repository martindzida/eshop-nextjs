import {useContext} from 'react';
import {CartContext} from '../utils/CartContext';
import {CartItemType} from '../pages/crystals/[id]';

const useGetTotalPrice = (): number => {
  const {cartItems} = useContext(CartContext);

  return cartItems.reduce((acc: number, obj: CartItemType) => {
    return acc + obj.item.price * obj.quantity;
  }, 0);
};

export default useGetTotalPrice;


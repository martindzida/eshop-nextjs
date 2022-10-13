import React from 'react';

interface Props {
  count: number;
}

const CartItemsCountBadge = (props: Props) => {
  return <span className='absolute w-5 h-5 text-sm top-1 left-5  bg-indigo-400 text-white rounded-full text-center'>{props.count}</span>;
};

export default CartItemsCountBadge;


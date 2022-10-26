import React from 'react';
import {Dialog} from '@headlessui/react';

interface Props {
  itemName: string;
  handleCloseModal: () => void;
}

const RemoveCartItemsDialog = ({itemName, handleCloseModal}: Props) => {
  return (
    <>
      <Dialog.Title as='h3' className='text-lg font-medium leading-6 text-gray-900'>
        Removing cart items
      </Dialog.Title>
      <div className='mt-2'>
        <p className='text-sm text-gray-500'>How many items of {itemName} do you want remove?</p>
      </div>

      <div className='mt-4 flex justify-center gap-4'>
        <input type='number' name='removeItem' />
        <button
          type='button'
          className='inline-flex justify-center rounded-md border border-transparent bg-emerald-300 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
          onClick={handleCloseModal}
        >
          Cancel
        </button>
      </div>
    </>
  );
};

export default RemoveCartItemsDialog;


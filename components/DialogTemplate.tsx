import React, {ReactNode} from 'react';
import {Dialog} from '@headlessui/react';

interface Props {
  title: string;
  description: string;
  children?: ReactNode;
}

const DialogTemplate = ({title, description, children}: Props) => {
  return (
    <>
      <Dialog.Title as='h3' className='text-lg font-medium leading-6 text-gray-900'>
        {title}
      </Dialog.Title>
      <div className='mt-2'>
        <p className='text-sm text-gray-500'>{description}</p>
      </div>
      <div className='mt-4 flex justify-center gap-4'>{children}</div>
    </>
  );
};

export default DialogTemplate;


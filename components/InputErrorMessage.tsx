import React from 'react';
import {ExclamationTriangleIcon} from '@heroicons/react/24/outline';

interface Props {
  error?: string;
}

const InputErrorMessage = ({error}: Props) => {
  return (
    <div className={`flex items-center justify-center p-1 ${error === undefined ? 'hidden' : ''}`}>
      <ExclamationTriangleIcon className='text-white w-5 h-5' />
      <strong className='text-white text-sm mx-1'>{error}</strong>
    </div>
  );
};

export default InputErrorMessage;


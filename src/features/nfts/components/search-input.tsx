import * as React from 'react';
import { useForm } from 'react-hook-form';

import Button from '@/components/buttons/Button';

import { setNFTAddress } from '../utils/actions';

export function SearchInput() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<{ address: string }>();
  const onSubmit = (data: { address: string }) => {
    setNFTAddress(data.address);
  };

  const clearInput = () => {
    reset();
    setNFTAddress('');
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col gap-4 w-full'
    >
      <div className='relative flex items-center '>
        <input
          defaultValue=''
          placeholder='0x...'
          className='w-full h-14 p-2 pl-5 rounded-2xl'
          {...register('address', { required: true })}
        />
        <Button
          className='absolute right-4 top-auto bottom-auto left-auto'
          variant='ghost'
          onClick={clearInput}
        >
          Clear
        </Button>
      </div>

      {errors.address && <span>This field is required</span>}

      <div className='flex justify-end items-center'>
        <Button variant='dark' type='submit'>
          Show collection
        </Button>
      </div>
    </form>
  );
}

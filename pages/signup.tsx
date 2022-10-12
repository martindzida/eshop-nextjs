import type {NextPage} from 'next';
import Head from 'next/head';
import {useForm} from 'react-hook-form';
import {useMutation} from '@tanstack/react-query';
import axios from 'axios';
import Navbar from '../components/Navbar';
import InputErrorMessage from '../components/InputErrorMessage';

interface SigninFormProps {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Signup: NextPage = () => {
  const createUser = useMutation((newUser: SigninFormProps) => {
    return axios.post('/api/signup', newUser);
  });

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<SigninFormProps>();

  const signupSubmit = (data: SigninFormProps) => {
    createUser.mutate(data);
  };

  return (
    <div>
      <Head>
        <title>Sign up</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <div className='text-center bg-emerald-400 rounded-lg p-16 m-8'>
        <form onSubmit={handleSubmit(signupSubmit)} className='flex flex-col items-center'>
          <input
            {...register('username', {required: 'Username is required', maxLength: 20})}
            type='text'
            name='username'
            placeholder='Username'
            className='rounded-2xl p-2 my-2'
          />
          <InputErrorMessage error={errors.username?.message} />
          <input
            {...register('email', {required: 'Email is required'})}
            type='email'
            name='email'
            placeholder='Email'
            className='rounded-2xl p-2 my-2'
          />
          <InputErrorMessage error={errors.email?.message} />
          <input
            {...register('password', {required: 'Password is required', minLength: {value: 8, message: 'Min length: 8'}})}
            type='password'
            name='password'
            placeholder='Password'
            className='rounded-2xl p-2 my-2'
          />
          <InputErrorMessage error={errors.password?.message} />
          <input
            {...register('confirmPassword', {required: 'Confirmation is required', minLength: 8})}
            type='password'
            name='confirmPassword'
            placeholder='Confirm password'
            className='rounded-2xl p-2 my-2'
          />
          <InputErrorMessage error={errors.confirmPassword?.message} />
          <input type='submit' value='Sign up' className='text-white bg-emerald-200 cursor-pointer font-bold text-sm rounded-lg px-8 py-2 mt-8' />
        </form>
      </div>
    </div>
  );
};

export default Signup;


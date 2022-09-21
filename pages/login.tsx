import type { NextPage } from 'next'
import Head from 'next/head'
import { useForm } from 'react-hook-form'


interface LoginFormProps {
  username: string,
  password: string
}

const Login: NextPage = () => {

  const { register, handleSubmit, formState: {errors} } = useForm<LoginFormProps>()

  const loginSubmit = (data: LoginFormProps) => {
    console.log(data)
  }


  return (
    <div>
      <Head>
        <title>Login</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='flex flex-col items-center p-12'>
        <div className='text-center p-6'>
          <h1 className='text-emerald-400 text-5xl font-bold'>Login</h1>
        </div>
        <div className='bg-emerald-400 text-center caret-emerald-400 p-8'>
          <form onSubmit={handleSubmit(loginSubmit)}>
            <div>
              <label htmlFor="username" className='text-white'>Username</label>
              <input {...register('username')} type="text" name='username'/>
            </div>
            <div>
              <label htmlFor="password" className='text-white'>Password</label>
              <input {...register('password')}type="password" name='password'/>
            </div>
            <button className='bg-white text-emerald-400 cursor-pointer uppercase text-sm font-semibold px-3 py-2 m-3'>Login</button>
          </form>
        </div> 
      </div>
    </div>
  )
}

export default Login

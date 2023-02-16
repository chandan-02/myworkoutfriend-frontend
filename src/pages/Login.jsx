import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import Input from '../components/Input';
import { Logo } from '../assets/svg';
import Button from '../components/Button';

function Login() {
  const history = useHistory();
  const handleLogin = () => {
    history.push('/app/home')
  }
  return (
    <div className="flex flex-col justify-center items-center">
      <Logo className={"h-64 w-72"} />

      <div className='flex flex-col gap-2 w-full md:w-[450px] px-5 md:px-0'>
        <Input label="Email" placeholder={"example@gmail.com"} />
        <Input label="Password" placeholder={"*********"} />
        <Link to='/auth/forgot-password'>
          <p className='text-sm cursor-pointer'>Forgot Password ?</p>
        </Link>
        <Button text={'Login'} onClick={handleLogin} />
        <Link to='/auth/register'>
          <p className='text-base cursor-pointer text-center text-green-600 hover:underline'>Don't have an account? Create one.</p>
        </Link>
      </div>
    </div>
  )
}

export default Login

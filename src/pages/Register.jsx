import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import Input from '../components/Input';
import { Logo } from '../assets/svg';
import Button from '../components/Button';

function CreateAccount() {

  const handleRegister = () => {

  }

  return (
    <div className="flex flex-col justify-center items-center">
      <Logo className={"h-64 w-72"} />
      <div className='flex flex-col gap-2 w-full md:w-[450px] px-5 md:px-0'>
        <Input label="Email" placeholder={"example@gmail.com"} />
        <Input label="Password" placeholder={"*********"} />
        <Input label="Confirm Password" placeholder={"*********"} />
        <Input label="Height - Optional" placeholder={"5.7"} />
        <Input label="Weight - Optional" placeholder={"55"} />
        <p className='text-base cursor-pointer text-green-600 text-left'>By creating an account you are agreeing to our terms & conditions.</p>
        <Button text={'Register'} onClick={handleRegister} />
        <Link to='/auth/login'>
          <p className='text-base cursor-pointer text-center text-green-600 hover:underline'>Already an account? Sign in.</p>
        </Link>
      </div>
    </div>
  )
}

export default CreateAccount

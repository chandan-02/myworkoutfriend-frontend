import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Input from '../components/Input';
import { Logo } from '../assets/svg';
import Button from '../components/Button';

import { login } from '../api/auth';

function Login() {
  const [userData, setUserData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const handleLogin = () => {
    setLoading(true);
    login(userData).then(res => {
      const loggedUser = res.data;
      localStorage.setItem('token', loggedUser?.meta?.jwt)
      localStorage.setItem('user', JSON.stringify(loggedUser?.data))
      history.push('/app/home')
      setLoading(false);
    }).catch(er => {
      setLoading(false);
    })
  }
  return (
    <div className="flex flex-col justify-center items-center">
      <Logo className={"h-64 w-72"} />

      <div className='flex flex-col gap-2 w-full md:w-[450px] px-5 md:px-0'>
        <Input name="email" setInput={setUserData} label="Email" placeholder={"example@gmail.com"} />
        <Input name="password" setInput={setUserData} label="Password" placeholder={"*********"} />
        <Link to='/auth/forgot-password'>
          <p className='text-sm cursor-pointer'>Forgot Password ?</p>
        </Link>
        <Button text={!loading ? 'Login' : "Please Wait"} onClick={handleLogin} />
        <Link to='/auth/register'>
          <p className='text-base cursor-pointer text-center hover:underline'>Don't have an account? <span className='text-orange-500 '>Create one.</span></p>
        </Link>
      </div>
    </div>
  )
}

export default Login

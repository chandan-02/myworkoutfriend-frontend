import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Input from '../components/Input';
import { Logo } from '../assets/svg';
import Button from '../components/Button';

import { Register } from '../api/auth';
import Toast from '../utils/Toast';

function CreateAccount() {
  const [userData, setUserData] = useState({ fullname: "", email: '', confirmpassword: '', password: '', mobile: "", role: "admin", height: "", weight: "" });
  const history = useHistory();
  const [loading, setLoading] = useState(false)

  const handleRegister = () => {
    setLoading(true)
    if (userData?.confirmpassword === userData?.password) {
      delete userData.confirmpassword;
      Register(userData).then(res => {
        setLoading(false)
        history.push('/app/home');
      }).catch(err => {
        setLoading(false)
      })
    } else {
      Toast({
        message: "Password not same",
        type: 'error'
      })
    }
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <Logo className={"h-64 w-72"} />
      <div className='flex flex-col gap-2 w-full md:w-[450px] px-5 md:px-0'>
        <Input name="fullname" setInput={setUserData} label="Fullname" placeholder={"Jhon Doe"} />
        <Input name="mobile" setInput={setUserData} label="Mobile" placeholder={"9911223311"} />
        <Input name="email" setInput={setUserData} label="Email" placeholder={"example@gmail.com"} />
        <Input name="password" setInput={setUserData} label="Password" placeholder={"*********"} />
        <Input name="confirmpassword" setInput={setUserData} label="Confirm Password" placeholder={"*********"} />
        <Input name="height" setInput={setUserData} label="Height - Optional" placeholder={"5.7"} />
        <Input name="weight" setInput={setUserData} label="Weight - Optional" placeholder={"55"} />
        <p className='text-base cursor-pointer text-green-600 text-left'>By creating an account you are agreeing to our terms & conditions.</p>
        <Button text={!loading ? 'Register' : "Please wait"} onClick={handleRegister} />
        <Link to='/auth/login'>
          <p className='text-base cursor-pointer text-center text-green-600 hover:underline'>Already an account? Sign in.</p>
        </Link>
      </div>
    </div>
  )
}

export default CreateAccount

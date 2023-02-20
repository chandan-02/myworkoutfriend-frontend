import moment from 'moment'

import { LogoNoBG } from '../../assets/svg';

import Button from '../Button';
import React from 'react'


function Header() {
    const user = JSON.parse(localStorage.getItem('user'));

    return (
        <div className='flex justify-end items-end h-[6rem] gap-4 mx-10 pb-2'>
            <LogoNoBG className={`h-16 w-16 absolute top-8 left-4 `} onClick={{}} />
            <p className="text-base text-orange-500">{moment().format('DD MMM YYYY')}</p>
            <h1 className="text-2xl font-bold">Welcome, {user?.fullname}</h1>
            {/* <div className='flex flex-col w-full px-2 md:w-[500px] gap-2 mt-5'> */}
            {/* <h1 className="text-xl font-bold">Actions</h1> */}
            {/* <Button text="See Report" type='outline' onClick={() => history.push('/app/report')} / */}
            {/* <Button text="Add Workout" onClick={() => history.push('/app/manage-workout')} /> */}
            {/* <Button text="Logout" className="w-min-w" onClick={() => {
                        localStorage.removeItem('user');
                        localStorage.removeItem('token');
                        history.push('/auth/login');
                    }} /> */}
            {/* </div> */}
            {/* <div className='h-[2px] bg-gray-200 w-full mt-4'></div> */}

        </div>
    )
}

export default Header
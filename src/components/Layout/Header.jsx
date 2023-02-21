import moment from 'moment'

import { LogoNoBG } from '../../assets/svg';

import Button from '../Button';
import React from 'react'


function Header({ sidebarOpen, setSidebarOpen }) {
    const user = JSON.parse(localStorage.getItem('user'));

    return (
        <div className=''>
            <div className='flex justify-between items-center h-[6rem] gap-4 mx-5 pb-2'>
                <div className={`${sidebarOpen ? "hidden" : "block"}`} onClick={() => { setSidebarOpen(true) }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>

                <LogoNoBG className={`h-12 w-auto}`} />

                <img className="object-cover mx-2 rounded-full h-9 w-9" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="avatar" />

                {/* <p className="text-base text-orange-500">{moment().format('DD MMM YYYY')}</p>
                <h1 className="text-2xl font-bold">Welcome, {user?.fullname}</h1>
                <div className='flex flex-col w-full px-2 md:w-[500px] gap-2 mt-5'>
                <h1 className="text-xl font-bold">Actions</h1>
                <Button text="See Report" type='outline' onClick={() => history.push('/app/report')} /
                <Button text="Add Workout" onClick={() => history.push('/app/manage-workout')} />
                <Button text="Logout" className="w-min-w" onClick={() => {
                            localStorage.removeItem('user');
                            localStorage.removeItem('token');
                            history.push('/auth/login');
                        }} />
                </div>
                <div className='h-[2px] bg-gray-200 w-full mt-4'></div> */}

            </div>
            <div className='h-[2px] bg-gray-200 w-full'></div>
        </div>
    )
}

export default Header
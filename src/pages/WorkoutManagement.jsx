import React from 'react'
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getAllUserExercise, DeleteASet } from '../api/exercise.jsx';
import { ArrowLeftIcon } from '@heroicons/react/24/solid'

const WorkoutManagement = () => {
    const history = useHistory();
    const user = JSON.parse(localStorage.getItem('user'));

    return (
        <div className='m-4 md:md-10 flex justify-center items-center flex-col'>
            <div className='mb-4 md:mb-10 md:my-5 w-full md:w-[800px]'>
                <h1 className="text-2xl font-bold flex flex-row gap-2 items-center"><ArrowLeftIcon className='h-7 text-orange-500 cursor-pointer' onClick={() => history.push('/app/home')} /> Manage your Workouts</h1>
            </div>
        </div>
    )
}

export default WorkoutManagement
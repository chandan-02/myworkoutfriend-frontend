
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getAllUserExercise } from '../api/exercise.jsx';
import { ArrowLeftIcon } from '@heroicons/react/24/solid'

import Table from '../components/Table';

const Report = () => {
    const [query, setQuery] = useState('')
    const history = useHistory();
    const user = JSON.parse(localStorage.getItem('user'));
    const [allExercise, setAllExercise] = useState([]);

    const handleGetAllUserExercise = () => {
        getAllUserExercise(`user=${user?._id}&date=${new Date().toISOString()}&populate=categoryid,exerciseid
        `).then(res => {
            let userExercise = res?.data?.data;
            setAllExercise(userExercise);
        }).catch(err => {
            console.warn(err)
        })
    }

    useEffect(() => {
        handleGetAllUserExercise()
    }, [])

    return (<div className='m-4 md:md-10 flex justify-center items-center flex-col'>
        <div className='mb-4 md:mb-10 md:my-5 md:w-[800px]'>
            <h1 className="text-2xl font-bold flex flex-row gap-2 items-center"><ArrowLeftIcon className='h-7 text-orange-500 cursor-pointer' onClick={()=>history.push('/app/home')}/> Report for {user?.fullname}</h1>
        </div>
        <div>
            <Table heading={['Exercise', 'Category', 'Set - Rep - Weight', 'Date']} data={allExercise} />
        </div>
    </div>)
}

export default Report;

import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getAllUserExercise } from '../api/exercise.jsx';

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

    return (<div className='m-4 md:md-10'>
        <div className='mb-4 md:mb-10 md:my-5'>
            <h1 className="text-2xl font-bold">Report for {user?.fullname}</h1>
        </div>
        <Table heading={['Exercise', 'Category', 'Set - Rep - Weight', 'Date']} data={allExercise} />
    </div>)
}

export default Report;
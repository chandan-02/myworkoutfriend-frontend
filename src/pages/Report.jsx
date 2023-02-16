
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getAllUserExercise } from '../api/exercise.jsx';

const Report = () => {
    const [query, setQuery] = useState('')
    const history = useHistory();
    const user = JSON.parse(localStorage.getItem('user'));
    const [allExercise, setAllExercise] = useState([]);

    const handleGetAllUserExercise = () => {
        getAllUserExercise(`user=${user?._id}&date=${new Date().toISOString()}
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
    console.log(allExercise)
    return (<div>
        <h1>Report</h1>
    </div>)
}

export default Report;
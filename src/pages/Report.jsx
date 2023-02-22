
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getAllUserExercise, DeleteASet } from '../api/exercise.jsx';
import { ArrowLeftIcon } from '@heroicons/react/24/solid'

import Table from '../components/Table';
import moment from 'moment';
import DropdownDefault from '../components/DropDownDefault';

const Report = () => {
    const [query, setQuery] = useState('')
    const history = useHistory();
    const user = JSON.parse(localStorage.getItem('user'));
    const [allExercise, setAllExercise] = useState([]);
    const [loading, setLoading] = useState(false);
    const [filter, setFilter] = useState({ date: new Date().toISOString(), weight: "" })

    const [refresh, setRefresh] = useState(0);

    const handleGetAllUserExercise = () => {
        setLoading(true)
        getAllUserExercise(`user=${user?._id}&date=${refresh === 0 ? moment(filter.date).toISOString() : moment(filter.date).add(1, 'days').toISOString()}&populate=categoryid,exerciseid
        `).then(res => {
            let userExercise = res?.data?.data;
            setAllExercise(userExercise);
            setLoading(false)
        }).catch(err => {
            console.warn(err)
            setLoading(false)
        })
    }

    useEffect(() => {
        handleGetAllUserExercise()
    }, [filter.date])

    return (
        <div className='m-4 md:mb-10 flex justify-center items-center flex-col'>
            <div className='mb-4 md:mb-10 md:my-5 w-full md:w-[800px]'>
                <h1 className="text-2xl font-bold flex flex-row gap-2 items-center">
                    <ArrowLeftIcon className='h-7 text-orange-500 cursor-pointer' onClick={() => history.push('/app/home')} /> Report for {user?.fullname}
                </h1>
            </div>
            <div className='h-[2px] bg-gray-200 w-full mb-3'></div>
            <div className='mb-4 md:mb-10 md:my-5 w-full md:w-[800px] flex flex-row gap-2'>
                <input type="date"
                    className='border-2 border-orange-500 rounded py-2 px-3 font-bold text-orange-500'
                    value={moment(filter.date).format('YYYY-MM-DD')}
                    onChange={e => { setRefresh(refresh + 1); setFilter({ ...filter, date: moment(e.target.value).toISOString() }) }} />
                <DropdownDefault default1={"kg"} data={[{ name: "kg", _id: "kg" }, { name: "lbs", _id: "lbs" }]} setInput={setFilter} input={"weight"} />

            </div>
            <div>
                {
                    !loading ?
                        <Table heading={['Exercise', 'Category', 'Set - Rep - Weight', 'Date']} data={allExercise} weight={filter.weight} />
                        : "Please wait.."
                }
            </div>
        </div>)
}

export default Report;
import moment from 'moment'

import Dropdown from '../components/DropDown';
import DropdownDefault from '../components/DropDownDefault';
import Input from '../components/Input';
import Button from '../components/Button';
import { useEffect, useState } from 'react';

import { getAllExercise, saveExercise } from '../api/exercise';
import { getAllUserCategory } from '../api/categories';
import { useHistory } from 'react-router-dom';

const Home = () => {
    const history = useHistory();
    const user = JSON.parse(localStorage.getItem('user'));
    const [exercise, setExercise] = useState({ exerciseid: '', categoryid: '', set: '', reps: '', weight: '', rpe: '' });
    const [query, setQuery] = useState({ categoryid: '63edb23fe8ce97542cb54fc0' })
    const [allExercise, setAllExercise] = useState([{ name: 'loading...' }]);
    const [allCategory, setAllCategory] = useState([{ name: 'Loading...' }])
    const [loading, setLoading] = useState(false)

    const getCategory = () => {
        getAllUserCategory('').then(res => {
            setAllCategory(res?.data?.data)
        }).catch(er => {
        })
    }
    const handleGet = () => {
        getAllExercise(`category=${query.categoryid}`).then(res => {
            let exercise = res?.data;
            setAllExercise(exercise?.data)
        })
    }

    useEffect(() => {
        handleGet()
    }, [query.categoryid]);

    useEffect(() => {
        getCategory();
    }, [])

    const onSave = () => {
        setLoading(true)
        saveExercise({
            exerciseid: exercise.exerciseid,
            categoryid: exercise.categoryid,
            user: user?._id,
            details: {
                set: exercise.set,
                reps: exercise.reps,
                weight: exercise.weight,
                rpe:exercise.rpe
            }
        }).then(res => {
            setLoading(false)

        }).catch(er => {
            setLoading(false)

        })
    }



    return (<div className="flex flex-col gap-2 justify-center items-center mt-5">
        <p className="text-base text-orange-500">{moment().format('DD MMM YYYY')}</p>
        <h1 className="text-2xl font-bold">Welcome, {user?.fullname}</h1>
        {/* temp */}
        <div className='flex flex-col w-full px-2 md:w-[500px] gap-2 mt-5'>
            <h1 className="text-xl font-bold">Actions</h1>
            <div className='flex flex-row gap-4'>
                <Button text="See Report" type='outline' onClick={() => history.push('/app/report')} />
                <Button text="Enter Exercise" />
                <Button text="Logout" onClick={() => {
                    localStorage.removeItem('user');
                    localStorage.removeItem('token');
                    history.push('/auth/login');
                }} />
            </div>
        </div>
        <div className='h-[2px] bg-gray-200 w-full mt-4'></div>
        <div className='flex flex-col w-full px-2 md:w-[500px] gap-2 mt-5'>
            <div className='flex flex-row gap-2'>
                <DropdownDefault default1={"Select Category"} data={allCategory} setInput={setQuery} input={"categoryid"} />
                <Dropdown default1={"Select Exercise"} data={allExercise} setInput={setExercise} />
            </div>
            <div className='mt-2'></div>
            <Input name="set" setInput={setExercise} label="Set" placeholder={"2"} />
            <Input name="reps" setInput={setExercise} label="Reps" placeholder={"6"} />
            <Input name="weight" setInput={setExercise} label="Weight - lbs" placeholder={"135"} />
            <Input name="rpe" setInput={setExercise} label="RPE" placeholder={"7"} />
            <div className='mt-2'></div>
            <Button text={!loading ? 'Save' : "Please wait"} onClick={!loading && onSave} />
        </div>
        {/*  */}
    </div >)
}

export default Home;
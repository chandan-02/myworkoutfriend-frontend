import React from 'react'
import { useEffect, useState } from 'react';
import { ArrowLeftIcon } from '@heroicons/react/24/solid'

import Button from '../components/Button';
import Input from '../components/Input';
import Dropdown from '../components/DropDown';
import DropdownDefault from '../components/DropDownDefault';

import { addNewExercise, getAllExercise } from '../api/exercise.jsx';
import { getAllUserCategory, addNewCategory } from '../api/categories';
import { useHistory } from 'react-router-dom';

const WorkoutManagement = () => {
    const history = useHistory();
    // const user = JSON.parse(localStorage.getItem('user'));
    const [allCategory, setAllCategory] = useState([{ name: 'Loading...' }])
    const [allExercise, setAllExercise] = useState([{ name: 'loading...' }]);
    const [query, setQuery] = useState({ categoryid: '63edb23fe8ce97542cb54fc0' })
    const [category, setCategory] = useState({name:""});
    const [exercise, setExercise] = useState({ categoryid: '', name: ''});
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
        getCategory();
    }, [])

    useEffect(() => {
        handleGet()
    }, [query.categoryid]);

    const onAddCategory = () => {
        setLoading(true)
        addNewCategory({
            name: category.name,
        }).then(res => {
            setLoading(false)
            setExercise({ ...exercise, name: '' })
        }).catch(er => {
            setLoading(false)
        })
    }

    const onAddExercise = () => {
        setLoading(true)
        addNewExercise({
            name: exercise.name,
            categoryid: exercise.categoryid,
        }).then(res => {
            setLoading(false)
            setExercise({ ...exercise, name: '' })
        }).catch(er => {
            setLoading(false)
        })
    }

    return (
        <div className='m-4 flex justify-center items-center flex-col'>
            <div className='md:my-5 w-full md:w-[800px]'>
                <h1 className="text-2xl font-bold flex flex-row gap-2 items-center"><ArrowLeftIcon className='h-7 text-orange-500 cursor-pointer' onClick={() => history.push('/app/home')} /> Manage your Workouts</h1>
            </div>
            <div className='h-[2px] bg-gray-200 w-full mt-4 mb-8'></div>
            <div className='flex flex-col gap-16'>
                <div className='flex gap-20'>
                    <div className='flex flex-col gap-4'>
                        <h1 className="text-lg font-bold">Add New Category</h1>
                        <Input name="name" placeholder={"Chest"} setInput={setCategory}/>
                        <Button text={!loading ? 'Add Category' : "Please wait"} onClick={!loading && onAddCategory} />
                    </div>
                    {/* <div className='flex flex-col gap-4'>
                        <h1 className="text-lg font-bold">Delete Category</h1>
                        <DropdownDefault default1={"Select Category"} data={allCategory}/>
                        <Button text='Delete'/>
                    </div> */}
                </div>
                <div className='flex gap-20'>
                    <div className='flex flex-col gap-4'>
                        <h1 className="text-lg font-bold">Add New Exercise</h1>
                        <DropdownDefault default1={"Select Category"} data={allCategory} setInput={setExercise}/>
                        <Input name="name" setInput={setExercise} placeholder={"BB Row"} />
                        <Button text={!loading ? 'Add Exercise' : "Please wait"} onClick={!loading && onAddExercise} />
                    </div>
                    {/* <div className='flex flex-col gap-4'>
                        <h1 className="text-lg font-bold">Delete Exercise</h1>
                        <DropdownDefault default1={"Select Category"} data={allCategory} setInput={setQuery} input={"categoryid"} />
                        <Dropdown default1={"Select Exercise"} data={allExercise} />
                        <Button text='Delete Exercise' />
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default WorkoutManagement;
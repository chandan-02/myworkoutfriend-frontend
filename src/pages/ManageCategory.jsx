import React from 'react'
import { useEffect, useState } from 'react';
import { ArrowLeftIcon } from '@heroicons/react/24/solid'

import Button from '../components/Button';
import Input from '../components/Input';
import Dropdown from '../components/DropDown';
import DropdownDefault from '../components/DropDownDefault';

import { getAllUserCategory, addNewCategory } from '../api/categories';
import { useHistory } from 'react-router-dom';

const WorkoutManagement = () => {
    const history = useHistory();
    // const user = JSON.parse(localStorage.getItem('user'));
    const [allCategory, setAllCategory] = useState([{ name: 'Loading...' }])
    const [category, setCategory] = useState({ name: "" });
    const [loading, setLoading] = useState(false)

    const getCategory = () => {
        getAllUserCategory('').then(res => {
            setAllCategory(res?.data?.data)
        }).catch(er => {
        })
    }

    useEffect(() => {
        getCategory();
    }, [])

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

    return (
        <div className='m-4 flex justify-center items-center flex-col gap-12'>
            <div className='md:my-5 w-full md:w-[800px]'>
                <h1 className="text-xl md:text-2xl font-bold flex flex-row gap-2 items-center"><ArrowLeftIcon className='h-6 md:h-7 text-orange-500 cursor-pointer' onClick={() => history.push('/app/home')} /> Manage your Categories</h1>
            </div>
                <div className='flex gap-20'>
                    <div className='flex flex-col gap-4'>
                        <h1 className="text-lg font-bold">Add New Category</h1>
                        <Input name="name" placeholder={"Chest"} setInput={setCategory} />
                        <Button text={!loading ? 'Add Category' : "Please wait"} onClick={!loading && onAddCategory} />
                    </div>
                    {/* <div className='flex flex-col gap-4'>
                        <h1 className="text-lg font-bold">Delete Category</h1>
                        <DropdownDefault default1={"Select Category"} data={allCategory}/>
                        <Button text='Delete'/>
                    </div> */}
                </div>
        </div>
    )
}

export default WorkoutManagement;
import React from 'react'
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { PlusCircleIcon, TableCellsIcon } from '@heroicons/react/24/solid';

import Button from '../components/Button';
import Input from '../components/Input';
import Tabs from '../components/Tabs';
import CategoryTab from '../components/ManageWorkout/CategoryTab';

import { getAllUserCategory, addNewCategory, deleteUserCategory } from '../api/categories';

const WorkoutManagement = () => {

    const [tab, setTab] = useState(0);

    const history = useHistory();
    const user = JSON.parse(localStorage.getItem('user'));
    const [allCategory, setAllCategory] = useState([{ name: 'Loading...' }])
    const [category, setCategory] = useState({ name: "", checked: false });
    const [loading, setLoading] = useState(false);
    const [delLoad, setDelLoad] = useState(false);

    const getCategory = () => {
        getAllUserCategory(`populate=userid&`).then(res => {
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
            userid: user?._id,
            type: category?.checked ? 'public' : 'private'
        }).then(res => {
            setLoading(false)
            setExercise({ ...exercise, name: '' })
        }).catch(er => {
            setLoading(false)
        })
    }

    const deleteCategory = (id) => {
        setDelLoad(true)
        deleteUserCategory(id).then(res => {
            setDelLoad(false)
            window.location.reload()
        }).catch(er => {
            setDelLoad(false)
        })
    }

    const tabs = [{
        name: 'All Categories',
        logo: <TableCellsIcon className='h-4 md:h-6 pr-2' />,
        index: 0
    }, {
        name: 'Add New Categories',
        logo: <PlusCircleIcon className='h-4 md:h-6 pr-2' />,
        index: 1
    }];

    return (
        <div className='m-4 flex justify-center items-center flex-col gap-12'>
            <div className='w-full md:w-[800px]'>
                <Tabs tabs={tabs} tab={tab} setTab={setTab} />
            </div>
            {
                tab === 1 && <div className='flex gap-20 w-full md:w-[800px]'>
                    <div className='flex flex-col gap-3 w-full'>
                        <h1 className="text-lg font-bold">Add New Category</h1>
                        <Input name="name" placeholder={"Chest"} setInput={setCategory} />
                        <div className='flex flex-row gap-2 items-center '>
                            <input type={"checkbox"} className="h-4 md:h-5 w-5 accent-orange-500" onClick={() => setCategory({ ...category, checked: !category.checked })} />
                            <span className='text-base md:text-lg font-bold'>Public</span>
                        </div>
                        <span className='text-xs md:text-base'>Make this category accessible to all users of the platform.</span>
                        <Button text={!loading ? 'Add Category' : "Please wait"} onClick={!loading ? onAddCategory : () => { }} />
                    </div>
                    {/* <div className='flex flex-col gap-4'>
                        <h1 className="text-lg font-bold">Delete Category</h1>
                        <DropdownDefault default1={"Select Category"} data={allCategory}/>
                        <Button text='Delete'/>
                    </div> */}
                </div>
            }
            {
                tab === 0 && <div className='flex flex-col gap-4 w-full md:w-[800px]'>
                    {
                        allCategory?.map((itm, i) => {
                            return <CategoryTab key={itm?._id} data={itm} onDelete={deleteCategory} delLoad={delLoad}/>
                        })
                    }
                </div>
            }
        </div>
    )
}

export default WorkoutManagement;
import moment from "moment/moment";
import { ExclamationCircleIcon, TrashIcon, EllipsisHorizontalCircleIcon } from '@heroicons/react/24/solid'
import { DeleteASet } from '../api/exercise.jsx';

import { convertWeight } from '../utils/weightConverter';
import { useState } from "react";

const Table = ({ heading, data, weight, }) => {
    const [loading, setLoading] = useState(false)
    const handleDeleteSet = (usid, id) => {
        setLoading(true)
        DeleteASet({ usid, id }).then(res => {
            setLoading(false)
            window.location.reload();
        }).catch(err => {
            setLoading(false)
        })
    }

    const cellPadding = (index) => {
        if (index === 0) return `px-2`;
        if (index === 1) return `px-2`;
        if (index === 2) return `px-4`;
        if (index === 3) return `px-2`;
        if (index === 4) return `px-1`;
    }

    return (
        <div className="overflow-x-auto gap-4 flex flex-col">
            {
                data?.length > 0 ? data?.map(item => {
                    return (
                        <div className="border-2 border-gray-200 bg-gray-50 py-4 px-3 md:px-6 rounded shadow-md md:w-[800px] w-full">
                            <div className="grid grid-cols-3 justify-between py-2 pb-4">
                                <h1 className="font-bold md:text-xl flex flex-col col-span-1"><span className="text-xs font-normal text-orange-500">Exercise</span> {item?.exerciseid?.name} </h1>
                                <h1 className="font-bold md:text-xl flex flex-col col-span-1"> <span className="text-xs font-normal text-orange-500">Category</span>{item?.categoryid?.name} </h1>
                                <h1 className="font-bold md:text-xl flex flex-col col-span-1"> <span className="text-xs font-normal text-orange-500">Date</span>{moment(item?.createdAt).format('DD MMM YYYY')}</h1>
                            </div>
                            <table className="text-xs md:text-base text-left text-gray-500 border-[1px] w-full">
                                <thead className=" text-gray-700 uppercase bg-orange-500">
                                    <tr>
                                        {
                                            ["Set", "Reps", "Weight", "RPE", "X"]?.map((itm, i) => <th key={i} scope="col" className={`${cellPadding(i)} md:px-6 py-3 text-white text-center`}>
                                                {itm}
                                            </th>)
                                        }
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        item?.details?.sort((r1, r2) => (r1.set > r2.set) ? 1 : (r1.set < r2.set) ? -1 : 0).map(itm => {
                                            return (
                                                <tr key={itm?._id} className="bg-white border-b w-300px">
                                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-center">
                                                        {itm?.set}
                                                    </th>
                                                    <td className="px-6 py-4 text-center">
                                                        {itm?.reps}
                                                    </td>
                                                    <td className="px-6 py-4 text-center">
                                                        {weight === 'lbs' ? itm?.weight + " lbs" : convertWeight(itm?.weight, 'kg')}
                                                    </td>
                                                    <td className="px-6 py-4 text-center">
                                                        {itm?.rpe ? itm?.rpe : '-'}
                                                    </td>
                                                    <td className="px-6 py-4 text-center">
                                                        {
                                                            !loading ?
                                                                <TrashIcon className="text-red-500 h-5" onClick={() => handleDeleteSet(item?._id, itm?._id)} />
                                                                : <EllipsisHorizontalCircleIcon className="text-orange-500 h-5" />
                                                        }
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }

                                </tbody>
                            </table>

                        </div>
                    )
                }) : <div><ExclamationCircleIcon className="text-orange-500" /><p className="text-base">No Data Found</p></div>
            }

        </div>

    )
}

export default Table;
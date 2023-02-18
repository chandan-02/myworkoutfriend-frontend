import moment from "moment/moment";
import { ExclamationCircleIcon } from '@heroicons/react/24/solid'
import { convertWeight } from '../utils/weightConverter';

const Table = ({ heading, data }) => {
    return (
        <div className="overflow-x-auto gap-4 flex flex-col">
            {
                data?.length > 0 ? data?.map(itm => {
                    return (
                        <div className="border-2 border-gray-200 bg-gray-50 py-4 px-6 rounded shadow-md md:w-[800px] w-full">
                            <div className="flex justify-between py-2 pb-4">
                                <h1 className="font-bold md:text-xl flex flex-col"><span className="text-xs font-normal text-orange-500">Exercise</span> {itm?.exerciseid?.name} </h1>
                                <h1 className="font-bold md:text-xl flex flex-col"> <span className="text-xs font-normal text-orange-500">Category</span>{itm?.categoryid?.name} </h1>
                                <h1 className="font-bold md:text-xl flex flex-col"> <span className="text-xs font-normal text-orange-500">Date</span>{moment(itm?.createdAt).format('DD MMM YYYY')}</h1>
                            </div>
                            <table className="w-full text-sm text-left text-gray-500 border-[1px]">
                                <thead className="text-xs text-gray-700 uppercase bg-orange-500">
                                    <tr>
                                        {
                                            ["Set", "Reps", "Weight", "RPE"]?.map((itm, i) => <th key={i} scope="col" className="px-6 py-3 text-white">
                                                {itm}
                                            </th>)
                                        }
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        itm?.details.map(itm => {
                                            return (
                                                <tr key={itm?._id} className="bg-white border-b w-300px">
                                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                                        {itm?.set}
                                                    </th>
                                                    <td className="px-6 py-4">
                                                        {itm?.reps}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        {itm?.weight} lbs = {convertWeight(itm?.weight, 'kg')}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        {itm.rpe}
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
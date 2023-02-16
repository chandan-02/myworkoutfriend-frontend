import moment from "moment/moment";

const Table = ({ heading, data }) => {
    return (
        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 ">
                <thead className="text-xs text-gray-700 uppercase bg-green-300">
                    <tr>
                        {
                            heading?.map((itm, i) => <th key={i} scope="col" className="px-6 py-3">
                                {itm}
                            </th>)
                        }
                    </tr>
                </thead>
                <tbody>
                    {data?.length > 0 ? data?.map(itm => {
                        console.log
                        return <tr key={itm?._id} className="bg-white border-b w-300px">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                {itm?.exerciseid?.name}
                            </th>
                            <td className="px-6 py-4">
                                {itm?.categoryid?.name}
                            </td>
                            <td className="px-6 py-4">
                                {itm?.details?.map((itm, i) => <><p>{itm?.set} - {itm?.reps} - {itm?.weight}</p>
                                    <div className="h-1 bg-gray-200 w-[80px] rounded mb-2 mt-1"></div>
                                </>)}
                            </td>
                            <td className="px-6 py-4">
                                {moment(itm?.createdAt).format('DD MMM YYYY')}
                            </td>
                        </tr>
                    }) : "Please wait"}


                </tbody>
            </table>
        </div>

    )
}

export default Table;
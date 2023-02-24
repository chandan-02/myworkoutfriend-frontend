import { TrashIcon, EllipsisHorizontalCircleIcon } from '@heroicons/react/24/solid'
import moment from 'moment';

const CategoryTab = ({ data, onDelete, delLoad }) => {
    return <div className="bg-orange-100 px-4 py-2 rounded-xl w-full flex justify-between items-center border-2 border-orange-200">
        <div>
            <h1 className="text-base md:text-md font-bold text-orange-600">{data.name}</h1>
            <p className=''>@{data?.userid?.fullname}</p>
            <p className='text-xs'>Visibility: {data?.type} {" | "}Created At: {moment(data?.createdAt).format('DD MMM YYYY hh:mm A')} </p>
        </div>
        {
            !delLoad ?
                <TrashIcon className='h-6 text-red-500 cursor-pointer' onClick={() => onDelete(data?._id)} />
                :
                <EllipsisHorizontalCircleIcon className='h-6 text-red-500 cursor-pointer' />
        }
    </div>
}

export default CategoryTab;
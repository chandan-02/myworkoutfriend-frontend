import { useState } from 'react';
import { CalendarDaysIcon } from '@heroicons/react/24/solid';
import moment from 'moment/moment';

import TabsWeekDay from '../components/PlanWorkout/Tab';

const PlanWorkout = () => {

    const [selectedDay, setSelectedDay] = useState(moment().format('dddd'));

    return (<div className='m-4 md:mb-10 flex justify-center items-center flex-col'>
        <div className='mb-4 md:mb-10 md:my-5 w-full md:w-[800px]'>
            <h1 className="text-xl md:text-2xl font-bold flex flex-row gap-2 items-center">
                <CalendarDaysIcon className='h-7 text-orange-500' /> Plan your weekdays
            </h1>
        </div>
        <TabsWeekDay selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
    </div>)
}

export default PlanWorkout;
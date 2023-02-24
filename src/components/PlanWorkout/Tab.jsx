const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const TabsWeekDay = ({ selectedDay, setSelectedDay }) => {

    return (<ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200  ">
        {
            weekDays.map(day => {
                return (
                    <li key={day} className="mr-2" onClick={() => setSelectedDay(day)}>
                        <p className={`
                        text-xs
                        md:text-base
                        inline-block p-4 
                        ${selectedDay == day ? 'text-orange-600' : 'text-gray-800'}  
                        ${selectedDay == day ? 'bg-orange-200' : ''} 
                        rounded-t-lg active cursor-pointer`}>{day}</p>
                    </li>
                )
            })
        }

    </ul>)
}

export default TabsWeekDay;
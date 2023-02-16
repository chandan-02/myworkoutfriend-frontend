import { useState } from "react";

const Elements = ({ text, onClick }) => {
    return (<li onClick={onClick}>
        <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer">{text}</a>
    </li>)
}

const Dropdown = ({ data, setInput, input }) => {
    const [open, setOpen] = useState(false);
    const [select, setSelect] = useState('Select Exercise')
    return (
        <div>
            <button id="dropdownDefaultButton"
                onClick={() => setOpen(!open)}
                data-dropdown-toggle="dropdown"
                className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium 
                rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                type="button">{select}<svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>

            {
                open && (
                    <div id="dropdown" className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute">
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                            {data?.map((itm, i) => <Elements key={i} text={itm.name} onClick={() => {
                                setOpen(false);
                                setSelect(itm?.name)
                                setInput(prev => {
                                    return {
                                        ...prev, exerciseid: itm?._id, categoryid: itm?.categoryid
                                    }
                                })
                            }} />)}

                        </ul>
                    </div>
                )
            }
        </div>
    )
}

export default Dropdown;
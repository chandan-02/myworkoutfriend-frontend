const Tabs = ({ tabs, setTab, tab }) => {
    return (<div class="border-b border-gray-200 ">
        <ul class="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 ">
            {
                tabs?.map((itm, i) => {
                    return <li key={i} class="mr-2 cursor-pointer" onClick={() => {
                        setTab(itm.index)
                    }}>
                        <p class={`${itm.index == tab ? 'text-orange-500' : ''} text-xs md:text-base inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:border-gray-300 `}>
                            {itm?.logo} {itm?.name}
                        </p>
                    </li>
                })
            }

        </ul>
    </div>)
}

export default Tabs
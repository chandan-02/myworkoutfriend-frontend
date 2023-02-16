import moment from 'moment'

import Dropdown from '../components/DropDown';
import Input from '../components/Input';
import Button from '../components/Button';

const Home = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return (<div className="flex flex-col gap-2 justify-center items-center mt-5">
        <p className="text-base text-green-600">{moment().format('DD MMM YYYY')}, Legs day</p>
        <h1 className="text-2xl font-bold">Welcome, {user?.name}</h1>
        {/* temp */}
        <div className='flex flex-col w-full px-2 md:w-[500px] gap-2 mt-5'>
            <Dropdown data={[]} />
            <div className='mt-2'></div>
            <Input label="Set" placeholder={"2"} />
            <Input label="Reps" placeholder={"6"} />
            <Input label="Weight - lbs" placeholder={"135"} />
            <div className='mt-2'></div>
            <Button text={'Save'} />
        </div>
        {/*  */}
    </div >)
}

export default Home;
import { useHistory } from 'react-router-dom';
import { Logo } from '../assets/svg';
import Button from '../components/Button';

const Landing = () => {
    const navigate = useHistory();
    return (<div className='h-full w-full overflow-x-hidden'>
        <div className='flex flex-col justify-center items-center h-full'>
            <Logo className={"h-96 "} />
            <div className='flex flex-row gap-2'>
                <Button text={'Login'} onClick={() => navigate.push('/auth/login')} />
                <Button text={'Register'} type="outline" onClick={() => navigate.push('/auth/register')} />
            </div>
        </div>
    </div>)
}

export default Landing
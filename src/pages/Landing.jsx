import { useHistory } from 'react-router-dom';
import { Logo } from '../assets/svg';
import Button from '../components/Button';

const Landing = () => {
    const navigate = useHistory();
    return (<>
        <div className='flex flex-col justify-center items-center'>
            <Logo className={"h-64 w-72"} />
            <div className='flex flex-row gap-2'>
                <Button text={'Login'} onClick={() => navigate.push('/auth/login')} />
                <Button text={'Register'} type="outline" onClick={() => navigate.push('/auth/register')} />
            </div>
        </div>
    </>)
}

export default Landing
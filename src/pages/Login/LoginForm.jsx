import logo_modern from '../../assets/vb_modern.png';
import { Input } from '../../components/form';
import { AuthButton } from '../../components/buttons/AuthButton';
import { Link } from 'react-router-dom';

export const LoginForm = () => {
    return (
        <form
            action=""
            className="bg-slate-50 drop-shadow-md p-6 max-w-md rounded-sm md:max-w-2xl"
        >
            <div className='mb-6'>
                <img src={logo_modern} alt="Virtual Bookshelf logo" />
            </div>
            <div className='flex flex-col gap-4'>
                <Input
                    label='Email address'
                    type='email'
                    id='login_email'
                    placeholder="example@domain.com"
                />
                <Input
                    label='Password'
                    type='password'
                    id='login_password'
                />
            </div>
            <AuthButton text='Login' />
            <div className='text-center mt-6 text-xl text-gray-900 md:text-2xl'>
                Don't have an account?
                <Link
                    to='/signup'
                    className='ml-2 font-semibold text-emerald-600'
                >
                    Sign up
                </Link>
            </div>
        </form>
    );
};

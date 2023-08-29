import logo_modern from '../../assets/vb_modern.png';
import { Input } from '../../components/form';
import { AuthButton } from '../../components/buttons/AuthButton';
import { email_validation, password_validation } from '../../utils';
import { Link } from 'react-router-dom';
import { FormProvider, useForm } from 'react-hook-form';

export const LoginForm = () => {
    const methods = useForm();

    const handleSubmit = methods.handleSubmit(data => console.log(data));

    return (
        <FormProvider {...methods}>
            <form
                onSubmit={e => e.preventDefault()}
                noValidate
                className="bg-slate-50 drop-shadow-md p-6 max-w-md rounded-sm md:max-w-2xl"
            >
                <div className='mb-6'>
                    <img src={logo_modern} alt="Virtual Bookshelf logo" />
                </div>
                <div className='flex flex-col gap-4'>
                    <Input {...email_validation}/>
                    <Input {...password_validation}/>
                </div>
                <AuthButton
                    handleSubmit={handleSubmit}
                    text='Login'
                />
                <div className='text-center mt-6 text-xl text-gray-900 md:text-2xl'>
                    Don&apos;t have an account?
                    <Link
                        to='/signup'
                        className='ml-2 font-semibold text-emerald-600'
                    >
                        Sign up
                    </Link>
                </div>
            </form>
        </FormProvider>
    );
};

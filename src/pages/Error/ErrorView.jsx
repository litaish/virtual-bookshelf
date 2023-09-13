import { useRouteError } from 'react-router-dom';
import { Layout } from '../../components/index';

export const ErrorView = () => {
  const error = useRouteError();

  return (
    <div className='min-h-screen font-inter flex flex-col'>
      <Layout.Navbar />
      <main className='flex flex-grow flex-col justify-center items-center gap-4'>
        <h1 className='text-3xl font-semibold'>Oops!</h1>
        <p className='text-2xl'>Sorry, an unexpected error has occurred.</p>
        <p className='text-xl'>
          <i>{error.statusText || error.message}</i>
        </p>
      </main>
    </div>
  );
};

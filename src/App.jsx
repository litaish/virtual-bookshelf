import { Outlet, useLocation } from 'react-router-dom';
import { Layout } from './components/index';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient();

const App = () => {
  const pathName = useLocation().pathname;

  /* A seperate view is rendered based on if the page is login/signup or not */
  const authView = (
    <>
      <Outlet />
    </>
  );

  const regularView = (
    <>
      <Layout.Navbar />
      <Outlet />
    </>
  );
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen font-inter">
        {['/', '/login', '/signup'].includes(pathName) ? authView : regularView}
      </div>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
};
export default App;

import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from './components/layout';

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
      <Navbar />
      <Outlet />
    </>
  );
  return (
    <div className="min-h-screen">
      {['/', '/login', '/signup'].includes(pathName) ? authView : regularView}
    </div>
  );
};
export default App;

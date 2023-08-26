import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import {
  UserBooks,
  AddBook,
  Login,
  Signup,
  Book,
  Error,
} from './pages/index.js';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <Error.ErrorView />,
      children: [
        {
          path: 'login',
          element: <Login.LoginView />,
        },
        {
          path: 'books',
          element: <UserBooks.UserBooksView />,
        },
        {
          path: 'add',
          element: <AddBook.AddBookView />,
        },
        {
          path: 'login',
          element: <Login.LoginView />,
        },
        {
          path: 'signup',
          element: <Signup.SignupView />,
        },
        {
          path: 'book/:id',
          element: <Book.BookView />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;

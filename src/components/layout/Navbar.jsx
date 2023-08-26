import logo_modern from '../../assets/vb_modern.png';
import { Link } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiGithub } from '@mdi/js';

export const Navbar = () => {
  return (
    <nav className="bg-white shadow border-t-4 border-emerald-500">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div>
            <img
              className="w-full h-10"
              src={logo_modern}
              alt="Virtual Bookshelf logo"
            />
          </div>
          <div className="hidden sm:flex sm:items-center">
            <Link
              to="books"
              className="text-gray-800 text-2xl font-semibold transition-colors hover:text-emerald-600 mr-4"
            >
              My Books
            </Link>
            <Link
              to="add"
              className="text-gray-800 text-2xl font-semibold transition-colors hover:text-emerald-600 mr-4"
            >
              Add To Library
            </Link>
          </div>

          <div className="hidden sm:flex sm:items-center">
            <a
              href="#"
              className="text-gray-800 text-2xl font-semibold transition-colors hover:text-emerald-600 mr-4"
            >
              Logout
            </a>
            <a
              href="https://github.com/litaish/virtual-bookshelf"
              target="_blank"
              rel="noreferrer noopener"
              className="flex justify-center items-center gap-2 text-gray-800 text-2xl font-semibold border px-4 py-2 rounded-lg transition-colors hover:text-emerald-600 hover:border-emerald-600"
            >
              <Icon path={mdiGithub} size={1.5} />
              Github
            </a>
          </div>
        </div>

        <div className="block sm:hidden bg-white border-t-2 py-2">
          <div className="flex flex-col">
            <Link
              to="books"
              className="text-gray-800 text-lg font-semibold transition-colors hover:text-emerald-600 mb-1"
            >
              My Books
            </Link>
            <Link
              to="add"
              className="text-gray-800 text-lg font-semibold transition-colors hover:text-emerald-600 mb-1"
            >
              Add To Library
            </Link>
            <div className="flex justify-between items-center border-t-2 pt-2">
              <a
                href="#"
                className="text-gray-800 text-lg font-semibold transition-colors hover:text-emerald-600 mr-4"
              >
                Logout
              </a>
              <a
                href="https://github.com/litaish/virtual-bookshelf"
                target="_blank"
                rel="noreferrer noopener"
                className="flex justify-center items-center gap-2 text-gray-800 text-lg font-semibold border px-4 py-1 rounded-lg transition-colors hover:text-emerald-600 hover:border-emerald-600"
              >
                <Icon path={mdiGithub} size={1.5} />
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

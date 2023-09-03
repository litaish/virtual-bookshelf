import { Book } from '../index';
import { Buttons } from '../../components/index';
import PropTypes from 'prop-types';
import Icon from '@mdi/react';
import { mdiRead, mdiBookRemoveMultiple } from '@mdi/js';

export const General = ({ book }) => {
    return (
        <section className='flex flex-col gap-10'>
            <h2 className="border-solid border-b-2 flex justify-between items-center p-4 text-gray-800 text-2xl">General Information</h2>
            <div className='flex justify-between'>
                <div className="flex flex-col gap-2">
                    <Book.GeneralItem title="ISBN" value={book.ISBN} />
                    <Book.GeneralItem title="Title" value={book.title} />
                    <Book.GeneralItem title="Authors" value={book.authors} />
                    <Book.GeneralItem title="Genres" value={book.genres} />
                </div>
                <div>
                    <img src={book.imgSrc} alt={book.title} className='rounded-md shadow-2xl w-44' />
                </div>
            </div>
            <div className='flex gap-12'>
                <Buttons.ActionButton text='Mark as read' className='bg-blue-500 hover:bg-blue-600' icon={<Icon path={mdiRead} size={1} />} />
                <Buttons.ActionButton text='Remove' className='bg-red-500 hover:bg-red-600' icon={<Icon path={mdiBookRemoveMultiple} size={1} />} />
            </div>
        </section>
    )
};

General.propTypes = {
    book: PropTypes.object.isRequired,
}

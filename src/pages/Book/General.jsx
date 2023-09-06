import { Book } from '../index';
import { Buttons, Layout } from '../../components/index';
import PropTypes from 'prop-types';
import Icon from '@mdi/react';
import { mdiRead, mdiBookRemoveMultiple } from '@mdi/js';

export const General = ({ book, onRemoveClick }) => {
  const changeReadStatusText = book.isRead ? 'Mark as unread' : 'Mark as read';

  return (
    <section className="flex flex-col gap-6">
      <Layout.SecondaryHeader text="General Information"/>
      <div className="flex justify-between">
        <div className="flex flex-col gap-2">
          <Book.GeneralItem title="ISBN" value={book.ISBN} />
          <Book.GeneralItem title="Title" value={book.title} />
          <Book.GeneralItem title="Authors" value={book.authors} />
          <Book.GeneralItem title="Genres" value={book.genres} />
        </div>
        <div>
          <img
            src={book.imgSrc}
            alt={book.title}
            className="rounded-md shadow-2xl w-44 lg:w-60 2xl:w-96"
          />
        </div>
      </div>
      <div className="flex gap-12">
        <Buttons.ActionButton
          text={changeReadStatusText}
          type="button"
          className="bg-blue-500 hover:bg-blue-600"
          icon={<Icon path={mdiRead} size={1.2} />}
        />
        <Buttons.ActionButton
          onClick={onRemoveClick}
          text="Remove"
          type="button"
          className="bg-red-500 hover:bg-red-600"
          icon={<Icon path={mdiBookRemoveMultiple} size={1.4} />}
        />
      </div>
    </section>
  );
};

General.propTypes = {
  book: PropTypes.object.isRequired,
  onRemoveClick: PropTypes.func,
};

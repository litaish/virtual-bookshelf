import { Book } from '../index';
import { Buttons, Layout } from '../../components/index';
import PropTypes from 'prop-types';
import Icon from '@mdi/react';
import { mdiRead, mdiBookRemoveMultiple } from '@mdi/js';
import { useState } from 'react';

export const General = ({ ISBN10, ISBN13, title, authors, categories, read, imgSrc, onReadClick, onRemoveClick }) => {
  const [isRead, setIsRead] = useState(read);

  const handleReadClick = () => {
    onReadClick();
    setIsRead((prev) => !prev);
  }

  return (
    <section className="flex flex-col gap-6">
      <Layout.SecondaryHeader text="General Information"/>
      <div className="flex justify-between gap-2">
        <div className="flex flex-col gap-2 md:gap-4">
          <Book.GeneralItem title="ISBN-10" value={ISBN10} />
          <Book.GeneralItem title="ISBN-13" value={ISBN13} />
          <Book.GeneralItem title="Title" value={title} />
          <Book.GeneralItem title="Authors" value={authors} />
          <Book.GeneralItem title="Categories" value={categories} />
        </div>
        <div>
          <img
            src={imgSrc}
            alt={title}
            className="rounded-md shadow-2xl w-44 lg:w-60"
          />
        </div>
      </div>
      <div className="flex gap-12">
        <Buttons.ActionButton
          onClick={handleReadClick}
          text={isRead ? 'Mark as unread' : 'Mark as read'}
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
  ISBN10: PropTypes.string,
  ISBN13: PropTypes.string,
  title: PropTypes.string.isRequired,
  authors: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  read: PropTypes.bool.isRequired,
  imgSrc: PropTypes.string,
  onReadClick: PropTypes.func,
  onRemoveClick: PropTypes.func,
};

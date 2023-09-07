import { Book } from '../index';
import { Buttons, Layout } from '../../components/index';
import PropTypes from 'prop-types';
import Icon from '@mdi/react';
import { mdiRead, mdiBookRemoveMultiple } from '@mdi/js';

export const General = ({ ISBN, title, authors, genres, isRead, imgSrc, onRemoveClick }) => {
  const changeReadStatusText = isRead ? 'Mark as unread' : 'Mark as read';

  return (
    <section className="flex flex-col gap-6">
      <Layout.SecondaryHeader text="General Information"/>
      <div className="flex justify-between">
        <div className="flex flex-col gap-2">
          <Book.GeneralItem title="ISBN" value={ISBN} />
          <Book.GeneralItem title="Title" value={title} />
          <Book.GeneralItem title="Authors" value={authors} />
          <Book.GeneralItem title="Genres" value={genres} />
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
  ISBN: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  authors: PropTypes.array.isRequired,
  genres: PropTypes.array.isRequired,
  isRead: PropTypes.bool.isRequired,
  imgSrc: PropTypes.string,
  onRemoveClick: PropTypes.func,
};

import { Layout, Buttons } from '../../components/index';
import { Book } from '../index';
import { useLocation } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiContentSaveAll } from '@mdi/js';

export const BookView = () => {
  const location = useLocation();

  const book = location.state?.data;

  return (
    <main className="p-8 flex flex-col gap-8">
      <Layout.Header text="Edit Book Information" />
      <Book.General book={book} />
      <Book.GiveARating />
      <Book.Notes />
      <Buttons.ActionButton
        text="Save Data"
        icon={<Icon path={mdiContentSaveAll} size={1.2} />}
      />
    </main>
  );
};

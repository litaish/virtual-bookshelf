import { Layout, Buttons, UI } from '../../components/index';
import { Book } from '../index';
import { useLocation, useNavigate } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiContentSaveAll } from '@mdi/js';
import { useState } from 'react';

export const BookView = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [modal, setModal] = useState({
    show: false,
    title: '',
    text: '',
  })

  const book = location.state?.data;

  const handleConfirmClick = () => {
    setModal({
      show: false,
      title: '',
      text: '',
    });
    console.log(`Deleted book ${book.id}`);
    navigate("/books");
  }

  const handleCancelClick = () => {
    setModal({
      show: false,
      title: '',
      text: '',
    });
  }

  return (
    <main className="p-8 flex flex-col gap-8">
      <Layout.Header text="Edit Book Information" />
      <Book.General book={book} setModal={setModal} />
      <Book.GiveARating />
      <Book.Notes />
      <Buttons.ActionButton
        text="Save Data"
        icon={<Icon path={mdiContentSaveAll} size={1.2} />}
      />
      <UI.CTAModal {...modal} onCancelClick={handleCancelClick} onConfirmClick={handleConfirmClick} />
    </main>
  );
};

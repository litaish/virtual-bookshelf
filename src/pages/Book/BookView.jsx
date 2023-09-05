import { Layout, Buttons, UI } from '../../components/index';
import { Book } from '../index';
import { useLocation, useNavigate } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiContentSaveAll } from '@mdi/js';
import { useState } from 'react';

export const BookView = () => {
  const location = useLocation();
  const book = location.state?.data;
  const navigate = useNavigate();

  const [CTAmodal, setCTAmodal] = useState({
    show: false,
    title: '',
    text: '',
  })

  const [dialogModal, setDialogModal] = useState({
    show: false,
    isError: false,
  });

  const handleRemoveClick = () => {
    setCTAmodal({ 
      show: true, 
      title: "Delete this book?", 
      text: "This book will be permenetly deleted." 
    });
  }

  const handleRemoveConfirmClick = () => {
    setCTAmodal({
      show: false,
      title: '',
      text: '',
    });
    console.log(`Deleted book ${book.id}`);
    navigate("/books");
  }

  const handleRemoveCancelClick = () => {
    setCTAmodal({
      show: false,
      title: '',
      text: '',
    });
  }

  const handleSaveClick = () => {
    setDialogModal({
      show: true,
      isError: true,
    })
  }

  const handleSaveConfirmClick = () => {
    setDialogModal({
      show: false,
      isError: false,
    })
  }

  return (
    <main className="p-8 flex flex-col gap-8">
      <Layout.Header text="Edit Book Information" />
      <Book.General book={book} onRemoveClick={handleRemoveClick} />
      <Book.GiveARating />
      <Book.Notes />
      <Buttons.ActionButton
        onClick={handleSaveClick}
        text="Save Data"
        icon={<Icon path={mdiContentSaveAll} size={1.2} />}
      />
      <UI.CTAModal {...CTAmodal} onCancelClick={handleRemoveCancelClick} onConfirmClick={handleRemoveConfirmClick} />
      <UI.DialogModal {...dialogModal} onConfirmClick={handleSaveConfirmClick}/>
    </main>
  );
};

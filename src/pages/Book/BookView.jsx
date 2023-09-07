import { Layout, Buttons, UI } from '../../components/index';
import { Book } from '../index';
import { useNavigate, useParams } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiContentSaveAll } from '@mdi/js';
import { useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

export const BookView = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { isLoading, data, isError, error } = useQuery('single_book', () => {
    return axios.get(`http://localhost:3030/books/${id}`);
  });

  const book = data?.data;

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
    console.log(`Deleted book ${id}`);
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
    <main className="p-8 flex flex-col gap-8 2xl:px-60">
      <Layout.PrimaryHeader text="Edit Book Information" />

      {isLoading && (
        <div className="flex justify-center items-center mt-32">
          <UI.LoadingSpinner className="w-14 h-14" />
        </div>
      )}

      {isError && <UI.ErrorAlert errorMessage={error.message} />}

      {book && (
        <>
          <Book.General ISBN={book.ISBN} title={book.title} authors={book.authors} genres={book.genres} isRead={book.isRead} imgSrc={book.imgSrc} onRemoveClick={handleRemoveClick} />
          <Book.GiveARating initialRating={book.rating} />
          <Book.Notes initialNote={book.notes} />
          <Buttons.ActionButton
            onClick={handleSaveClick}
            text="Save Data"
            type="button"
            icon={<Icon path={mdiContentSaveAll} size={1.2} />}
          />
        </>
      )}
      
      <UI.CTAModal {...CTAmodal} onCancelClick={handleRemoveCancelClick} onConfirmClick={handleRemoveConfirmClick} />
      <UI.DialogModal {...dialogModal} onConfirmClick={handleSaveConfirmClick} />
    </main>
  );
};

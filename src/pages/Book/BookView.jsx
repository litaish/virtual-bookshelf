import { Layout, Buttons, UI } from '../../components/index';
import { Book } from '../index';
import { useParams } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiContentSaveAll } from '@mdi/js';
import { useQuery } from 'react-query';
import axios from 'axios';
import useCTAModal from '../../hooks/useCTAModal';
import useDialogModal from '../../hooks/useDialogModal';

export const BookView = () => {
  const { id } = useParams();
  const CTAModal = useCTAModal();
  const DialogModal = useDialogModal();

  const { isLoading, data, isError, error } = useQuery('single_book', () => {
    return axios.get(`http://localhost:3030/books/${id}`);
  });

  const book = data?.data;

  const handleRemoveClick = () => CTAModal.open({ title: "Delete this book?", text: "This book will be permenetly deleted." })

  const handleRemoveConfirm = () => {
    console.log(`Confirmed! Removed book ${id}`);
    CTAModal.close();
  }

  const handleRemoveCancel = () => CTAModal.close();

  const handleSaveClick = () => {
    // if success
    // DialogModal.open({ text: "Data saved succesfully!", isErrorModal: false });
    // if error
    // DialogModal.open({ text: "There has been an error trying to complete your request.", isErrorModal: true });
  };

  const handleSaveConfirm = () => DialogModal.close();

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
          <Book.General ISBN={book.ISBN} title={book.title} authors={book.authors} genres={book.genres} isRead={book.isRead} imgSrc={book.imgSrc} onRemoveClick={handleRemoveClick}/>
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
      
      <UI.CTAModal show={CTAModal.show} title={CTAModal.content.title} text={CTAModal.content.text} onCancelClick={handleRemoveCancel} onConfirmClick={handleRemoveConfirm} />

      <UI.DialogModal show={DialogModal.show} text={DialogModal.text} isError={DialogModal.isErrorModal} onConfirmClick={handleSaveConfirm} />
    </main>
  );
};

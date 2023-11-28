import { Layout, Buttons, UI } from '../../components/index';
import { Book } from '../index';
import { useParams } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiContentSaveAll } from '@mdi/js';
import { useCTAModal, useDialogModal } from '../../hooks/index';
import { useState } from 'react';
import useBook from '../../hooks/useBook';
import useDeleteBook from '../../hooks/useDeleteBook';
import useUpdateBook from '../../hooks/useUpdateBook';

export const BookView = () => {
  const { id } = useParams();
  const CTAModal = useCTAModal();
  const DialogModal = useDialogModal();

  const handleDataLoadSuccess = (data) => {
    setBook(data);
  }

  const { data, isLoading, isError, error } = useBook(id, handleDataLoadSuccess);
  const { mutate: deleteBook } = useDeleteBook();
  const { mutate: updateBook } = useUpdateBook()

  const [book, setBook] = useState();

  const handleChangeRead = () => {
    setBook((prev) => ({
      ...prev,
      read: !prev.read,
    }))
  }

  const handleChangeRating = (newRating) => {
    setBook((prev) => ({
      ...prev,
      rating: newRating,
    }));
  }

  const handleChangeNotes = (newNotes) => {
    setBook((prev) => ({
      ...prev,
      notes: newNotes,
    }));
  }

  const handleRemoveClick = () => CTAModal.open({ title: "Delete this book?", text: "This book will be permenetly deleted." })

  const handleRemoveConfirm = () => {
    deleteBook(id);
    console.log(`Confirmed! Removed book ${id}`);
    // check for errors and successs
    CTAModal.close();
  }

  const handleSaveClick = () => {
    updateBook({ id: id, body: book })

    // if success
    // DialogModal.open({ text: "Data saved succesfully!", isErrorModal: false });
    // if error
    // DialogModal.open({ text: "There has been an error trying to complete your request.", isErrorModal: true });
  };

  return (
    <main className="p-8 flex flex-col gap-8 2xl:px-60">
      <Layout.PrimaryHeader text="Edit Book Information" />

      {isLoading && (
        <div className="flex justify-center items-center mt-32">
          <UI.LoadingSpinner className="w-14 h-14" />
        </div>
      )}

      {isError && <UI.ErrorAlert errorMessage={error.message} />}


      {data && (
        <>
          <Book.General ISBN10={book.isbN10} ISBN13={book.isbN13} title={book.title} authors={book.authors} categories={book.categories} read={book.read} imgSrc={book.imgSrc} onReadClick={handleChangeRead} onRemoveClick={handleRemoveClick}/>
          <Book.GiveARating initialRating={book.rating} onChange={handleChangeRating} />
          <Book.Notes initialNote={book.notes} onChange={handleChangeNotes} />
          <Buttons.ActionButton
            onClick={handleSaveClick}
            text="Save Data"
            type="button"
            icon={<Icon path={mdiContentSaveAll} size={1.2} />}
          />
        </>
      )}
      
      <UI.CTAModal show={CTAModal.show} title={CTAModal.content.title} text={CTAModal.content.text} onCancelClick={CTAModal.close} onConfirmClick={handleRemoveConfirm} />
      <UI.DialogModal show={DialogModal.show} text={DialogModal.text} isError={DialogModal.isErrorModal} onConfirmClick={DialogModal.close} />
    </main>
  );
};

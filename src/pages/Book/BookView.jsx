import { Layout, Buttons, UI } from '../../components/index';
import { Book } from '../index';
import { useParams } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiContentSaveAll } from '@mdi/js';
import { useCTAModal, useDialogModal, useBookData } from '../../hooks/index';
import { useState } from 'react';
import { useDeleteBookData, useUpdateBookData } from '../../hooks/useBookData';

export const BookView = () => {
  const { id } = useParams();
  const CTAModal = useCTAModal();
  const DialogModal = useDialogModal();

  const [book, setBook] = useState({});

  const handleDataLoadSuccess = (data) => {
    setBook(data);
  }

  const { isLoading, data, isError, error } = useBookData({ id: id, onSuccess: handleDataLoadSuccess });
  const { mutate: updateBook } = useUpdateBookData();
  const { mutate: deleteBook } = useDeleteBookData();

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
    console.log(`Confirmed! Removed book ${id}`);
    CTAModal.close();
  }

  const handleSaveClick = () => {
    // if success
    // DialogModal.open({ text: "Data saved succesfully!", isErrorModal: false });
    // if error
    // DialogModal.open({ text: "There has been an error trying to complete your request.", isErrorModal: true });
    console.log(book)
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
          <Book.General ISBN10={data.isbN10} ISBN13={data.isbN13} title={data.title} authors={data.authors} categories={data.categories} read={data.read} imgSrc={data.imgSrc} onReadClick={handleChangeRead} onRemoveClick={handleRemoveClick}/>
          <Book.GiveARating initialRating={data.rating} onChange={handleChangeRating} />
          <Book.Notes initialNote={data.notes} onChange={handleChangeNotes} />
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

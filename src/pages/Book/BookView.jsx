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

  const { isLoading, data, isError, error } = useQuery(['single_book', id], () => {
    return axios.get(`http://localhost:3030/books/${id}`);
  },
  {
    select: (data) => {
      const book = data.data;
      return book;
    }
  });

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

      {data && (
        <>
          <Book.General ISBN={data.ISBN} title={data.title} authors={data.authors} genres={data.genres} isRead={data.isRead} imgSrc={data.imgSrc} onRemoveClick={handleRemoveClick}/>
          <Book.GiveARating initialRating={data.rating} />
          <Book.Notes initialNote={data.notes} />
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

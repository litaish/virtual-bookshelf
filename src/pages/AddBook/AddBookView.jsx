import { Layout, Buttons } from "../../components/index";
import { AddBook } from '../index';
import Icon from '@mdi/react';
import { mdiBarcodeScan } from '@mdi/js';
import axios from "axios";
import { useQuery } from "react-query";
import { useState } from "react";
import useCTAModal from "../../hooks/useCTAModal";
import useDialogModal from "../../hooks/useDialogModal";
import { UI } from "../../components/index";

export const AddBookView = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const CTAModal = useCTAModal();
  const DialogModal = useDialogModal();

  const { isLoading, data, isError, error, isFetching, refetch } = useQuery(['google_books_api_search', searchTerm], () => {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${searchTerm}&maxResults=1&key=${import.meta.env.VITE_GOOGLE_BOOKS_API_KEY}`);
  },
    {
      refetchOnWindowFocus: false,
      enabled: !!searchTerm,
      select: (data) => {
        // add filtering and other transformations
        // const bookData = data.data.items[0].volumeInfo;
        return data;
      },
      onSuccess: handleSuccess,
      onError: handleError,
    });

  function handleAddBookConfirm() {
    // on confirm do something like add book
    CTAModal.close();
  }
  
  function handleSearch(newSearchTerm) {
    setSearchTerm(newSearchTerm);
    refetch();
  }

  function handleSuccess(data) {
    // console.log('Perform sideeffect after data fetching - success', data)
    // // check if data is populated
  }

  function handleError(error) {
    console.log('Perform sideeffect after data fetching - failiure', error)
  }

  // if (isLoading || isFetching) {
  //   console.log('is loading or fetchig')
  // }

  return (
    <main className="p-8 flex flex-col gap-8 2xl:px-60">
      <Layout.PrimaryHeader text="Add A Book To Library" />
      <div>
        <Buttons.ActionButton type="button" text="Scan by code" icon={<Icon path={mdiBarcodeScan} size={1.2} />} />
      </div>
      <AddBook.ISBNForm onSearch={handleSearch} />

      <UI.CTAModal show={CTAModal.show} title={CTAModal.content.title} text={CTAModal.content.text} onCancelClick={CTAModal.close} onConfirmClick={handleAddBookConfirm} />
      <UI.DialogModal show={DialogModal.show} text={DialogModal.text} isError={DialogModal.isErrorModal} onConfirmClick={DialogModal.close} />
    </main>
  );
};

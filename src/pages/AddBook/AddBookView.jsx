import { Layout } from "../../components/index";
import { AddBook } from '../index';
import axios from "axios";
import { useQuery, useMutation } from "react-query";
import { useState } from "react";
import useCTAModal from "../../hooks/useCTAModal";
import useDialogModal from "../../hooks/useDialogModal";
import { UI } from "../../components/index";
import { urlBooks } from "../../../endpoints";

export const AddBookView = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const CTAModal = useCTAModal();
  const DialogModal = useDialogModal();

  const { isLoading, isFetching, refetch } = useQuery(['google_books_api_search', searchTerm], () => {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${searchTerm}&maxResults=1&key=${import.meta.env.VITE_GOOGLE_BOOKS_API_KEY}`);
  },
    {
      refetchOnWindowFocus: false,
      enabled: !!searchTerm,
      select: (data) => {
        if (data.data.items) {
          const volumeInfo = data.data.items[0].volumeInfo;
          return {
            ISBN10: volumeInfo?.industryIdentifiers?.[0]?.identifier,
            ISBN13: volumeInfo?.industryIdentifiers?.[1]?.identifier,
            title: volumeInfo?.title,
            authors: volumeInfo?.authors,
            categories: volumeInfo?.categories,
            pageCount: volumeInfo?.pageCount,
            img: volumeInfo?.imageLinks?.thumbnail,
            imgSmall: volumeInfo?.imageLinks?.smallThumnail,
          };
        } else {
          return null;
        }
      },
      onSuccess: handleSuccess,
      onError: handleError,
    });

  function handleAddBook(book) {
    return axios.post(urlBooks, book);
  }

  function handleAddBookConfirm() {
    // logic
    CTAModal.close();
  }

  function handleSearch(newSearchTerm) {
    setSearchTerm(newSearchTerm);
    refetch();
  }

  // Success can mean that a book is found and book data can not be found
  function handleSuccess(data) {
    if (data) {
      CTAModal.open({
        title: "Book found!",
        text: `"${data.title}" has been found. Add to library?`,
      });
    } else {
      DialogModal.open({
        text: "No book has been found by this code. Try a different book.",
        isErrorModal:  true,
      })
    }
  }

  function handleError(error) {
    DialogModal.open({
      text: error.message,
      isErrorModal: true,
    });
  }

  return (
    <main className="p-8 flex flex-col gap-8 2xl:px-60">
      {(isLoading || isFetching) ? (
        <div className="flex justify-center items-center mt-32">
          <UI.LoadingSpinner className="w-14 h-14" />
        </div>
      ) : (
        <>
          <Layout.PrimaryHeader text="Add A Book To Library" />
          <AddBook.BarcodeScannerControl onScan={handleSearch}/>
          <AddBook.ISBNForm onSearch={handleSearch} />
        </>
      )}

      <UI.CTAModal show={CTAModal.show} title={CTAModal.content.title} text={CTAModal.content.text} onCancelClick={CTAModal.close} onConfirmClick={handleAddBookConfirm} />
      <UI.DialogModal show={DialogModal.show} text={DialogModal.text} isError={DialogModal.isErrorModal} onConfirmClick={DialogModal.close} />
    </main>
  );
};

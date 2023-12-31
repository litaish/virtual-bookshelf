import { Layout } from "../../components/index";
import { AddBook } from '../index';
import { useState } from "react";
import { UI } from "../../components/index";
import { useGoogleBooksAPISearch, useCTAModal, useDialogModal } from "../../hooks/index";
import useAddBook from "../../hooks/useAddBook";

export const AddBookView = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const CTAModal = useCTAModal();
  const DialogModal = useDialogModal();

  const { isLoading, isFetching, refetch, data } = useGoogleBooksAPISearch(searchTerm, handleSuccess, handleError); 

  const { mutate: addBook } = useAddBook();

  function handleAddBookConfirm() {
    addBook(data); // Add book (post)
    console.log(data)
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
        text: `"${data.Title}" has been found. Add to library?`,
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

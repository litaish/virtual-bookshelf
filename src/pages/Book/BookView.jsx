import { Layout } from "../../components/index";
import { Book } from "../index";
import { useLocation } from "react-router-dom";

export const BookView = () => {
  const location = useLocation();

  const book = location.state?.data;
  
  return (
    <main className="p-8 flex flex-col gap-8">
      <Layout.Header text='Edit Book Information'/>
      <Book.General book={book} />
    </main>
  );
};

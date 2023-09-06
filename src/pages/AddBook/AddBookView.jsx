import { Layout, Buttons } from "../../components/index";
import { AddBook } from '../index';
import Icon from '@mdi/react';
import { mdiBarcodeScan } from '@mdi/js';

export const AddBookView = () => {
  return (
    <main className="p-8 flex flex-col gap-8 2xl:px-60">
      <Layout.PrimaryHeader text="Add A Book To Library" />
      <div>
        <Buttons.ActionButton type="button" text="Scan by code" icon={<Icon path={mdiBarcodeScan} size={1.2} />} />
      </div>
      <AddBook.ISBNForm />
    </main>
  );
};

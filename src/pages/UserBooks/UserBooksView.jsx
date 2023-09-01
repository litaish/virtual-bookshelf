import { Header } from "../../components/ui";
import { PrimaryButton } from "../../components/buttons";
import { Book } from "./Book";
import Icon from '@mdi/react';
import { mdiPlus } from '@mdi/js';
import styles from './UserBooks.module.css';

export const UserBooksView = () => {
  return (
    <main className="p-8">
      <PrimaryButton text='Add new book' icon={<Icon path={mdiPlus} size={1.5} />} />
      <Header text='My Books' bookCount={100} className='mt-4' />
      <div>SEARCH BAR HERE</div>
      <div className={`${styles.grid_books} mt-8`}>
      <Book 
        id='1' 
        imgSrc='https://books.google.lv/books/publisher/content?id=vnbgDwAAQBAJ&hl=lv&pg=PA4&img=1&zoom=3&bul=1&sig=ACfU3U1lRTcuSZw36QN296qN1nN4VvWxdg&w=1280'
        title='Harry Potter: Exploring Hogwarts'
        author='Jody Revenson'
        rating={4}
        isRead={false}
         />
                 <Book 
        id='1' 
        imgSrc='https://books.google.lv/books/publisher/content?id=vnbgDwAAQBAJ&hl=lv&pg=PA4&img=1&zoom=3&bul=1&sig=ACfU3U1lRTcuSZw36QN296qN1nN4VvWxdg&w=1280'
        title='Harry Potter: Exploring Hogwarts'
        author='Jody Revenson'
        rating={4}
        isRead={true}
         />
                 <Book 
        id='1' 
        imgSrc='https://books.google.lv/books/publisher/content?id=vnbgDwAAQBAJ&hl=lv&pg=PA4&img=1&zoom=3&bul=1&sig=ACfU3U1lRTcuSZw36QN296qN1nN4VvWxdg&w=1280'
        title='Harry Potter: Exploring Hogwarts'
        author='Jody Revenson'
        rating={4}
        isRead={false}
         />
      </div>
    </main>
  );
};

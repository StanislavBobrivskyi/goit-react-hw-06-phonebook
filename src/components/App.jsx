import { ContactForm } from './ContactForm/ContactForm';
import { ContactsBook } from './App.styled';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { ToastContainer, Zoom } from 'react-toastify';

// import { useLocalStorage } from './hooks/useLocalStorage';
import {} from './ContactList/ContactList.styled';

export const App = () => {
  return (
    <>
      <ContactsBook>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </ContactsBook>
      <ToastContainer transition={Zoom} />
    </>
  );
};

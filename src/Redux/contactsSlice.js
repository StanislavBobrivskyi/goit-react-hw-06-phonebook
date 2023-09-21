import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import toast from 'react-hot-toast';

const slice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
  },
  reducers: {
    addNewContact(state, action) {
      state.items.push(action.payload);
    },
    removeContact(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
      toast.success(<div>Contact deleted!</div>, {
        duration: 4000,
        icon: '✅',
      });
    },
    updateContact(state, action) {
      const updatedContact = action.payload;
      const currentContact = state.items.findIndex(
        contact => contact.id === updatedContact.id
      );

      if (currentContact !== -1) {
        state.items[currentContact] = updatedContact;
      }
    },
  },
});

export const contactsReducer = slice.reducer;

const persistConfig = {
  key: 'root',
  storage,
};

export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsReducer
);

export const { addNewContact, removeContact, updateContact } = slice.actions;

// Selectors

export const updatePhonebook = state => state.contacts.items;

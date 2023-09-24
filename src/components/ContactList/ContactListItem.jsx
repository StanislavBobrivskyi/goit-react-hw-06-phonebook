import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { ItemStyle, DeleteBtn } from './ContactList.styled';

export const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <ItemStyle>
      {name}: {number}
      <DeleteBtn onClick={() => dispatch(deleteContact(id))}>Delete</DeleteBtn>
    </ItemStyle>
  );
};

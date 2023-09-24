import { useDispatch } from 'react-redux';
import { getVisibleContacts } from 'filterSlice';
import { InputStyled, Label } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <Label>
      Find contact by name
      <InputStyled
        type="text"
        name="text"
        onChange={evt => dispatch(getVisibleContacts(evt.target.value))}
      />
    </Label>
  );
};

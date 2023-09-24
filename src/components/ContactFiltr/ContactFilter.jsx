import { useDispatch } from 'react-redux';
import { getVisibleContacts } from 'redux/filterSlice';
import { InputStyled, Wrapper } from './ContactFilter.stelyd';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      Find contact by name
      <InputStyled
        type="text"
        name="text"
        onChange={evt => dispatch(getVisibleContacts(evt.target.value))}
      />
    </Wrapper>
  );
};

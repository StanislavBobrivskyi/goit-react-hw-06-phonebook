// import React from 'react';
// import { InputStyled, Wrapper } from './ContactFilter.stelyd';
// export function ContactFilter({ filter, onChangeFilter }) {
//   return (
//     <Wrapper>
//       <p>Find contacts by name</p>
//       <InputStyled type="text" value={filter} onChange={onChangeFilter} />
//     </Wrapper>
//   );
// }

// ContactFilter.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from './contactSlice';

function ContactFilter() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);

  const handleChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <input
      type="text"
      placeholder="Find contacts by name"
      value={filter}
      onChange={handleChange}
    />
  );
}

export default ContactFilter;

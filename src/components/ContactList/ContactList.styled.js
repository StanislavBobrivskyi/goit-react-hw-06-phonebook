import styled from 'styled-components';

export const DeleteAllBtn = styled.button`
  width: 200px;
  padding: 4px;
  margin-bottom: 10px;
  margin-left: 10px;
  height: 100%;
  font-size: 12px;
  border-radius: 33.5px;
  background: #3cb3ab;
  border: none;
  &:hover {
    color: #fff;
    background-color: #147a73;
    box-shadow: 1px 2px 6px 0px rgba(33, 83, 60, 0.7);
  }
  box-shadow: 0 2px 4px rgba(33, 83, 60, 0.5);
`;

export const ListWrapper = styled.ul`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  align-items: left;
  list-style: none;
  gap: 10px;
`;

export const ListItem = styled.li`
  margin-bottom: 12px;
  color: #3119cd;
`;

import styled from 'styled-components';
import { Field, Form, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 12px;
  width: 400px;
  border: 1px solid #000;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 20px;
`;

export const StyledField = styled(Field)`
  padding: 4px;
  width: 180px;
  box-shadow: inset 2px 2px rgba(0, 0, 0, 0.2);
`;

export const Button = styled.button`
  width: 100px;
`;

export const StyledError = styled(ErrorMessage)`
  text-align: center;
  max-width: 190px;
  color: red;
  box-shadow: 0 0 10px #ff0000;
`;

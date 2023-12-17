import { Field, Form } from 'formik';
import styled from 'styled-components';

export const SearchForm = styled(Form)`
  margin: 0 auto;
  display: flex;
  width: 40%;
  border: 1px solid #87ceeb;
  border-top: none;
`;

export const SearchFormButton = styled.button`
  opacity: 0.5;
  transition: opacity 250ms linear;
  cursor: pointer;
  background-color: #87ceeb;

  &:hover {
    opacity: 1;
  }
`;

export const SearchInput = styled(Field)`
  display: inline-block;
  width: 100%;
  font-size: 24px;
  border: none;
`;

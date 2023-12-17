import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Formik } from 'formik';
import { PiFilmReelLight } from 'react-icons/pi';
import { SearchForm, SearchFormButton, SearchInput } from './Searchbar.styled';

export const Searchbar = () => {
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState('');

  const handleChange = ({ target: { value } }) => {
    if (!value) setSearchParams({});
    setQuery(value);
  };

  const handleSearch = () => {
    if (query === '') {
      setError('Please, enter request');
      return;
    }
    setSearchParams({ query: query });
    setError('');
  };

  useEffect(() => {
    const value = searchParams.get('query');
    if (value) {
      setQuery(value);
    }
  }, [searchParams]);

  return (
    <>
      <Formik initialValues={{ searchQuery: '' }} onSubmit={handleSearch}>
        <SearchForm>
          <SearchInput
            value={query}
            name="searchQuery"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Enter the title"
            onChange={handleChange}
          />

          <SearchFormButton type="submit">
            <PiFilmReelLight />
            <p>Search</p>
          </SearchFormButton>
        </SearchForm>
      </Formik>

      {error === '' ? '' : error}
    </>
  );
};

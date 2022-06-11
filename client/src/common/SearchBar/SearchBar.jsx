import React, { useRef, useLayoutEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchBarWrapper } from './SearchBar.style.jsx';
import useWordStore from '../../store/useWordStore.jsx';

const SearchBar = () => {
  const word = useWordStore((state) => state.word);
  const wordRef = useRef();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState(word || '');

  useLayoutEffect(() => {
    setSearchQuery(word);
  }, [word]);

  const searchWord = (e) => {
    e.preventDefault();
    searchQuery && navigate(`/${searchQuery}`);
  };

  const handleChange = (e) => {
    const val = e.target.value;
    const onlyAlphabets = /^[a-zA-Z]+$/gi;

    setSearchQuery(val);
  };

  return (
    <SearchBarWrapper>
      <form onSubmit={searchWord}>
        <input
          ref={wordRef}
          type="text"
          onChange={handleChange}
          value={searchQuery}
        />
      </form>
    </SearchBarWrapper>
  );
};

export default SearchBar;

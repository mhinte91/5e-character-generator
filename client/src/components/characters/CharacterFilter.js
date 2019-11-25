import React, { useContext, useRef, useEffect } from 'react';
import CharacterContext from '../../context/character/characterContext';

const CharacterFilter = () => {
  const characterContext = useContext(CharacterContext);
  const text = useRef('');

  const { filterCharacters, clearFilter, filtered } = characterContext;

  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  });

  const onChange = e => {
    if (text.current.value !== '') {
      filterCharacters(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form>
      <input
        ref={text}
        type='text'
        placeholder='Character Search...'
        onChange={onChange}
      />
    </form>
  );
};

export default CharacterFilter;

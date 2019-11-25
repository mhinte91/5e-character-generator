import React, { Fragment, useContext, useEffect } from 'react';
import CharacterItem from './CharacterItem';
import Spinner from '../layout/Spinner';

import CharacterContext from '../../context/character/characterContext';

const Characters = () => {
  const characterContext = useContext(CharacterContext);

  const { characters, filtered, getCharacters, loading } = characterContext;

  useEffect(() => {
    getCharacters();
    // eslint-disable-next-line
  }, []);

  if (characters !== null && characters.length === 0 && !loading) {
    return <h4>You have no characters!</h4>;
  }

  return (
    <Fragment>
      {characters !== null && !loading ? (
        <Fragment>
          {filtered !== null
            ? filtered.map(character => (
                <CharacterItem key={character._id} character={character} />
              ))
            : characters.map(character => (
                <CharacterItem key={character._id} character={character} />
              ))}
        </Fragment>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

export default Characters;

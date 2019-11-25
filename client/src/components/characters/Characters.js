import React, { Fragment, useContext } from 'react';
import CharacterItem from './CharacterItem';
import CharacterContext from '../../context/character/characterContext';

const Characters = () => {
  const characterContext = useContext(CharacterContext);

  const { characters, filtered } = characterContext;

  if (characters.length === 0) {
    return <h4>You have no characters!</h4>;
  }

  return (
    <Fragment>
      {filtered !== null
        ? filtered.map(character => (
            <CharacterItem key={character.id} character={character} />
          ))
        : characters.map(character => (
            <CharacterItem key={character.id} character={character} />
          ))}
    </Fragment>
  );
};

export default Characters;

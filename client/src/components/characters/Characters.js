import React, { Fragment, useContext } from 'react';
import CharacterItem from './CharacterItem';
import CharacterContext from '../../context/character/characterContext';

const Characters = () => {
  const characterContext = useContext(CharacterContext);

  const { characters } = characterContext;

  return (
    <Fragment>
      {characters.map(character => (
        <CharacterItem key={character.id} character={character} />
      ))}
    </Fragment>
  );
};

export default Characters;

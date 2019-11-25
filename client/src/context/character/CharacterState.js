import React, { useReducer } from 'react';
import uuid from 'uuid';
import CharacterContext from './characterContext';
import characterReducer from './characterReducer';
import {
  ADD_CHARACTER,
  DELETE_CHARACTER,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CHARACTER,
  FILTER_CHARACTERS,
  CLEAR_FILTER
} from '../types';

const CharacterState = props => {
  const initialState = {
    characters: [
      {
        id: 1,
        name: 'Merik',
        race: 'Half-Orc',
        heroClass: 'Fighter',
        bio: 'Strongest Fighter in the West...',
        strength: 18,
        dexterity: 12,
        constitution: 14,
        intelligence: 10,
        wisdom: 14,
        charisma: 13,
        hitpoints: 56,
        experience: 14000
      },
      {
        id: 2,
        name: 'Edward Hamilton',
        race: 'Human',
        heroClass: 'Bard',
        bio: 'An ambitious entreprenuer',

        strength: 12,
        dexterity: 13,
        constitution: 11,
        intelligence: 16,
        wisdom: 13,
        charisma: 18,
        hitpoints: 40,
        experience: 13900
      },
      {
        id: 3,
        name: 'Frog Onleif',
        race: 'Tabaxi',
        heroClass: 'Druid',
        bio: 'A shapeshifting perveyor of ancient artifacts',

        strength: 10,
        dexterity: 12,
        constitution: 14,
        intelligence: 17,
        wisdom: 16,
        charisma: 16,
        hitpoints: 45,
        experience: 15000
      }
    ],
    current: null,
    filtered: null
  };

  const [state, dispatch] = useReducer(characterReducer, initialState);

  // Add Character
  const addCharacter = character => {
    character.id = uuid.v4();
    dispatch({ type: ADD_CHARACTER, payload: character });
  };

  // Delete Character
  const deleteCharacter = id => {
    dispatch({ type: DELETE_CHARACTER, payload: id });
  };
  // Set Current Character
  const setCurrent = character => {
    dispatch({ type: SET_CURRENT, payload: character });
  };
  // Clear Current Character
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };
  // Update Character
  const updateCharacter = character => {
    dispatch({ type: UPDATE_CHARACTER, payload: character });
  };
  // Filter Characters
  const filterCharacters = text => {
    dispatch({ type: FILTER_CHARACTERS, payload: text });
  };
  // Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <CharacterContext.Provider
      value={{
        characters: state.characters,
        current: state.current,
        filtered: state.filtered,
        addCharacter,
        deleteCharacter,
        setCurrent,
        clearCurrent,
        updateCharacter,
        filterCharacters,
        clearFilter
      }}
    >
      {props.children}
    </CharacterContext.Provider>
  );
};

export default CharacterState;

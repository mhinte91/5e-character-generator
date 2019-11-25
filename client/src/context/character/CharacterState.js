import React, { useReducer } from 'react';
import axios from 'axios';
import CharacterContext from './characterContext';
import characterReducer from './characterReducer';
import {
  ADD_CHARACTER,
  DELETE_CHARACTER,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CHARACTER,
  FILTER_CHARACTERS,
  CLEAR_FILTER,
  CHARACTER_ERROR
} from '../types';

const CharacterState = props => {
  const initialState = {
    characters: [],
    current: null,
    filtered: null,
    error: null
  };

  const [state, dispatch] = useReducer(characterReducer, initialState);

  // Add Character
  const addCharacter = async character => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.post('/api/characters', character, config);

      dispatch({ type: ADD_CHARACTER, payload: res.data });
    } catch (err) {
      dispatch({ type: CHARACTER_ERROR, payload: err.response.msg });
    }
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
        error: state.error,
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

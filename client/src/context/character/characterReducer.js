import {
  ADD_CHARACTER,
  DELETE_CHARACTER,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CHARACTER,
  FILTER_CHARACTERS,
  CLEAR_FILTER
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case ADD_CHARACTER:
      return {
        ...state,
        characters: [...state.characters, action.payload]
      };
    case UPDATE_CHARACTER:
      return {
        ...state,
        characters: state.characters.map(character =>
          character.id === action.payload.id ? action.payload : character
        )
      };
    case DELETE_CHARACTER:
      return {
        ...state,
        characters: state.characters.filter(
          character => character.id !== action.payload
        )
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      };
    case FILTER_CHARACTERS:
      return {
        ...state,
        filtered: state.characters.filter(character => {
          const regex = new RegExp(`${action.payload}`, 'gi');
          return (
            character.name.match(regex) ||
            character.race.match(regex) ||
            character.heroClass.match(regex)
          );
        })
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null
      };
    default:
      return state;
  }
};

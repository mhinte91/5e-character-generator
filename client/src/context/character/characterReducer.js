import {
  ADD_CHARACTER,
  DELETE_CHARACTER,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CHARACTER,
  FILTER_CHARACTERS,
  CLEAR_FILTER,
  CHARACTER_ERROR,
  GET_CHARACTERS,
  CLEAR_CHARACTERS
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_CHARACTERS:
      return {
        ...state,
        characters: action.payload,
        loading: false
      };
    case ADD_CHARACTER:
      return {
        ...state,
        characters: [action.payload, ...state.characters],
        loading: false
      };
    case UPDATE_CHARACTER:
      return {
        ...state,
        characters: state.characters.map(character =>
          character._id === action.payload._id ? action.payload : character
        ),
        loading: false
      };
    case DELETE_CHARACTER:
      return {
        ...state,
        characters: state.characters.filter(
          character => character._id !== action.payload
        ),
        loading: false
      };
    case CLEAR_CHARACTERS:
      return {
        ...state,
        characters: null,
        filtered: null,
        error: null,
        current: null
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
    case CHARACTER_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

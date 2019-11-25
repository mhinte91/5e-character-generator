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
    default:
      return state;
  }
};

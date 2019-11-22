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
    default:
      return state;
  }
};

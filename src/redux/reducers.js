import { ADD_SCORE, RESET_SCORES } from './actions';

const initialState = {
  scores: []
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SCORE:
      return {
        ...state,
        scores: [...state.scores, action.payload]
      };
    case RESET_SCORES:
      return {
        ...state,
        scores: []
      };
    default:
      return state;
  }
};

export default gameReducer;

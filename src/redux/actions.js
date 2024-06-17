export const ADD_SCORE = 'ADD_SCORE';
export const RESET_SCORES = 'RESET_SCORES';

export const addScore = score => ({
  type: ADD_SCORE,
  payload: score
});

export const resetScores = () => ({
  type: RESET_SCORES
});

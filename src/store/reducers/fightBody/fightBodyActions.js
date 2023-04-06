import { ADD_BODY_COLOR, RM_BODY_COLOR } from './fightBodyActionsType';

export const addFightBodyColorActions = payload => ({
  type: ADD_BODY_COLOR,
  payload,
});
export const removeFightBodyColorActions = payload => ({
  type: RM_BODY_COLOR,
  payload,
});

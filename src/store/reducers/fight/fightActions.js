import {
  RM_ATTACK,
  RM_DEFENCE,
  SET_ATTACK,
  SET_DEFENCE,
  SET_FIGHT_ACTIONS,
} from './fightActionsType';

export const setFightActions = payload => ({
  type: SET_FIGHT_ACTIONS,
  payload,
});
export const setAttack = payload => ({
  type: SET_ATTACK,
  payload,
});
export const setDefence = payload => ({
  type: SET_DEFENCE,
  payload,
});
export const removeAttack = payload => ({
  type: RM_ATTACK,
  payload,
});
export const removeDefence = payload => ({
  type: RM_DEFENCE,
  payload,
});

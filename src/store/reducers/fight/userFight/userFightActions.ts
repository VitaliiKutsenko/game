import { UserFightActionTypes } from '@src/store/reducers/fight/userFight/userFightActionTypes';

export const clearUserFightState = (payload = null) => ({
  type: UserFightActionTypes.CLEAR_USER_FIGHT_STATE,
  payload,
});
export const setAttack = payload => ({
  type: UserFightActionTypes.SET_ATTACK,
  payload,
});

export const removeAttack = payload => ({
  type: UserFightActionTypes.RM_ATTACK,
  payload,
});
export const setDefence = payload => ({
  type: UserFightActionTypes.SET_DEFENCE,
  payload,
});
export const setUserReady = payload => ({
  type: UserFightActionTypes.SET_USER_READY,
  payload,
});

export const removeDefence = payload => ({
  type: UserFightActionTypes.RM_DEFENCE,
  payload,
});

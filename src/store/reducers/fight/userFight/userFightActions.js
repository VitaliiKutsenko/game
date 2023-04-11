export const SET_ATTACK = 'SET_ATTACK';
export const RM_ATTACK = 'RM_ATTACK';

export const SET_DEFENCE = 'SET_DEFENCE';
export const RM_DEFENCE = 'RM_DEFENCE';
export const SET_USER_READY = 'SET_USER_READY';

export const CLEAR_USER_FIGHT_STATE = 'CLEAR_USER_FIGHT_STATE';
export const clearUserFightState = payload => ({
  type: CLEAR_USER_FIGHT_STATE,
  payload,
});
export const setAttack = payload => ({
  type: SET_ATTACK,
  payload,
});

export const removeAttack = payload => ({
  type: RM_ATTACK,
  payload,
});
export const setDefence = payload => ({
  type: SET_DEFENCE,
  payload,
});
export const setUserReady = payload => ({
  type: SET_USER_READY,
  payload,
});

export const removeDefence = payload => ({
  type: RM_DEFENCE,
  payload,
});

export const SET_USER_LOG = 'SET_USER_LOG';
export const SET_ENEMY_LOG = 'SET_ENEMY_LOG';

export const setUserLog = payload => ({
  type: SET_USER_LOG,
  payload,
});

export const setEnemyLog = payload => ({
  type: SET_ENEMY_LOG,
  payload,
});

export const SET_ENEMY_ATTACK = 'SET_ENEMY_ATTACK';
export const SET_ENEMY_DEFENCE = 'SET_ENEMY_DEFENCE';

export const SET_ENEMY_READY = 'SET_ENEMY_READY';

export const CLEAR_ENEMY_FIGHT_STORE = 'CLEAR_ENEMY_FIGHT_STORE';

export const clearEnemyFightStore = payload => ({
  type: CLEAR_ENEMY_FIGHT_STORE,
  payload,
});
export const setEnemyReady = payload => ({
  type: SET_ENEMY_READY,
  payload,
});
export const setEnemyAttack = payload => ({
  type: SET_ENEMY_ATTACK,
  payload,
});

export const setEnemyDefence = payload => ({
  type: SET_ENEMY_DEFENCE,
  payload,
});

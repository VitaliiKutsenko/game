import { EnemyFightActionTypes } from '@src/store/reducers/fight/enemyFight/enemyFightActionTypes';

export const clearEnemyFightStore = payload => ({
  type: EnemyFightActionTypes.CLEAR_ENEMY_FIGHT_STORE,
  payload,
});
export const setEnemyReady = payload => ({
  type: EnemyFightActionTypes.SET_ENEMY_READY,
  payload,
});
export const setEnemyAttack = payload => ({
  type: EnemyFightActionTypes.SET_ENEMY_ATTACK,
  payload,
});

export const setEnemyDefence = payload => ({
  type: EnemyFightActionTypes.SET_ENEMY_DEFENCE,
  payload,
});

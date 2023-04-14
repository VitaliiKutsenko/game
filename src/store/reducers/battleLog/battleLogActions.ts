import { BattleLogActions } from '@src/store/reducers/battleLog/battleLogActionTypes';

export const setUserLog = payload => ({
  type: BattleLogActions.SET_USER_LOG,
  payload,
});

export const setEnemyLog = payload => ({
  type: BattleLogActions.SET_ENEMY_LOG,
  payload,
});

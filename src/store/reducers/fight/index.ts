import { combineReducers } from 'redux';

import { enemyFight } from '@src/store/reducers/fight/enemyFight/enemyFightReducer';
import { userFight } from '@src/store/reducers/fight/userFight/userFightReducer';

export const fight = combineReducers({
  user: userFight,
  enemy: enemyFight,
});

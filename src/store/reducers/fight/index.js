import { combineReducers } from 'redux';

import { userFight } from '@src/store/reducers/fight/userFight/userFightReducer';
import { enemyFight } from '@src/store/reducers/fight/enemyFight/enemyFightReducer';

export const fight = combineReducers({
  user: userFight,
  enemy: enemyFight,
});

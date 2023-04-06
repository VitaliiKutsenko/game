import { combineReducers } from 'redux';
import { baseParams } from './reducers/baseParams/baseParamsReducer';
import { skills } from './reducers/skills/skillsReducer';
import { championsParams } from './reducers/baseOptions/baseOptionsReducer';
import { heroes } from './reducers/heroes/heroesReducer';
import { styles } from './reducers/styles/stylesReducer';
import { user } from './reducers/user/userReducer';
import { fight } from './reducers/fight/fightReducer';
import { fightBody } from './reducers/fightBody/fightBodyReducer';

export const rootReducer = combineReducers({
  championsParams,
  baseParams,
  skills,
  heroes,
  styles,
  user,
  fight,
  fightBody,
});

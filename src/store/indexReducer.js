import { combineReducers } from 'redux';
import { baseParams } from './reducers/baseParams/baseParamsReducer';
import { skills } from './reducers/skills/skillsReducer';
import { championsParams } from './reducers/baseOptions/baseOptionsReducer';
import { heroes } from './reducers/heroes/heroesReducer';
import { styles } from './reducers/styles/stylesReducer';
import { user } from './reducers/user/userReducer';

export const rootReducer = combineReducers({
  championsParams,
  baseParams,
  skills,
  heroes,
  styles,
  user,
});

import { combineReducers } from 'redux';
import { baseParams } from './reducers/capabilities/baseParams/baseParamsReducer';
import { skills } from './reducers/capabilities/skills/skillsReducer';
import { championsParams } from './reducers/capabilities/baseOptions/baseOptionsReducer';
import { heroes } from './reducers/styles/heroes/heroesReducer';
import { styles } from './reducers/styles/stylesReducer';
import { user } from './reducers/user/userReducer';
import { fightBody } from './reducers/styles/fightBody/fightBodyReducer';
import { battleLog } from '@src/store/reducers/battleLog/battleLog';
import { capabilities } from '@src/store/reducers/capabilities';
import { fight } from '@src/store/reducers/fight';

export const rootReducer = combineReducers({
  capabilities,
  fight,
  heroes,
  styles,
  user,
  fightBody,
  battleLog,
});

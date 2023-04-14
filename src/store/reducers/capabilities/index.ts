import { combineReducers } from 'redux';
import { baseSkills } from '@src/store/reducers/capabilities/baseSkills/skillsReducer';
import { baseParams } from '@src/store/reducers/capabilities/baseParams/baseParamsReducer';
import { baseOptions } from '@src/store/reducers/capabilities/baseOptions/baseOptionsReducer';

export const capabilities = combineReducers({
  baseSkills,
  baseParams,
  baseOptions,
});

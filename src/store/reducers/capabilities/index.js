import { combineReducers } from 'redux';
import { skills } from '@src/store/reducers/capabilities/skills/skillsReducer';
import { baseParams } from '@src/store/reducers/capabilities/baseParams/baseParamsReducer';
import { baseOptions } from '@src/store/reducers/capabilities/baseOptions/baseOptionsReducer';

export const capabilities = combineReducers({
  skills,
  baseParams,
  baseOptions,
});

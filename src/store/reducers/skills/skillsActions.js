import { ADD_SKILL_POINT, REMOVE_SKILL_POINT, SET_SKILL } from './skillActionsType';

export const setSkill = payload => ({
  type: SET_SKILL,
  payload,
});

export const addSkillPoint = payload => ({
  type: ADD_SKILL_POINT,
  payload,
});
export const removeSkillPoint = payload => ({
  type: REMOVE_SKILL_POINT,
  payload,
});

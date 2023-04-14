import { SkillActionsType } from './skillActionsType';

export const setSkill = payload => ({
  type: SkillActionsType.SET_SKILL,
  payload,
});

export const addSkillPoint = payload => ({
  type: SkillActionsType.ADD_SKILL_POINT,
  payload,
});
export const removeSkillPoint = payload => ({
  type: SkillActionsType.REMOVE_SKILL_POINT,
  payload,
});

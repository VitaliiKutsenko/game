import { createSelector } from 'reselect';

export const baseParamsStore = store => store.capabilities.baseParams || [];
export const skillsStore = store => store.capabilities.skills.chosenSkill || '';

export const baseParamsSelector = createSelector(
  [baseParamsStore, skillsStore],
  (baseParamsStore, skillsStore) => {
    const { baseParams = [] } = baseParamsStore;

    return {
      chosenSkill: skillsStore,
      baseParameters: baseParams.map(item => {
        return { ...item };
      }),
    };
  }
);

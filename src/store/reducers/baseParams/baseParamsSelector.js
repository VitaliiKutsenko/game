import { createSelector } from 'reselect';

export const baseParamsStore = store => store.baseParams || [];
export const baseParamsStyleStore = store => store.styles.baseParamStyle || [];
export const skillsStore = store => store.skills.chosenSkill || '';

export const baseParamsSelector = createSelector(
  [baseParamsStore, baseParamsStyleStore, skillsStore],
  (baseParamsStore, baseParamsStyleStore, skillsStore) => {
    const { baseParams = [] } = baseParamsStore;

    return {
      chosenSkill: skillsStore,
      baseParameters: baseParams.map(item => {
        return {
          ...item,
          ...baseParamsStyleStore[item.type],
        };
      }),
    };
  }
);

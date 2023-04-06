import { createSelector } from 'reselect';

export const skillsStore = store => store.skills || [];
export const skillsStyleStore = store => store.styles || [];

const skillsLevelCalc = (item, skillsLevel) => {
  if (item.skillPoint < 20) {
    return skillsLevel[0];
  } else if (item.skillPoint >= 20 && item.skillPoint < 40) {
    return skillsLevel[1];
  } else if (item.skillPoint >= 40 && item.skillPoint < 60) {
    return skillsLevel[2];
  } else if (item.skillPoint >= 60 && item.skillPoint < 80) {
    return skillsLevel[3];
  } else if (item.skillPoint >= 80 && item.skillPoint <= 100) {
    return skillsLevel[4];
  }
};

export const skillsSelector = createSelector(
  [skillsStore, skillsStyleStore],
  (skillsStore, skillsStyleStore) => {
    const { chosenSkill } = skillsStore;
    const { skillsStyle, baseParamStyle } = skillsStyleStore;

    if (chosenSkill) {
      return {
        ...skillsStore[chosenSkill],
        color: baseParamStyle[chosenSkill].color,
        skills: skillsStore[chosenSkill]['skills'].map(item => {
          return {
            ...item,
            ...skillsStyleStore.skillsStyle[item.type],
            skillsLevel: skillsLevelCalc(item, skillsStyle.skillsLevel),
          };
        }),
      };
    }

    return skillsStore;
  }
);

import { updatePointInStates } from './skillServices';
import { SkillActionsType } from '@src/store/reducers/capabilities/baseSkills/skillActionsType';

const initialState = {
  strength: {
    skills: [
      {
        type: 'attack',
        skillPoint: 0,
      },
    ],
  },
  agility: {
    skills: [
      {
        type: 'stealth',
        skillPoint: 0,
      },
      {
        type: 'archery',
        skillPoint: 0,
      },
    ],
  },
  intelligence: {
    skills: [
      {
        type: 'educability',
        skillPoint: 0,
      },
      {
        type: 'survival',
        skillPoint: 0,
      },
      {
        type: 'medicine',
        skillPoint: 0,
      },
    ],
  },
  charisma: {
    skills: [
      {
        type: 'intimidation',
        skillPoint: 0,
      },
      {
        type: 'insight',
        skillPoint: 0,
      },
      {
        type: 'appearance',
        skillPoint: 0,
      },
      {
        type: 'manipulation',
        skillPoint: 0,
      },
    ],
  },
  defaultSkill: '',
};

export const baseSkills = (state = initialState, { type, payload }) => {
  switch (type) {
    case SkillActionsType.SET_SKILL:
      return {
        ...state,
        defaultSkill: payload,
      };

    case SkillActionsType.ADD_SKILL_POINT:
      return {
        ...state,
        ...updatePointInStates(payload, state, 'add'),
      };

    case SkillActionsType.REMOVE_SKILL_POINT:
      return {
        ...state,
        ...updatePointInStates(payload, state, 'remove'),
      };

    default:
      return state;
  }
};

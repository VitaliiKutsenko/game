import { ADD_SKILL_POINT, REMOVE_SKILL_POINT, SET_SKILL } from './skillActionsType';

import { updatePointInStates } from './skillServices';

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

  chosenSkill: '',
};

export const skills = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_SKILL:
      return {
        ...state,
        chosenSkill: payload,
      };

    case ADD_SKILL_POINT:
      return {
        ...state,
        ...updatePointInStates(payload, state, 'add'),
      };

    case REMOVE_SKILL_POINT:
      return {
        ...state,
        ...updatePointInStates(payload, state, 'remove'),
      };

    default:
      return state;
  }
};

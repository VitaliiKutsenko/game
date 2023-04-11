import { ADD_BODY_COLOR, RM_BODY_COLOR } from './fightBodyActionsType';
import Head from '@public/svg/humanBody/head.svg';
import Chest from '@public/svg/humanBody/cheast.svg';
import LeftHands from '@public/svg/humanBody/left_hend.svg';
import RightHands from '@public/svg/humanBody/right_hend.svg';
import LeftLegs from '@public/svg/humanBody/left_legs.svg';
import RightLegs from '@public/svg/humanBody/right_legs.svg';
import Stomach from '@public/svg/humanBody/stomach.svg';

const initialState = {
  bodySchema: [
    {
      type: 'head',
      svg: Head,
      title: 'Голова',
      attackActive: false,
      defenceActive: false,
    },
    {
      type: 'chest',
      svg: Chest,
      title: 'Грудь',
      attackActive: false,
      defenceActive: false,
    },
    {
      type: 'stomach',
      svg: Stomach,
      title: 'Торс',
      attackActive: false,
      defenceActive: false,
    },
    {
      type: 'rightHands',
      svg: RightHands,
      title: 'Правая рука',
      attackActive: false,
      defenceActive: false,
    },
    {
      type: 'leftHands',
      svg: LeftHands,
      title: 'Левая рука',
      attackActive: false,
      defenceActive: false,
    },
    {
      type: 'rightLegs',
      svg: RightLegs,
      title: 'Правая нога',
      attackActive: false,
      defenceActive: false,
    },
    {
      type: 'leftLegs',
      svg: LeftLegs,
      title: 'Левая нога',
      attackActive: false,
      defenceActive: false,
    },
  ],
};

export const fightBody = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_BODY_COLOR:
      return {
        ...state,
        attack: [...state.attack, payload],
      };

    case RM_BODY_COLOR:
      return {
        ...state,
        attack: [...state.attack.filter(item => item.title !== payload.title)],
      };

    default:
      return state;
  }
};

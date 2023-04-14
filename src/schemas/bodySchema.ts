import Head from '@public/svg/humanBody/head.svg';
import Chest from '@public/svg/humanBody/cheast.svg';
import LeftHands from '@public/svg/humanBody/left_hend.svg';
import RightHands from '@public/svg/humanBody/right_hend.svg';
import LeftLegs from '@public/svg/humanBody/left_legs.svg';
import RightLegs from '@public/svg/humanBody/right_legs.svg';
import Stomach from '@public/svg/humanBody/stomach.svg';

const bodySchema = {
  bodySchema: [
    {
      type: 'head',
      svg: Head,
      title: 'Голова',
    },
    {
      type: 'chest',
      svg: Chest,
      title: 'Грудь',
    },
    {
      type: 'stomach',
      svg: Stomach,
      title: 'Торс',
    },
    {
      type: 'rightHands',
      svg: RightHands,
      title: 'Правая рука',
    },
    {
      type: 'leftHands',
      svg: LeftHands,
      title: 'Левая рука',
    },
    {
      type: 'rightLegs',
      svg: RightLegs,
      title: 'Правая нога',
    },
    {
      type: 'leftLegs',
      svg: LeftLegs,
      title: 'Левая нога',
    },
  ],
};

import Mario from '../../../../public/svg/heroes/plumber-svgrepo-com (1).svg';
import CyberFlash from '../../../../public/svg/heroes/superheroe-svgrepo-com (6).svg';
import Thor from '../../../../public/svg/heroes/superheroe-svgrepo-com.svg';
import Magneto from '../../../../public/svg/heroes/superheroe-svgrepo-com (1).svg';
import Wolverine from '../../../../public/svg/heroes/superheroe-svgrepo-com (2).svg';
import SuperMan from '../../../../public/svg/heroes/superheroe-svgrepo-com (3).svg';
import Flash from '../../../../public/svg/heroes/superheroe-svgrepo-com (4).svg';
import Cyclops from '../../../../public/svg/heroes/superheroe-svgrepo-com (5).svg';
import Freak from '../../../../public/svg/heroes/freak-svgrepo-com.svg';
import Psycho from '../../../../public/svg/heroes/psycho-svgrepo-com.svg';
import Robocop from '../../../../public/svg/heroes/robot-svgrepo-com.svg';
import Leonid from '../../../../public/svg/heroes/warrior-svgrepo-com.svg';
import Freddy from '../../../../public/svg/heroes/characters-svgrepo-com.svg';

const initialState = {
  heroes: [
    {
      type: 'Mario',
      icon: Mario,
    },
    {
      type: 'Cyber-Flash',
      icon: CyberFlash,
    },
    {
      type: 'Thor',
      icon: Thor,
    },
    {
      type: 'Magneto',
      icon: Magneto,
    },
    {
      type: 'Wolverine',
      icon: Wolverine,
    },
    {
      type: 'SuperMan',
      icon: SuperMan,
    },
    {
      type: 'Flash',
      icon: Flash,
    },
    {
      type: 'Cyclops',
      icon: Cyclops,
    },
    {
      type: 'Freak',
      icon: Freak,
    },
    {
      type: 'Psycho',
      icon: Psycho,
    },
    {
      type: 'Robocop',
      icon: Robocop,
    },
    {
      type: 'Leonid',
      icon: Leonid,
    },
    {
      type: 'Freddy',
      icon: Freddy,
    },
  ],
};

export const heroes = (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};

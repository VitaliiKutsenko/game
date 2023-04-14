import Strength from '@public/svg/baseParams/swordsman.png';
import Agility from '@public/svg/baseParams/ninja.png';
import Intelligence from '@public/svg/baseParams/wizard.png';
import Charisma from '@public/svg/baseParams/monk.png';

type BaseParamType = {
  icon: any;
  name: string;
  color: string;
};

type ParamsType = 'strength' | 'agility' | 'intelligence' | 'charisma';

type BaseParamsSchemaType = {
  [Key in ParamsType]?: BaseParamType;
};
export const baseParamSchema: BaseParamsSchemaType = {
  strength: {
    icon: Strength,
    name: 'Сила',
    color: 'rgb(208, 82, 133)',
  },
  agility: {
    icon: Agility,
    name: 'Ловкость',
    color: 'rgb(103, 114, 127)',
  },
  intelligence: {
    icon: Intelligence,
    name: 'Интелект',
    color: 'rgb(230, 169, 163)',
  },
  charisma: {
    icon: Charisma,
    name: 'Харизма',
    color: 'rgb(249, 172, 72)',
  },
};

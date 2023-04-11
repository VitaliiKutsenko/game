import attack from '@public/svg/skills/attack.png';
import stealth from '@public/svg/skills/stealth.png';
import archery from '@public/svg/skills/archery.png';
import educability from '@public/svg/skills/educability.png';
import survival from '@public/svg/skills/survival.png';
import medicine from '@public/svg/skills/medicine.png';
import intimidation from '@public/svg/skills/intimidation.png';
import insight from '@public/svg/skills/insight.png';
import appearance from '@public/svg/skills/appearance.png';
import manipulation from '@public/svg/skills/manipulation.png';
import Life from '@public/svg/params/icons8-heart-with-pulse-48 (1).png';
import Evasion from '@public/svg/params/icons8-assassin-60.png';
import Energy from '@public/svg/params/icons8-flash-on-48 (1).png';
import Strength from '@public/svg/baseParams/swordsman.png';
import Agility from '@public/svg/baseParams/ninja.png';
import Intelligence from '@public/svg/baseParams/wizard.png';
import Charisma from '@public/svg/baseParams/monk.png';

export const styleSchema = {
  skillsStyle: {
    attack: {
      title: 'Атака',
      info: 'Шанс нанесения критического урона',
      icon: attack,
    },
    stealth: {
      title: 'Стелс',
      info: 'Шанс подкрасться сзади и нанести дополнительный урон',
      icon: stealth,
    },
    archery: {
      title: 'Стрельба из лука',
      info: 'Шанс выстрелить из лука и нанести дополнительный урон',
      icon: archery,
    },
    educability: {
      title: 'Обучаемость',
      info: 'Шанс в начале боя выбрать дополнительный удар',
      icon: educability,
    },
    survival: {
      title: 'Выживание',
      info: 'Шанс заблокировать 20% урона',
      icon: survival,
    },
    medicine: {
      title: 'Медицина',
      info: 'Шанс восстановить 20% здоровья',
      icon: medicine,
    },
    intimidation: {
      title: 'Запугивание',
      info: 'Шанс что противник ненесет на 10% меньше урона',
      icon: intimidation,
    },
    insight: {
      title: 'Проницательность',
      info: 'Шанс что противник ненесет на 10% меньше урона',
      icon: insight,
    },
    appearance: {
      title: 'Внешний вид',
      info: 'Шанс что противник ненесет на 10% меньше урона',
      icon: appearance,
    },
    manipulation: {
      title: 'Манипулирование',
      info: 'Шанс что противник ненесет сам себе урон',
      icon: manipulation,
    },
    skillsLevel: [
      {
        level: 'Нетренированный',
        color: 'gray',
      },
      {
        level: 'Новичок',
        color: 'green',
      },
      {
        level: 'Ученик',
        color: 'orange',
      },
      {
        level: 'Адепт',
        color: 'tomato',
      },
      {
        level: 'Эксперт',
        color: 'gold',
      },
    ],
  },
  championsStyle: {
    life: {
      icon: Life,
      name: 'Жизненная сила',
      color: 'red',
    },
    evasion: {
      icon: Evasion,
      name: 'Уклонение',
      color: 'green',
    },
    energy: {
      icon: Energy,
      name: 'Энергичность',
      color: 'blue',
    },
  },
  baseParamStyle: {
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
  },
};

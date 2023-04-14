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

type SkillsParamType = {
  icon: any;
  title: string;
  info: string;
};

type SkillsType =
  | 'attack'
  | 'stealth'
  | 'archery'
  | 'educability'
  | 'survival'
  | 'medicine'
  | 'intimidation'
  | 'insight'
  | 'appearance'
  | 'manipulation';

type BaseSkillsSchemaType = {
  [Key in SkillsType]?: SkillsParamType;
};
export const baseSkillsSchema: BaseSkillsSchemaType = {
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
};

type SkillsLevelSchemaType = {
  level: string;
  color: string;
  maxLevel: number;
};
export const skillsLevelSchema: SkillsLevelSchemaType[] = [
  {
    level: 'Нетренированный',
    color: 'gray',
    maxLevel: 20,
  },
  {
    level: 'Новичок',
    color: 'green',
    maxLevel: 40,
  },
  {
    level: 'Ученик',
    color: 'orange',
    maxLevel: 60,
  },
  {
    level: 'Адепт',
    color: 'tomato',
    maxLevel: 80,
  },
  {
    level: 'Эксперт',
    color: 'gold',
    maxLevel: 100,
  },
];

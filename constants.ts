import { DailyPlan, WeekDay } from './types';

export const DAYS_OF_WEEK: WeekDay[] = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

export const BREAKFAST_OPTIONS: string[] = [
  'Овсяная каша с лесными ягодами и медом',
  'Омлет из двух яиц со шпинатом и томатами',
  'Сырники из фермерского творога со сметаной',
  'Тост с авокадо, яйцом пашот и семенами льна',
  'Гречневая каша на молоке с маслом',
  'Домашняя гранола с греческим йогуртом',
  'Блинчики с творогом и изюмом'
];

export const LUNCH_OPTIONS: string[] = [
  'Классический борщ с говядиной и сметаной',
  'Куриный суп-лапша с зеленью',
  'Паста из твердых сортов пшеницы с овощами',
  'Запеченная куриная грудка с киноа',
  'Рыбные котлеты с картофельным пюре',
  'Грибной крем-суп с сухариками',
  'Плов с курицей и барбарисом'
];

export const DINNER_OPTIONS: string[] = [
  'Салат "Цезарь" с креветками',
  'Запеченная белая рыба с брокколи',
  'Овощное рагу с индейкой',
  'Творожная запеканка без сахара',
  'Салат из свежих овощей с тунцом',
  'Паровые котлеты из телятины',
  'Тушеная капуста с грибами'
];

export const SNACK_OPTIONS: string[] = [
  'Зеленое яблоко и горсть миндаля',
  'Стакан кефира или ряженки',
  'Протеиновый батончик',
  'Нарезка из свежей моркови и сельдерея',
  'Банан',
  'Творог с ягодами',
  'Хлебцы с творожным сыром'
];

export const INITIAL_WEEKLY_PLAN: Record<WeekDay, DailyPlan> = {
  'Пн': {
    breakfast: BREAKFAST_OPTIONS[0],
    lunch: LUNCH_OPTIONS[0],
    dinner: DINNER_OPTIONS[0],
    snack: SNACK_OPTIONS[0],
  },
  'Вт': {
    breakfast: BREAKFAST_OPTIONS[1],
    lunch: LUNCH_OPTIONS[1],
    dinner: DINNER_OPTIONS[1],
    snack: SNACK_OPTIONS[1],
  },
  'Ср': {
    breakfast: BREAKFAST_OPTIONS[2],
    lunch: LUNCH_OPTIONS[2],
    dinner: DINNER_OPTIONS[2],
    snack: SNACK_OPTIONS[2],
  },
  'Чт': {
    breakfast: BREAKFAST_OPTIONS[3],
    lunch: LUNCH_OPTIONS[3],
    dinner: DINNER_OPTIONS[3],
    snack: SNACK_OPTIONS[3],
  },
  'Пт': {
    breakfast: BREAKFAST_OPTIONS[4],
    lunch: LUNCH_OPTIONS[4],
    dinner: DINNER_OPTIONS[4],
    snack: SNACK_OPTIONS[4],
  },
  'Сб': {
    breakfast: BREAKFAST_OPTIONS[5],
    lunch: LUNCH_OPTIONS[5],
    dinner: DINNER_OPTIONS[5],
    snack: SNACK_OPTIONS[5],
  },
  'Вс': {
    breakfast: BREAKFAST_OPTIONS[6],
    lunch: LUNCH_OPTIONS[6],
    dinner: DINNER_OPTIONS[6],
    snack: SNACK_OPTIONS[6],
  },
};
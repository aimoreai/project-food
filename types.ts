export type MealType = 'Завтрак' | 'Обед' | 'Ужин' | 'Перекус';

export interface DailyPlan {
  breakfast: string;
  lunch: string;
  dinner: string;
  snack: string;
}

export type WeekDay = 'Пн' | 'Вт' | 'Ср' | 'Чт' | 'Пт' | 'Сб' | 'Вс';

export interface MealOption {
    name: string;
    calories?: number; // Optional metadata for future use
}
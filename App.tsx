import React, { useState, useCallback } from 'react';
import { DailyPlan, WeekDay } from './types';
import { 
  BREAKFAST_OPTIONS, 
  LUNCH_OPTIONS, 
  DINNER_OPTIONS, 
  SNACK_OPTIONS, 
  INITIAL_WEEKLY_PLAN 
} from './constants';
import DaySelector from './components/DaySelector';
import MealDisplay from './components/MealDisplay';

const App: React.FC = () => {
  const [currentDay, setCurrentDay] = useState<WeekDay>('Пн');
  const [weeklyPlan, setWeeklyPlan] = useState<Record<WeekDay, DailyPlan>>(INITIAL_WEEKLY_PLAN);

  // Function to get a random item from an array
  const getRandomItem = (items: string[]) => items[Math.floor(Math.random() * items.length)];

  // Callback to update the menu for the current day
  const handleUpdateMenu = useCallback(() => {
    const newDailyPlan: DailyPlan = {
      breakfast: getRandomItem(BREAKFAST_OPTIONS),
      lunch: getRandomItem(LUNCH_OPTIONS),
      dinner: getRandomItem(DINNER_OPTIONS),
      snack: getRandomItem(SNACK_OPTIONS),
    };

    setWeeklyPlan(prev => ({
      ...prev,
      [currentDay]: newDailyPlan
    }));
  }, [currentDay]);

  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center py-6 px-4 md:px-6 md:py-10">
      
      {/* Header */}
      <header className="w-full max-w-2xl mb-8 flex flex-col items-center">
        <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mb-4 shadow-xl shadow-green-200 rotate-3">
            <svg className="text-white w-8 h-8" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.77 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800 tracking-tight text-center">
          Мой План Питания
        </h1>
        <p className="text-slate-500 mt-2 text-center max-w-xs md:max-w-md">
          Планируйте свое меню на неделю легко и с удовольствием.
        </p>
      </header>

      {/* Main Card */}
      <main className="w-full max-w-xl bg-white/60 backdrop-blur-xl rounded-3xl shadow-xl border border-white/50 p-1 md:p-2 overflow-hidden">
        
        {/* Navigation */}
        <div className="bg-white/50 rounded-2xl p-4 mb-4">
            <DaySelector selectedDay={currentDay} onSelectDay={setCurrentDay} />
        </div>

        {/* Content Area */}
        <div className="px-4 md:px-6">
           <MealDisplay 
             key={currentDay + JSON.stringify(weeklyPlan[currentDay])} // Force animation on change
             plan={weeklyPlan[currentDay]} 
             day={currentDay} 
             onUpdateMenu={handleUpdateMenu} 
           />
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-12 text-center text-slate-400 text-xs">
        © 2024 Smart Meal Planner. Приятного аппетита!
      </footer>
    </div>
  );
};

export default App;
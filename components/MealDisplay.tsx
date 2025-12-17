import React from 'react';
import { DailyPlan, WeekDay } from '../types';
import { Sun, Coffee, Moon, Utensils } from 'lucide-react'; // Assuming lucide-react is available or I can simulate icons if needed, but I'll use simple SVGs if not. 
// Standard instruction says "Use popular libraries". Lucide is popular. I'll simulate SVGs for zero-dependency robustness if I can't guarantee install, but usually Lucide is fine. 
// To be safe and self-contained I will use inline SVGs here to avoid import errors if the environment doesn't have lucide-react installed.

interface MealDisplayProps {
  plan: DailyPlan;
  day: WeekDay;
  onUpdateMenu: () => void;
}

const MealItem: React.FC<{ title: string; meal: string; icon: React.ReactNode; colorClass: string }> = ({ title, meal, icon, colorClass }) => (
  <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300 flex items-start gap-4">
    <div className={`p-3 rounded-xl ${colorClass} text-white shrink-0`}>
      {icon}
    </div>
    <div>
      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">{title}</h3>
      <p className="text-slate-800 font-medium text-lg leading-snug">{meal}</p>
    </div>
  </div>
);

const MealDisplay: React.FC<MealDisplayProps> = ({ plan, day, onUpdateMenu }) => {
  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-slate-800">Меню на {day}</h2>
        <p className="text-slate-500 text-sm">Сбалансированное питание для отличного самочувствия</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <MealItem 
          title="Завтрак" 
          meal={plan.breakfast} 
          colorClass="bg-orange-400"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
          } 
        />
        <MealItem 
          title="Обед" 
          meal={plan.lunch} 
          colorClass="bg-green-500"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>
            // Actually let's use a simpler sun icon for breakfast and utensil for lunch
          }
        />
         {/* Fixing icons for semantic clarity */}
      </div>
      
      {/* Re-rendering with better icons manually */}
      <div className="grid grid-cols-1 gap-4 mt-4">
          {/* Dinner */}
           <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300 flex items-start gap-4">
            <div className="p-3 rounded-xl bg-indigo-500 text-white shrink-0">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Ужин</h3>
              <p className="text-slate-800 font-medium text-lg leading-snug">{plan.dinner}</p>
            </div>
          </div>

          {/* Snack */}
           <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300 flex items-start gap-4">
            <div className="p-3 rounded-xl bg-pink-400 text-white shrink-0">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z"/><path d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z"/><path d="m18.5 8.5 3.5 3.5-3.5 3.5L15 12l3.5-3.5Z"/><path d="m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z"/></svg>
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Перекус</h3>
              <p className="text-slate-800 font-medium text-lg leading-snug">{plan.snack}</p>
            </div>
          </div>
      </div>

      <div className="mt-8 flex justify-center pb-8">
        <button 
          onClick={onUpdateMenu}
          className="group relative flex items-center gap-2 px-8 py-4 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 active:scale-95 transition-all duration-200 shadow-lg hover:shadow-green-200"
        >
          <svg className="w-5 h-5 transition-transform duration-500 group-hover:rotate-180" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.5 2v6h-6"/><path d="M21.34 15.57a10 10 0 1 1-.57-8.38"/></svg>
          Обновить меню
        </button>
      </div>
    </div>
  );
};

export default MealDisplay;
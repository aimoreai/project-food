import React from 'react';
import { WeekDay } from '../types';
import { DAYS_OF_WEEK } from '../constants';

interface DaySelectorProps {
  selectedDay: WeekDay;
  onSelectDay: (day: WeekDay) => void;
}

const DaySelector: React.FC<DaySelectorProps> = ({ selectedDay, onSelectDay }) => {
  return (
    <div className="flex justify-between md:justify-center gap-2 md:gap-4 overflow-x-auto pb-4 md:pb-0 scrollbar-hide">
      {DAYS_OF_WEEK.map((day) => (
        <button
          key={day}
          onClick={() => onSelectDay(day)}
          className={`
            w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-sm md:text-base font-semibold transition-all duration-300 shadow-sm
            ${
              selectedDay === day
                ? 'bg-green-600 text-white shadow-lg scale-110 ring-2 ring-green-300'
                : 'bg-white text-green-700 hover:bg-green-100'
            }
          `}
        >
          {day}
        </button>
      ))}
    </div>
  );
};

export default DaySelector;
import React from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isToday } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';

function Calendar() {
  const today = new Date();
  const monthStart = startOfMonth(today);
  const monthEnd = endOfMonth(today);
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const events = [
    { date: '2024-04-15', name: 'Netflix', amount: 15.99 },
    { date: '2024-04-10', name: 'Spotify', amount: 9.99 },
    { date: '2024-04-20', name: 'Adobe CC', amount: 52.99 },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="md:flex md:items-center md:justify-between">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            Payment Calendar
          </h2>
        </div>
      </div>

      <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-lg font-semibold text-gray-900">
              {format(today, 'MMMM yyyy')}
            </h2>
            <div className="flex space-x-4">
              <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                Previous
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                Next
              </button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-px bg-gray-200 rounded-lg">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <div
                key={day}
                className="bg-gray-50 py-2 text-center text-sm font-medium text-gray-500"
              >
                {day}
              </div>
            ))}
            {days.map((day, dayIdx) => {
              const dayEvents = events.filter(
                (event) => event.date === format(day, 'yyyy-MM-dd')
              );

              return (
                <div
                  key={day.toString()}
                  className={`bg-white min-h-[100px] p-2 ${
                    isToday(day) ? 'bg-indigo-50' : ''
                  }`}
                >
                  <div className="font-medium text-sm text-gray-500">
                    {format(day, 'd')}
                  </div>
                  {dayEvents.map((event, eventIdx) => (
                    <div
                      key={eventIdx}
                      className="mt-1 p-1 text-xs bg-indigo-100 text-indigo-700 rounded"
                    >
                      <div className="font-medium">{event.name}</div>
                      <div>${event.amount}</div>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calendar;
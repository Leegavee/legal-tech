import React from 'react';

interface Event {
  id: number;
  type: string;
  summary: string;
  date: Date;
  status: string;
}

interface ProgressBarProps {
  events: Event[];
  totalProgress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ events, totalProgress }) => {
  const completedEvents = events.length;
  const progressPercentage = (completedEvents / totalProgress) * 100;

  return (
    <>
      <style>
        {`
          @keyframes stripe {
            0% {
              background-position: 0 0;
            }
            100% {
              background-position: 40px 40px;
            }
          }
        `}
      </style>
      <div className="relative w-full bg-gray-300 rounded-lg h-8 my-4">
        <div
          className="absolute h-8 rounded-lg bg-indigo-500"
          style={{
            width: `${progressPercentage}%`,
            backgroundImage:
              'linear-gradient(45deg, rgba(255, 255, 255, 0.2) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.2) 75%, transparent 75%, transparent)',
            backgroundSize: '40px 40px',
            animation: 'stripe 2s linear infinite',
          }}
        ></div>
        {events.map((event, index) => {
          const eventPosition = (index / totalProgress) * 100;
          return (
            <div
              key={event.id}
              className="absolute top-0 text-xs text-white flex items-center justify-center"
              style={{
                left: `calc(${eventPosition}% - 10px)`,
              }}
            ></div>
          );
        })}
      </div>
    </>
  );
};

export default ProgressBar;

import { projects } from '../../data/mockData';

const TODAY = new Date('2026-03-16');

function getDaysLeft(deadline: string) {
  const diff = new Date(deadline).getTime() - TODAY.getTime();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

export default function UpcomingDeadlines() {
  const upcoming = [...projects]
    .filter((p) => p.status !== 'Completed')
    .sort((a, b) => new Date(a.deadline).getTime() - new Date(b.deadline).getTime())
    .slice(0, 5);

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
      <h2 className="font-semibold text-gray-800 mb-4">Upcoming Deadlines</h2>
      <ul className="space-y-3">
        {upcoming.map((project) => {
          const days = getDaysLeft(project.deadline);
          const isOverdue = days < 0;
          const isUrgent = !isOverdue && days <= 7;

          const calBg = isOverdue
            ? 'bg-red-50'
            : isUrgent
            ? 'bg-orange-50'
            : 'bg-indigo-50';

          const calText = isOverdue
            ? 'text-red-600'
            : isUrgent
            ? 'text-orange-500'
            : 'text-indigo-600';

          const badgeText = isOverdue
            ? 'text-red-500'
            : isUrgent
            ? 'text-orange-500'
            : 'text-gray-400';

          return (
            <li key={project.id} className="flex items-center gap-3">
              {/* Calendar icon */}
              <div
                className={`w-10 h-10 rounded-xl ${calBg} flex flex-col items-center justify-center shrink-0`}
              >
                <span className={`text-xs font-bold leading-none ${calText}`}>
                  {new Date(project.deadline).getDate()}
                </span>
                <span className={`text-[10px] leading-none mt-0.5 ${calText} opacity-70`}>
                  {new Date(project.deadline).toLocaleDateString('en-US', { month: 'short' })}
                </span>
              </div>

              {/* Details */}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-800 truncate">{project.name}</p>
                <p className="text-xs text-gray-400 truncate">{project.client}</p>
              </div>

              {/* Days badge */}
              <span className={`text-xs font-semibold shrink-0 ${badgeText}`}>
                {isOverdue
                  ? `${Math.abs(days)}d late`
                  : days === 0
                  ? 'Today'
                  : `${days}d left`}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

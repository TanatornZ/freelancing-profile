import { activities } from '../../data/mockData';
import type { Activity } from '../../types';

const iconMap: Record<Activity['type'], { emoji: string; bg: string }> = {
  payment: { emoji: '💰', bg: 'bg-green-50' },
  message: { emoji: '💬', bg: 'bg-blue-50' },
  project: { emoji: '✅', bg: 'bg-purple-50' },
  deadline: { emoji: '⏰', bg: 'bg-orange-50' },
};

export default function ActivityFeed() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-semibold text-gray-800">Recent Activity</h2>
        <button className="text-xs text-indigo-600 hover:text-indigo-800 font-medium transition-colors">
          View all →
        </button>
      </div>
      <ul className="space-y-4">
        {activities.map((activity) => {
          const style = iconMap[activity.type];
          return (
            <li key={activity.id} className="flex items-start gap-3">
              <div
                className={`w-8 h-8 rounded-xl ${style.bg} flex items-center justify-center shrink-0 text-sm`}
              >
                {style.emoji}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-800 leading-tight">
                  {activity.title}
                </p>
                <p className="text-xs text-gray-400 mt-0.5 line-clamp-1">
                  {activity.description}
                </p>
              </div>
              <span className="text-[11px] text-gray-400 shrink-0 mt-0.5 whitespace-nowrap">
                {activity.time}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

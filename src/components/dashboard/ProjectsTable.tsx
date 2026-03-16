import { useState } from 'react';
import { projects } from '../../data/mockData';
import type { ProjectStatus } from '../../types';

const statusStyles: Record<ProjectStatus, string> = {
  'In Progress': 'bg-blue-50 text-blue-700',
  Completed: 'bg-green-50 text-green-700',
  Overdue: 'bg-red-50 text-red-700',
  'On Hold': 'bg-amber-50 text-amber-700',
};

const priorityDot: Record<string, string> = {
  High: 'bg-red-500',
  Medium: 'bg-amber-400',
  Low: 'bg-green-500',
};

const filters = ['All', 'In Progress', 'Completed', 'Overdue', 'On Hold'] as const;
type Filter = (typeof filters)[number];

export default function ProjectsTable() {
  const [filter, setFilter] = useState<Filter>('All');

  const filtered =
    filter === 'All' ? projects : projects.filter((p) => p.status === filter);

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-5 py-4 border-b border-gray-100">
        <div>
          <h2 className="font-semibold text-gray-800">Projects</h2>
          <p className="text-xs text-gray-400">{projects.length} total projects</p>
        </div>
        <div className="flex flex-wrap gap-1">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
                filter === f
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100 text-[11px] text-gray-400 uppercase tracking-wider">
              <th className="text-left px-5 py-3 font-semibold">Project</th>
              <th className="text-left px-5 py-3 font-semibold hidden sm:table-cell">Client</th>
              <th className="text-left px-5 py-3 font-semibold hidden md:table-cell">Status</th>
              <th className="text-left px-5 py-3 font-semibold hidden lg:table-cell">Budget</th>
              <th className="text-left px-5 py-3 font-semibold">Progress</th>
              <th className="text-left px-5 py-3 font-semibold hidden xl:table-cell">Deadline</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((project) => (
              <tr
                key={project.id}
                className="border-b border-gray-50 last:border-0 hover:bg-gray-50/70 transition-colors cursor-pointer"
              >
                {/* Project name */}
                <td className="px-5 py-3.5">
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`w-2 h-2 rounded-full flex-shrink-0 ${priorityDot[project.priority]}`}
                      title={`${project.priority} priority`}
                    />
                    <div>
                      <p className="font-medium text-gray-800 leading-tight">{project.name}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{project.category}</p>
                    </div>
                  </div>
                </td>

                {/* Client */}
                <td className="px-5 py-3.5 text-gray-600 hidden sm:table-cell">{project.client}</td>

                {/* Status */}
                <td className="px-5 py-3.5 hidden md:table-cell">
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${statusStyles[project.status]}`}
                  >
                    {project.status}
                  </span>
                </td>

                {/* Budget */}
                <td className="px-5 py-3.5 text-gray-700 font-medium hidden lg:table-cell">
                  ${project.budget.toLocaleString()}
                </td>

                {/* Progress bar */}
                <td className="px-5 py-3.5">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-gray-100 rounded-full h-1.5 min-w-[60px]">
                      <div
                        className={`h-1.5 rounded-full transition-all ${
                          project.progress === 100
                            ? 'bg-green-500'
                            : project.status === 'Overdue'
                            ? 'bg-red-500'
                            : project.status === 'On Hold'
                            ? 'bg-amber-400'
                            : 'bg-indigo-500'
                        }`}
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                    <span className="text-xs text-gray-500 font-medium w-7 text-right">
                      {project.progress}%
                    </span>
                  </div>
                </td>

                {/* Deadline */}
                <td className="px-5 py-3.5 text-gray-500 text-xs hidden xl:table-cell">
                  {new Date(project.deadline).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filtered.length === 0 && (
          <div className="text-center py-12 text-gray-400 text-sm">
            No projects match this filter.
          </div>
        )}
      </div>
    </div>
  );
}

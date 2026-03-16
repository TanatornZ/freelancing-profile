import { invoices } from '../../data/mockData';
import type { InvoiceStatus } from '../../types';

const statusStyles: Record<InvoiceStatus, string> = {
  Paid: 'bg-green-50 text-green-700',
  Pending: 'bg-amber-50 text-amber-700',
  Overdue: 'bg-red-50 text-red-600',
};

const totalPaid = invoices.filter((i) => i.status === 'Paid').reduce((s, i) => s + i.amount, 0);
const totalPending = invoices.filter((i) => i.status !== 'Paid').reduce((s, i) => s + i.amount, 0);

export default function InvoiceList() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm">
      {/* Header */}
      <div className="px-5 py-4 border-b border-gray-100">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-gray-800">Recent Invoices</h2>
          <button className="text-xs text-indigo-600 hover:text-indigo-800 font-medium transition-colors">
            View all →
          </button>
        </div>
        {/* Mini summary */}
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-green-50 rounded-xl px-3 py-2">
            <p className="text-[10px] text-green-600 font-medium uppercase tracking-wide">Collected</p>
            <p className="text-sm font-bold text-green-700">${totalPaid.toLocaleString()}</p>
          </div>
          <div className="bg-amber-50 rounded-xl px-3 py-2">
            <p className="text-[10px] text-amber-600 font-medium uppercase tracking-wide">Outstanding</p>
            <p className="text-sm font-bold text-amber-700">${totalPending.toLocaleString()}</p>
          </div>
        </div>
      </div>

      {/* Invoice rows */}
      <ul className="divide-y divide-gray-50">
        {invoices.map((inv) => (
          <li
            key={inv.id}
            className="flex items-center gap-3 px-5 py-3 hover:bg-gray-50/70 transition-colors cursor-pointer"
          >
            <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 text-xs font-bold shrink-0">
              {inv.id.split('-')[1]}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-800 truncate">{inv.client}</p>
              <p className="text-xs text-gray-400">
                Due{' '}
                {new Date(inv.dueDate).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                })}
              </p>
            </div>
            <div className="flex flex-col items-end gap-1">
              <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${statusStyles[inv.status]}`}>
                {inv.status}
              </span>
              <span className="text-sm font-bold text-gray-800">${inv.amount.toLocaleString()}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

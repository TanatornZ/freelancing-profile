import { monthlyRevenue } from '../../data/mockData';

export default function RevenueChart() {
  const maxRevenue = Math.max(...monthlyRevenue.map((m) => m.revenue));
  const totalRevenue = monthlyRevenue.reduce((s, m) => s + m.revenue, 0);
  const totalExpenses = monthlyRevenue.reduce((s, m) => s + m.expenses, 0);
  const netProfit = totalRevenue - totalExpenses;
  const profitMargin = Math.round((netProfit / totalRevenue) * 100);

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
      {/* Header */}
      <div className="flex items-start justify-between mb-1">
        <div>
          <h2 className="font-semibold text-gray-800">Revenue Overview</h2>
          <p className="text-xs text-gray-400 mt-0.5">Oct 2025 – Mar 2026</p>
        </div>
        <div className="flex items-center gap-3 text-xs mt-0.5">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-sm bg-indigo-500 inline-block" />
            <span className="text-gray-500">Revenue</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-sm bg-rose-300 inline-block" />
            <span className="text-gray-500">Expenses</span>
          </div>
        </div>
      </div>

      {/* Y-axis labels + bars */}
      <div className="flex gap-2 mt-4">
        {/* Y axis */}
        <div className="flex flex-col justify-between text-[10px] text-gray-300 pb-5 w-8 text-right">
          <span>${(maxRevenue / 1000).toFixed(0)}k</span>
          <span>${(maxRevenue / 2000).toFixed(0)}k</span>
          <span>$0</span>
        </div>

        {/* Bars */}
        <div className="flex-1 flex items-end gap-2 h-36">
          {monthlyRevenue.map((item) => (
            <div key={item.month} className="flex-1 flex flex-col items-center gap-1">
              <div className="w-full flex items-end gap-0.5 h-28">
                {/* Revenue bar */}
                <div
                  className="flex-1 bg-indigo-500 rounded-t-lg hover:bg-indigo-600 transition-colors cursor-pointer"
                  style={{ height: `${(item.revenue / maxRevenue) * 100}%` }}
                  title={`Revenue: $${item.revenue.toLocaleString()}`}
                />
                {/* Expense bar */}
                <div
                  className="flex-1 bg-rose-200 rounded-t-lg hover:bg-rose-300 transition-colors cursor-pointer"
                  style={{ height: `${(item.expenses / maxRevenue) * 100}%` }}
                  title={`Expenses: $${item.expenses.toLocaleString()}`}
                />
              </div>
              <span className="text-[10px] text-gray-400 font-medium">{item.month}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-3 gap-2 mt-5 pt-4 border-t border-gray-100">
        <div>
          <p className="text-[10px] text-gray-400 uppercase tracking-wide font-medium">Revenue</p>
          <p className="text-base font-bold text-gray-800 mt-0.5">${(totalRevenue / 1000).toFixed(1)}k</p>
        </div>
        <div>
          <p className="text-[10px] text-gray-400 uppercase tracking-wide font-medium">Expenses</p>
          <p className="text-base font-bold text-rose-500 mt-0.5">${(totalExpenses / 1000).toFixed(1)}k</p>
        </div>
        <div>
          <p className="text-[10px] text-gray-400 uppercase tracking-wide font-medium">Net Profit</p>
          <p className="text-base font-bold text-green-600 mt-0.5">
            {profitMargin}%
          </p>
        </div>
      </div>
    </div>
  );
}

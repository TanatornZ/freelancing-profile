import { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { monthlyRevenue } from '../../data/mockData';

interface TooltipState {
  svgX: number;
  svgY: number;
  month: string;
  revenue: number;
  expenses: number;
}

export default function RevenueChart() {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [tooltip, setTooltip] = useState<TooltipState | null>(null);
  const [width, setWidth] = useState(400);

  useEffect(() => {
    const ro = new ResizeObserver((entries) => setWidth(entries[0].contentRect.width));
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (!svgRef.current || width === 0) return;

    const margin = { top: 12, right: 16, bottom: 28, left: 48 };
    const W = width - margin.left - margin.right;
    const H = 190 - margin.top - margin.bottom;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();
    svg.attr('width', width).attr('height', 190);

    const g = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`);

    const x = d3.scalePoint<string>()
      .domain(monthlyRevenue.map((d) => d.month))
      .range([0, W]).padding(0.4);

    const yMax = d3.max(monthlyRevenue, (d) => d.revenue) ?? 0;
    const y = d3.scaleLinear().domain([0, yMax * 1.18]).range([H, 0]);

    const defs = svg.append('defs');
    const addGrad = (id: string, color: string) => {
      const grad = defs.append('linearGradient').attr('id', id).attr('x1','0').attr('y1','0').attr('x2','0').attr('y2','1');
      grad.append('stop').attr('offset','0%').attr('stop-color', color).attr('stop-opacity', 0.35);
      grad.append('stop').attr('offset','100%').attr('stop-color', color).attr('stop-opacity', 0.01);
    };
    addGrad('revGrad', '#6366f1');
    addGrad('expGrad', '#fb7185');

    g.append('g')
      .call(d3.axisLeft(y).tickSize(-W).tickFormat(() => '').ticks(5))
      .call((gg) => {
        gg.select('.domain').remove();
        gg.selectAll('.tick line').attr('stroke','#f1f5f9').attr('stroke-dasharray','3,4');
      });

    g.append('g').attr('transform', `translate(0,${H})`)
      .call(d3.axisBottom(x).tickSize(0))
      .call((gg) => {
        gg.select('.domain').remove();
        gg.selectAll('text').attr('fill','#94a3b8').attr('font-size','10px').attr('dy','1.4em');
      });

    g.append('g')
      .call(d3.axisLeft(y).ticks(5).tickFormat((d) => `$${Number(d)/1000}k`))
      .call((gg) => {
        gg.select('.domain').remove();
        gg.selectAll('.tick line').remove();
        gg.selectAll('text').attr('fill','#94a3b8').attr('font-size','10px').attr('dx','-2px');
      });

    const makeArea = (key: 'revenue' | 'expenses') =>
      d3.area<(typeof monthlyRevenue)[0]>()
        .x((d) => x(d.month) ?? 0).y0(H).y1((d) => y(d[key])).curve(d3.curveMonotoneX);

    const makeLine = (key: 'revenue' | 'expenses') =>
      d3.line<(typeof monthlyRevenue)[0]>()
        .x((d) => x(d.month) ?? 0).y((d) => y(d[key])).curve(d3.curveMonotoneX);

    g.append('path').datum(monthlyRevenue).attr('fill','url(#revGrad)').attr('d', makeArea('revenue'));
    g.append('path').datum(monthlyRevenue).attr('fill','url(#expGrad)').attr('d', makeArea('expenses'));

    const animateLine = (key: 'revenue' | 'expenses', stroke: string, strokeWidth: number, delay = 0) => {
      const path = g.append('path').datum(monthlyRevenue)
        .attr('fill','none').attr('stroke', stroke).attr('stroke-width', strokeWidth).attr('d', makeLine(key));
      const len = path.node()?.getTotalLength() ?? 0;
      path.attr('stroke-dasharray', len).attr('stroke-dashoffset', len)
        .transition().delay(delay).duration(1000).ease(d3.easeCubicOut).attr('stroke-dashoffset', 0);
    };
    animateLine('revenue','#6366f1', 2.5);
    animateLine('expenses','#fb7185', 1.8, 100);

    g.selectAll('.dot').data(monthlyRevenue).enter().append('circle')
      .attr('cx', (d) => x(d.month) ?? 0).attr('cy', (d) => y(d.revenue))
      .attr('r', 0).attr('fill','#6366f1').attr('stroke','white').attr('stroke-width', 2)
      .transition().delay((_, i) => i * 70 + 800).duration(250).attr('r', 4);

    g.append('rect').attr('width', W).attr('height', H).attr('fill','transparent')
      .on('mousemove', (event) => {
        const [mx] = d3.pointer(event);
        const closest = monthlyRevenue.reduce((best, d) =>
          Math.abs((x(d.month) ?? 0) - mx) < Math.abs((x(best.month) ?? 0) - mx) ? d : best
        );
        const cx = x(closest.month) ?? 0;
        g.selectAll('.xhair').remove();
        g.append('line').attr('class','xhair').attr('x1', cx).attr('x2', cx).attr('y1', 0).attr('y2', H)
          .attr('stroke','#e2e8f0').attr('stroke-width', 1).attr('stroke-dasharray','4');
        g.append('circle').attr('class','xhair').attr('cx', cx).attr('cy', y(closest.revenue))
          .attr('r', 5).attr('fill','#6366f1').attr('stroke','white').attr('stroke-width', 2);
        setTooltip({ svgX: cx + margin.left, svgY: y(closest.revenue) + margin.top, month: closest.month, revenue: closest.revenue, expenses: closest.expenses });
      })
      .on('mouseleave', () => { g.selectAll('.xhair').remove(); setTooltip(null); });
  }, [width]);

  const totalRevenue = monthlyRevenue.reduce((s, m) => s + m.revenue, 0);
  const totalExpenses = monthlyRevenue.reduce((s, m) => s + m.expenses, 0);

  const netMargin = Math.round(((totalRevenue - totalExpenses) / totalRevenue) * 100);

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h2 className="font-semibold text-gray-800">Revenue Overview</h2>
          <p className="text-xs text-gray-400 mt-0.5">Apr 2025 – Mar 2026</p>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-1.5">
            <span className="w-5 h-0.5 bg-indigo-500 inline-block rounded-full" />
            <span className="text-gray-500">Revenue</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-5 h-0.5 bg-rose-400 inline-block rounded-full" />
            <span className="text-gray-500">Expenses</span>
          </div>
        </div>
      </div>

      <div ref={containerRef} className="relative w-full">
        <svg ref={svgRef} className="w-full overflow-visible" />
        {tooltip && (
          <div
            className="absolute pointer-events-none z-20 bg-slate-800 text-white text-xs rounded-xl px-3 py-2.5 shadow-2xl -translate-x-1/2 -translate-y-full"
            style={{ left: tooltip.svgX, top: tooltip.svgY - 12 }}
          >
            <p className="font-bold text-slate-300 mb-1.5 text-center">{tooltip.month}</p>
            <div className="space-y-1">
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-400 inline-block" />
                <span className="text-slate-400">Revenue</span>
                <span className="font-bold ml-2">${tooltip.revenue.toLocaleString()}</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-400 inline-block" />
                <span className="text-slate-400">Expenses</span>
                <span className="font-bold ml-2">${tooltip.expenses.toLocaleString()}</span>
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-gray-100">
        <div>
          <p className="text-[10px] text-gray-400 uppercase tracking-wide font-medium">Revenue</p>
          <p className="text-base font-bold text-gray-800 mt-0.5">${(totalRevenue / 1000).toFixed(1)}k</p>
        </div>
        <div>
          <p className="text-[10px] text-gray-400 uppercase tracking-wide font-medium">Expenses</p>
          <p className="text-base font-bold text-rose-500 mt-0.5">${(totalExpenses / 1000).toFixed(1)}k</p>
        </div>
        <div>
          <p className="text-[10px] text-gray-400 uppercase tracking-wide font-medium">Net Margin</p>
          <p className="text-base font-bold text-green-600 mt-0.5">{netMargin}%</p>
        </div>
      </div>
    </div>
  );
}

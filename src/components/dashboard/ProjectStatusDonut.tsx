import { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { projects } from '../../data/mockData';
import type { ProjectStatus } from '../../types';

const STATUS_COLORS: Record<ProjectStatus, string> = {
  'In Progress': '#6366f1',
  Completed: '#22c55e',
  Overdue: '#ef4444',
  'On Hold': '#f59e0b',
};

interface Slice {
  status: ProjectStatus;
  count: number;
  color: string;
}

const slices: Slice[] = (() => {
  const counts: Partial<Record<ProjectStatus, number>> = {};
  projects.forEach((p) => {
    counts[p.status] = (counts[p.status] ?? 0) + 1;
  });
  return (Object.entries(counts) as [ProjectStatus, number][]).map(([status, count]) => ({
    status,
    count,
    color: STATUS_COLORS[status],
  }));
})();

interface TooltipState {
  x: number;
  y: number;
  status: string;
  count: number;
  pct: number;
}

export default function ProjectStatusDonut() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [tooltip, setTooltip] = useState<TooltipState | null>(null);
  const size = 180;
  const radius = size / 2 - 10;
  const innerRadius = radius * 0.58;
  const total = slices.reduce((s, d) => s + d.count, 0);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();
    svg.attr('width', size).attr('height', size).attr('viewBox', `0 0 ${size} ${size}`);

    const g = svg.append('g').attr('transform', `translate(${size / 2},${size / 2})`);

    const pie = d3.pie<Slice>().value((d) => d.count).sort(null).padAngle(0.03);

    const arc = d3.arc<d3.PieArcDatum<Slice>>()
      .innerRadius(innerRadius)
      .outerRadius(radius)
      .cornerRadius(4);

    const arcHover = d3.arc<d3.PieArcDatum<Slice>>()
      .innerRadius(innerRadius - 2)
      .outerRadius(radius + 6)
      .cornerRadius(4);

    const arcs = pie(slices);

    // Drop shadow filter
    const defs = svg.append('defs');
    const filter = defs.append('filter').attr('id', 'donut-shadow').attr('x', '-20%').attr('y', '-20%').attr('width', '140%').attr('height', '140%');
    filter.append('feDropShadow').attr('dx', 0).attr('dy', 2).attr('stdDeviation', 3).attr('flood-color', '#00000020');

    const paths = g
      .selectAll('path')
      .data(arcs)
      .enter()
      .append('path')
      .attr('fill', (d) => d.data.color)
      .attr('filter', 'url(#donut-shadow)')
      .attr('d', (d) => arc(d) ?? '')
      .style('cursor', 'pointer')
      .style('transition', 'opacity 0.15s')
      .on('mouseenter', function (event, d) {
        d3.select(this).transition().duration(150).attr('d', (dd) => arcHover(dd as d3.PieArcDatum<Slice>) ?? '');
        const [mx, my] = d3.pointer(event, svgRef.current);
        setTooltip({
          x: mx,
          y: my,
          status: d.data.status,
          count: d.data.count,
          pct: Math.round((d.data.count / total) * 100),
        });
      })
      .on('mouseleave', function () {
        d3.select(this).transition().duration(150).attr('d', (dd) => arc(dd as d3.PieArcDatum<Slice>) ?? '');
        setTooltip(null);
      });

    // Animate arcs
    paths
      .attr('d', (d) => {
        const start = { ...d, endAngle: d.startAngle };
        return arc(start) ?? '';
      })
      .transition()
      .duration(900)
      .delay((_, i) => i * 120)
      .ease(d3.easeCubicOut)
      .attr('d', (d) => arc(d) ?? '');

    // Center text
    g.append('text')
      .attr('text-anchor', 'middle')
      .attr('dy', '-0.15em')
      .attr('font-size', '26px')
      .attr('font-weight', '700')
      .attr('fill', '#1e293b')
      .text(total);

    g.append('text')
      .attr('text-anchor', 'middle')
      .attr('dy', '1.2em')
      .attr('font-size', '10px')
      .attr('fill', '#94a3b8')
      .attr('font-weight', '500')
      .attr('letter-spacing', '0.08em')
      .text('PROJECTS');
  }, []);

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
      <h2 className="font-semibold text-gray-800 mb-1">Project Status</h2>
      <p className="text-xs text-gray-400 mb-4">Distribution by status</p>

      <div className="flex items-center gap-6 justify-center">
        {/* Donut */}
        <div className="relative shrink-0">
          <svg ref={svgRef} />
          {tooltip && (
            <div
              className="absolute pointer-events-none z-20 bg-slate-800 text-white text-xs rounded-xl px-3 py-2 shadow-xl -translate-x-1/2 -translate-y-full"
              style={{ left: tooltip.x, top: tooltip.y - 8 }}
            >
              <p className="font-semibold">{tooltip.status}</p>
              <p className="text-slate-300">
                {tooltip.count} project{tooltip.count > 1 ? 's' : ''} · {tooltip.pct}%
              </p>
            </div>
          )}
        </div>

        {/* Legend */}
        <ul className="space-y-2.5">
          {slices.map((s) => (
            <li key={s.status} className="flex items-center gap-2.5">
              <span
                className="w-2.5 h-2.5 rounded-full shrink-0"
                style={{ backgroundColor: s.color }}
              />
              <span className="text-xs text-gray-600 flex-1">{s.status}</span>
              <span className="text-xs font-bold text-gray-800 ml-4">
                {s.count}
                <span className="text-gray-400 font-normal ml-1">
                  ({Math.round((s.count / total) * 100)}%)
                </span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

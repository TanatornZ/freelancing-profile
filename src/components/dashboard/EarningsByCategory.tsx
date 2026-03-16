import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { earningsByCategory } from "../../data/mockData";

interface TooltipState {
  x: number;
  y: number;
  category: string;
  earned: number;
  budget: number;
}

export default function EarningsByCategory() {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [tooltip, setTooltip] = useState<TooltipState | null>(null);
  const [width, setWidth] = useState(360);

  useEffect(() => {
    const ro = new ResizeObserver((entries) =>
      setWidth(entries[0].contentRect.width),
    );
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  const rowH = 38;
  const margin = { top: 8, right: 60, bottom: 8, left: 128 };
  const chartH = earningsByCategory.length * rowH;
  const totalH = chartH + margin.top + margin.bottom;

  useEffect(() => {
    if (!svgRef.current || width === 0) return;

    const W = width - margin.left - margin.right;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();
    svg.attr("width", width).attr("height", totalH);

    const g = svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top + 10})`);

    const maxBudget = d3.max(earningsByCategory, (d) => d.budget) ?? 0;
    const x = d3.scaleLinear().domain([0, maxBudget]).range([0, W]);

    const y = d3
      .scaleBand()
      .domain(earningsByCategory.map((d) => d.category))
      .range([0, chartH])
      .padding(0.35);

    const barH = y.bandwidth();

    // ── Category labels ───────────────────────────────────────────────
    g.selectAll(".label")
      .data(earningsByCategory)
      .enter()
      .append("text")
      .attr("class", "label")
      .attr("x", -10)
      .attr("y", (d) => (y(d.category) ?? 0) + barH / 2)
      .attr("dy", "0.35em")
      .attr("text-anchor", "end")
      .attr("font-size", "11px")
      .attr("fill", "#475569")
      .text((d) => d.category);

    // ── Budget track (background bar) ─────────────────────────────────
    g.selectAll(".bg-bar")
      .data(earningsByCategory)
      .enter()
      .append("rect")
      .attr("class", "bg-bar")
      .attr("x", 0)
      .attr("y", (d) => y(d.category) ?? 0)
      .attr("width", (d) => x(d.budget))
      .attr("height", barH)
      .attr("rx", barH / 2)
      .attr("fill", "#f1f5f9");

    // ── Earned bar (animated) ─────────────────────────────────────────
    g.selectAll(".earn-bar")
      .data(earningsByCategory)
      .enter()
      .append("rect")
      .attr("class", "earn-bar")
      .attr("x", 0)
      .attr("y", (d) => y(d.category) ?? 0)
      .attr("width", 0)
      .attr("height", barH)
      .attr("rx", barH / 2)
      .attr("fill", (_, i) => d3.schemeTableau10[i % 10])
      .style("cursor", "pointer")
      .on("mouseenter", function (event, d) {
        d3.select(this).attr("opacity", 0.85);
        const [mx, my] = d3.pointer(event, svgRef.current);
        setTooltip({
          x: mx,
          y: my,
          category: d.category,
          earned: d.earned,
          budget: d.budget,
        });
      })
      .on("mouseleave", function () {
        d3.select(this).attr("opacity", 1);
        setTooltip(null);
      })
      .transition()
      .delay((_, i) => i * 80)
      .duration(800)
      .ease(d3.easeCubicOut)
      .attr("width", (d) => x(d.earned));

    // ── Value labels ──────────────────────────────────────────────────
    g.selectAll(".val-label")
      .data(earningsByCategory)
      .enter()
      .append("text")
      .attr("class", "val-label")
      .attr("x", (d) => x(d.earned) + 6)
      .attr("y", (d) => (y(d.category) ?? 0) + barH / 2)
      .attr("dy", "0.35em")
      .attr("font-size", "10px")
      .attr("font-weight", "600")
      .attr("fill", "#94a3b8")
      .attr("opacity", 0)
      .text((d) => `$${(d.earned / 1000).toFixed(1)}k`)
      .transition()
      .delay((_, i) => i * 80 + 800)
      .duration(300)
      .attr("opacity", 1);
  }, [width]);

  const totalEarned = earningsByCategory.reduce((s, d) => s + d.earned, 0);
  const totalBudget = earningsByCategory.reduce((s, d) => s + d.budget, 0);

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col h-full">
      <div className="flex flex-col flex-1">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h2 className="font-semibold text-gray-800">
              Earnings by Category
            </h2>
            <p className="text-xs text-gray-400 mt-0.5">Earned vs budget</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-400">Utilization</p>
            <p className="text-sm font-bold text-indigo-600">
              {Math.round((totalEarned / totalBudget) * 100)}%
            </p>
          </div>
        </div>

        <div ref={containerRef} className="relative w-full">
          <svg ref={svgRef} className="w-full overflow-visible" />
          {tooltip && (
            <div
              className="absolute pointer-events-none z-20 bg-slate-800 text-white text-xs rounded-xl px-3 py-2.5 shadow-2xl -translate-x-1/2 -translate-y-full"
              style={{ left: tooltip.x, top: tooltip.y - 10 }}
            >
              <p className="font-bold text-slate-300 mb-1.5">
                {tooltip.category}
              </p>
              <p className="flex items-center gap-2 justify-between">
                <span className="text-slate-400">Earned</span>
                <span className="font-bold">
                  ${tooltip.earned.toLocaleString()}
                </span>
              </p>
              <p className="flex items-center gap-2 justify-between">
                <span className="text-slate-400">Budget</span>
                <span className="font-bold">
                  ${tooltip.budget.toLocaleString()}
                </span>
              </p>
              <div className="mt-1.5 pt-1.5 border-t border-slate-700">
                <p className="flex items-center gap-2 justify-between">
                  <span className="text-slate-400">Used</span>
                  <span className="font-bold text-indigo-300">
                    {Math.round((tooltip.earned / tooltip.budget) * 100)}%
                  </span>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100 text-xs text-gray-500">
        <span>
          Total earned:{" "}
          <span className="font-bold text-gray-700">
            ${(totalEarned / 1000).toFixed(1)}k
          </span>
        </span>
        <span>
          Total budget:{" "}
          <span className="font-bold text-gray-700">
            ${(totalBudget / 1000).toFixed(1)}k
          </span>
        </span>
      </div>
    </div>
  );
}

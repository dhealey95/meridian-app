"use client";

import { useState } from "react";
import StatusBadge from "../components/StatusBadge";
import { services, stablescorecards } from "../components/data";

function scoreColor(score: number): string {
  if (score >= 80) return "bg-green-500";
  if (score >= 60) return "bg-yellow-400";
  return "bg-red-400";
}

function scoreLabel(score: number): string {
  if (score >= 80) return "text-green-700";
  if (score >= 60) return "text-yellow-700";
  return "text-red-600";
}

function averageScore(scores: number[]): number {
  return Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
}

export default function ScorecardsPage() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Scorecards</h1>
        <p className="mt-1 text-sm text-gray-500">
          Service maturity scores across key engineering dimensions.
        </p>
      </div>

      <div className="space-y-3">
        {services.map((svc) => {
          const scorecard = stablescorecards.find(
            (sc) => sc.serviceId === svc.id
          );
          const isOpen = expanded === svc.id;
          const scores = scorecard?.dimensions.map((d) => d.score) ?? [];
          const avg = scores.length > 0 ? averageScore(scores) : 0;

          return (
            <div
              key={svc.id}
              className="rounded-lg border border-gray-200 bg-white overflow-hidden"
            >
              {/* Header row */}
              <button
                onClick={() => setExpanded(isOpen ? null : svc.id)}
                className="w-full px-6 py-4 flex items-center gap-4 hover:bg-gray-50 transition-colors text-left"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3">
                    <span className="font-medium text-gray-900">{svc.name}</span>
                    <StatusBadge status={svc.status} />
                  </div>
                  <div className="mt-0.5 text-xs text-gray-400">
                    {svc.team} · {svc.type}
                  </div>
                </div>

                {/* Overall score bar */}
                <div className="hidden sm:flex items-center gap-3 w-48">
                  <div className="flex-1 h-2 rounded-full bg-gray-100 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all ${scoreColor(avg)}`}
                      style={{ width: `${avg}%` }}
                    />
                  </div>
                  <span className={`text-sm font-semibold w-10 text-right ${scoreLabel(avg)}`}>
                    {avg}%
                  </span>
                </div>

                <span className="text-gray-400 text-sm ml-2">
                  {isOpen ? "▲" : "▼"}
                </span>
              </button>

              {/* Expanded dimensions */}
              {isOpen && scorecard && (
                <div className="border-t border-gray-100 px-6 py-4 space-y-4">
                  {scorecard.dimensions.map((dim) => (
                    <div key={dim.name}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-gray-700">{dim.name}</span>
                        <span
                          className={`text-sm font-semibold ${scoreLabel(dim.score)}`}
                        >
                          {dim.score}%
                        </span>
                      </div>
                      <div className="h-2 rounded-full bg-gray-100 overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-300 ${scoreColor(dim.score)}`}
                          style={{ width: `${dim.score}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

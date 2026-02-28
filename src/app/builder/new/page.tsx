"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  builderTemplates,
  requiredGuardrails,
  optionalGuardrails,
  services,
} from "../../components/data";

const teams = Array.from(new Set(services.map((s) => s.team))).sort();

export default function BuilderNewPage() {
  const searchParams = useSearchParams();
  const templateId = searchParams.get("template") ?? "";
  const template = builderTemplates.find((t) => t.id === templateId);

  const [appName, setAppName] = useState("");
  const [team, setTeam] = useState(teams[0]);
  const [enabledOptional, setEnabledOptional] = useState<Record<string, boolean>>(
    Object.fromEntries(optionalGuardrails.map((g) => [g.id, g.defaultEnabled]))
  );
  const [phase, setPhase] = useState<"form" | "building" | "success">("form");

  function toggleOptional(id: string) {
    setEnabledOptional((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  function handleGenerate() {
    setPhase("building");
    setTimeout(() => setPhase("success"), 1500);
  }

  if (!template) {
    return (
      <div className="flex flex-col items-center justify-center py-24 gap-4">
        <p className="text-gray-500">Template not found.</p>
        <Link href="/builder" className="text-indigo-600 text-sm hover:underline">
          ← Back to App Builder
        </Link>
      </div>
    );
  }

  const templateGuardrails = requiredGuardrails.filter((g) =>
    template.requiredGuardrails.includes(g.id)
  );

  if (phase === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-24 gap-6 text-center">
        <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center text-2xl">
          ✓
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-900">App created!</h2>
          <p className="mt-2 text-sm text-gray-500">
            <span className="font-medium text-gray-700">{appName}</span> was generated from the{" "}
            <span className="font-medium text-gray-700">{template.name}</span> template and is now
            queued for build.
          </p>
        </div>
        <Link
          href="/builder"
          className="inline-flex items-center gap-1.5 rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 transition-colors"
        >
          View in Your Apps →
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6">
        <Link href="/builder" className="text-sm text-indigo-600 hover:underline">
          ← App Builder
        </Link>
        <h1 className="mt-2 text-2xl font-bold text-gray-900">Configure App</h1>
      </div>

      <div className="flex gap-8 items-start">
        {/* Left sticky panel */}
        <aside className="w-72 shrink-0 sticky top-6">
          <div className="rounded-lg border border-gray-200 bg-white p-5 space-y-4">
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-base font-semibold text-gray-900">{template.name}</span>
                <span className="rounded-full bg-indigo-50 text-indigo-700 text-xs px-2 py-0.5">
                  {template.category}
                </span>
              </div>
              <p className="mt-2 text-xs text-gray-500 leading-relaxed">{template.description}</p>
            </div>

            <div>
              <p className="text-xs font-medium text-gray-700 mb-1.5">Stack</p>
              <div className="flex flex-wrap gap-1">
                {template.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-indigo-50 text-indigo-700 text-xs px-2 py-0.5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-medium text-gray-700 mb-1.5">Required Guardrails</p>
              <div className="space-y-1.5">
                {templateGuardrails.map((g) => (
                  <div
                    key={g.id}
                    className="flex items-start gap-1.5 rounded-md bg-gray-50 px-2.5 py-2"
                  >
                    <span className="text-xs mt-px">🔒</span>
                    <div>
                      <p className="text-xs font-medium text-gray-700">{g.label}</p>
                      <p className="text-xs text-gray-400 leading-tight mt-0.5">{g.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-xs text-gray-400">Setup: ~{template.estimatedSetupMins} min</div>
          </div>
        </aside>

        {/* Right config form */}
        <div className="flex-1 rounded-lg border border-gray-200 bg-white p-6 space-y-6">
          {/* App name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="app-name">
              App Name <span className="text-red-500">*</span>
            </label>
            <input
              id="app-name"
              type="text"
              value={appName}
              onChange={(e) => setAppName(e.target.value)}
              placeholder="e.g. my-new-service"
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          {/* Team */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="team-select">
              Team
            </label>
            <select
              id="team-select"
              value={team}
              onChange={(e) => setTeam(e.target.value)}
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            >
              {teams.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          {/* Optional guardrails */}
          <div>
            <p className="text-sm font-medium text-gray-700 mb-3">Optional Guardrails</p>
            <div className="space-y-3">
              {optionalGuardrails.map((g) => {
                const isOn = enabledOptional[g.id] ?? g.defaultEnabled;
                return (
                  <div key={g.id} className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-800">{g.label}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{g.description}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => toggleOptional(g.id)}
                      role="switch"
                      aria-checked={isOn}
                      className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1 ${
                        isOn ? "bg-indigo-600" : "bg-gray-200"
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 mt-0.5 rounded-full bg-white shadow transition-transform duration-200 ${
                          isOn ? "translate-x-4" : "translate-x-0.5"
                        }`}
                      />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Generate button */}
          <div className="pt-2 border-t border-gray-100">
            <button
              type="button"
              onClick={handleGenerate}
              disabled={!appName.trim() || phase === "building"}
              className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              {phase === "building" ? (
                <>
                  <svg
                    className="animate-spin h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  Building…
                </>
              ) : (
                "Generate App"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

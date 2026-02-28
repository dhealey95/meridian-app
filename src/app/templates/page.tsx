import Link from "next/link";
import { builderTemplates } from "../components/data";

export default function TemplatesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Templates</h1>
        <p className="mt-1 text-sm text-gray-500">
          Org-approved starting points with built-in guardrails.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {builderTemplates.map((tmpl) => (
          <div
            key={tmpl.id}
            className="rounded-lg border border-gray-200 bg-white p-5 flex flex-col gap-3"
          >
            <div className="flex items-start justify-between gap-2">
              <span className="text-sm font-semibold text-gray-900">{tmpl.name}</span>
              <span className="shrink-0 rounded-full bg-indigo-50 text-indigo-700 text-xs px-2 py-0.5">
                {tmpl.category}
              </span>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed">{tmpl.description}</p>
            <div className="flex flex-wrap gap-1">
              {tmpl.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-indigo-50 text-indigo-700 text-xs px-2 py-0.5"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="text-xs text-gray-400">Setup: ~{tmpl.estimatedSetupMins} min</div>
            <Link
              href={`/builder/new?template=${tmpl.id}`}
              className="mt-auto inline-flex items-center justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-indigo-700 transition-colors"
            >
              Use Template →
            </Link>
          </div>
        ))}

        {/* New Template tile */}
        <button className="rounded-lg border-2 border-dashed border-gray-200 bg-white p-5 flex flex-col items-center justify-center gap-2 text-center hover:border-indigo-300 hover:bg-indigo-50 transition-colors group">
          <div className="w-9 h-9 rounded-full bg-gray-100 group-hover:bg-indigo-100 flex items-center justify-center text-gray-400 group-hover:text-indigo-500 text-xl font-light transition-colors">
            +
          </div>
          <p className="text-sm font-medium text-gray-700 group-hover:text-indigo-700 transition-colors">New Template</p>
          <p className="text-xs text-gray-400">Define a custom stack with org-approved guardrails.</p>
        </button>
      </div>
    </div>
  );
}

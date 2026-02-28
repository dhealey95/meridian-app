import Link from "next/link";
import {
  builderTemplates,
  builderApps,
  requiredGuardrails,
} from "../components/data";

function AppStatusPill({ status }: { status: "running" | "building" | "failed" }) {
  const styles = {
    running: "bg-green-100 text-green-700",
    building: "bg-yellow-100 text-yellow-700",
    failed: "bg-red-100 text-red-700",
  };
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${styles[status]}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
}

export default function BuilderPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Builder</h1>
        <p className="mt-1 text-sm text-gray-500">
          Start from an org-approved template with built-in guardrails.
        </p>
      </div>

      <div className="rounded-lg border border-gray-200 bg-white overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wide">Name</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wide">Template</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wide">Team</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wide">Status</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wide">Required Guardrails</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wide">Created</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {builderApps.map((app) => {
              const tmpl = builderTemplates.find((t) => t.id === app.templateId);
              const appGuardrails = requiredGuardrails.filter((g) =>
                tmpl?.requiredGuardrails.includes(g.id)
              );
              return (
                <tr key={app.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">{app.name}</td>
                  <td className="px-4 py-3 text-gray-600">{tmpl?.name ?? app.templateId}</td>
                  <td className="px-4 py-3 text-gray-600">{app.team}</td>
                  <td className="px-4 py-3">
                    <AppStatusPill status={app.status} />
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex flex-wrap gap-1">
                      {appGuardrails.map((g) => (
                        <span
                          key={g.id}
                          className="inline-flex items-center gap-0.5 rounded-full bg-gray-100 text-gray-600 text-xs px-2 py-0.5"
                        >
                          🔒 {g.label}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-gray-500">{app.createdAt}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="border-t border-gray-200 px-4 py-2 text-xs text-gray-400">
          {builderApps.length} app{builderApps.length !== 1 ? "s" : ""}
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import StatCard from "./components/StatCard";
import StatusBadge from "./components/StatusBadge";
import { services } from "./components/data";

const recentServices = services.slice(0, 5);

const totalServices = services.length;
const healthyCount = services.filter((s) => s.status === "healthy").length;
const alertCount = services.filter(
  (s) => s.status === "degraded" || s.status === "down"
).length;
const teamCount = new Set(services.map((s) => s.team)).size;

export default function Dashboard() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-1 text-sm text-gray-500">
          Overview of your platform services and health.
        </p>
      </div>

      {/* Stat cards */}
      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Total Services" value={totalServices} />
        <StatCard
          label="Healthy"
          value={healthyCount}
          description="Services operating normally"
        />
        <StatCard
          label="Alerts"
          value={alertCount}
          description="Degraded or down"
        />
        <StatCard label="Teams" value={teamCount} />
      </div>

      {/* Recent services */}
      <div className="mb-8 rounded-lg border border-gray-200 bg-white">
        <div className="border-b border-gray-200 px-6 py-4">
          <h2 className="text-base font-semibold text-gray-900">
            Recent Services
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Type</th>
                <th className="px-6 py-3">Owner</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Last Deployed</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {recentServices.map((svc) => (
                <tr key={svc.id} className="hover:bg-gray-50">
                  <td className="px-6 py-3 font-medium text-gray-900">
                    {svc.name}
                  </td>
                  <td className="px-6 py-3 text-gray-500">{svc.type}</td>
                  <td className="px-6 py-3 text-gray-500">{svc.team}</td>
                  <td className="px-6 py-3">
                    <StatusBadge status={svc.status} />
                  </td>
                  <td className="px-6 py-3 text-gray-500">{svc.lastDeployed}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick actions */}
      <div>
        <h2 className="mb-3 text-base font-semibold text-gray-900">
          Quick Actions
        </h2>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/catalog"
            className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 transition-colors"
          >
            Browse Catalog
          </Link>
          <Link
            href="/radar"
            className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            View Radar
          </Link>
          <Link
            href="/scorecards"
            className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Scorecards
          </Link>
        </div>
      </div>
    </div>
  );
}

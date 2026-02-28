"use client";

import { useState } from "react";
import StatusBadge from "../components/StatusBadge";
import { services, type ServiceType } from "../components/data";

const filterTypes: ("All" | ServiceType)[] = [
  "All",
  "API",
  "Library",
  "Frontend",
  "Data",
];

export default function CatalogPage() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState<"All" | ServiceType>("All");

  const filtered = services.filter((svc) => {
    const matchesSearch =
      svc.name.toLowerCase().includes(search.toLowerCase()) ||
      svc.team.toLowerCase().includes(search.toLowerCase()) ||
      svc.language.toLowerCase().includes(search.toLowerCase());
    const matchesType = activeFilter === "All" || svc.type === activeFilter;
    return matchesSearch && matchesType;
  });

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Service Catalog</h1>
        <p className="mt-1 text-sm text-gray-500">
          Browse and search all registered services.
        </p>
      </div>

      {/* Search + filters */}
      <div className="mb-6 space-y-4">
        <input
          type="text"
          placeholder="Search by name, team, or language…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
        />
        <div className="flex flex-wrap gap-2">
          {filterTypes.map((type) => (
            <button
              key={type}
              onClick={() => setActiveFilter(type)}
              className={`rounded-full px-3 py-1 text-sm font-medium transition-colors ${
                activeFilter === type
                  ? "bg-indigo-600 text-white"
                  : "bg-white border border-gray-300 text-gray-600 hover:bg-gray-50"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="rounded-lg border border-gray-200 bg-white overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
                <th className="px-6 py-3">Service</th>
                <th className="px-6 py-3">Type</th>
                <th className="px-6 py-3">Team</th>
                <th className="px-6 py-3">Language</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Last Deployed</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filtered.length === 0 ? (
                <tr>
                  <td
                    colSpan={6}
                    className="px-6 py-8 text-center text-gray-400"
                  >
                    No services match your search.
                  </td>
                </tr>
              ) : (
                filtered.map((svc) => (
                  <tr key={svc.id} className="hover:bg-gray-50">
                    <td className="px-6 py-3">
                      <div className="font-medium text-gray-900">{svc.name}</div>
                      <div className="text-xs text-gray-400 mt-0.5">{svc.description}</div>
                    </td>
                    <td className="px-6 py-3 text-gray-500">{svc.type}</td>
                    <td className="px-6 py-3 text-gray-500">{svc.team}</td>
                    <td className="px-6 py-3 text-gray-500">{svc.language}</td>
                    <td className="px-6 py-3">
                      <StatusBadge status={svc.status} />
                    </td>
                    <td className="px-6 py-3 text-gray-500">
                      {svc.lastDeployed}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        <div className="border-t border-gray-100 px-6 py-3 text-xs text-gray-400">
          {filtered.length} of {services.length} services
        </div>
      </div>
    </div>
  );
}

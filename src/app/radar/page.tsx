import { radarEntries, type RadarEntry } from "../components/data";

type Ring = "Adopt" | "Trial" | "Assess" | "Hold";
type Quadrant = RadarEntry["quadrant"];

const rings: Ring[] = ["Adopt", "Trial", "Assess", "Hold"];
const quadrants: Quadrant[] = [
  "Languages & Frameworks",
  "Platforms",
  "Tools",
  "Techniques",
];

const ringStyles: Record<Ring, string> = {
  Adopt: "bg-green-100 text-green-700",
  Trial: "bg-blue-100 text-blue-700",
  Assess: "bg-yellow-100 text-yellow-700",
  Hold: "bg-gray-100 text-gray-500",
};

const ringHeaderStyles: Record<Ring, string> = {
  Adopt: "text-green-700 border-green-200",
  Trial: "text-blue-700 border-blue-200",
  Assess: "text-yellow-700 border-yellow-200",
  Hold: "text-gray-500 border-gray-200",
};

export default function RadarPage() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Tech Radar</h1>
        <p className="mt-1 text-sm text-gray-500">
          Our current take on technologies worth tracking.
        </p>
      </div>

      {/* Legend */}
      <div className="mb-6 flex flex-wrap gap-3">
        {rings.map((ring) => (
          <div key={ring} className="flex items-center gap-1.5">
            <span
              className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${ringStyles[ring]}`}
            >
              {ring}
            </span>
          </div>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-4">
        {quadrants.map((quadrant) => (
          <div
            key={quadrant}
            className="rounded-lg border border-gray-200 bg-white overflow-hidden"
          >
            <div className="border-b border-gray-200 px-4 py-3">
              <h2 className="text-sm font-semibold text-gray-900">{quadrant}</h2>
            </div>
            <div className="divide-y divide-gray-100">
              {rings.map((ring) => {
                const entries = radarEntries.filter(
                  (e) => e.quadrant === quadrant && e.ring === ring
                );
                if (entries.length === 0) return null;
                return (
                  <div key={ring} className="px-4 py-3">
                    <h3
                      className={`mb-2 text-xs font-semibold uppercase tracking-wide border-b pb-1 ${ringHeaderStyles[ring]}`}
                    >
                      {ring}
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {entries.map((entry) => (
                        <span
                          key={entry.name}
                          className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${ringStyles[ring]}`}
                        >
                          {entry.name}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

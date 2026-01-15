import { trendVisuals } from "../../utils/trendVisuals";

export default function TrendIndicator({ trend }) {
  if (!trend) return null;

  const visual = trendVisuals[trend];
  const Icon = visual.icon;

  return (
    <div className={`flex items-center gap-1 text-xs font-medium ${visual.color}`}>
      <Icon className="w-4 h-4" aria-hidden />
      <span>{visual.label}</span>
    </div>
  );
}

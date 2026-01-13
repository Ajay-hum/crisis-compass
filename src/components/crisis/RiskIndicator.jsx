export default function RiskIndicator({ severity }) {
  const levels = {
    Low: "w-1/3 bg-green-500",
    Medium: "w-2/3 bg-yellow-400",
    High: "w-full bg-red-500",
  };

  return (
    <div className="mt-3">
      <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-500 ${levels[severity]}`}
        />
      </div>
      <p className="mt-1 text-xs text-slate-500">
        Risk level: {severity}
      </p>
    </div>
  );
}

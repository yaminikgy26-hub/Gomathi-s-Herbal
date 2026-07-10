const StatCard = ({ label, value, trend, negative = false }) => (
  <div className="bg-white border border-black/10 rounded-lg p-5 flex flex-col gap-3">
    <span className={`text-xs font-mono font-semibold ${negative ? "text-brand-danger" : "text-brand-sage"}`}>
      {negative ? "▼" : "▲"} {trend}
    </span>
    <span className="font-serif text-2xl font-semibold text-brand-ink">{value}</span>
    <span className="text-sm text-brand-ink/60">{label}</span>
  </div>
);

export default StatCard;
import { useNavigate } from "react-router-dom";

const SidebarButton = ({ to, icon: Icon, label, variant = "default" }) => {
  const navigate = useNavigate();

  const variantClasses =
    variant === "solid"
      ? "bg-brand-gold text-brand-leaf font-semibold hover:bg-brand-goldLight"
      : "text-brand-cream/80 border border-white/10 hover:bg-white/5 hover:text-brand-cream";

  return (
    <button
      type="button"
      onClick={() => navigate(to)}
      className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-md text-sm transition-colors ${variantClasses}`}
    >
      {Icon && <Icon size={17} />}
      {label}
    </button>
  );
};

export default SidebarButton;
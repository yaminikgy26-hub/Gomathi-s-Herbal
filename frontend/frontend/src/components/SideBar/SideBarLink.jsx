import { NavLink } from "react-router-dom";

const SidebarLink = ({ to, icon: Icon, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center gap-3 px-4 py-2.5 rounded-md text-sm font-medium border-l-2 transition-colors ${
        isActive
          ? "bg-brand-gold/15 text-brand-goldLight border-brand-goldLight font-semibold"
          : "text-brand-cream/80 border-transparent hover:bg-white/5 hover:text-brand-cream"
      }`
    }
  >
    {Icon && <Icon size={17} />}
    {label}
  </NavLink>
);

export default SidebarLink;
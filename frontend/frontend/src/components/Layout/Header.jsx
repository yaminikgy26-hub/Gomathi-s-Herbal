import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown, UserCircle, Settings, LogOut } from "lucide-react";
import { logoutUser } from "../../api/authService";

const Header = ({ title, welcomeName, userInitials = "SA", profilePath = "/super-admin/profile", loginPath = "/login" }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setMenuOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    logoutUser();
    setMenuOpen(false);
    navigate(loginPath);
  };

  return (
    <header className="h-[72px] bg-white border-b border-black/10 flex items-center justify-between px-8 sticky top-0 z-20">
      <h1 className="font-serif italic text-lg font-semibold text-brand-ink">{title}</h1>

      <div className="flex items-center gap-5">
        <span className="text-sm text-brand-ink/70">
          Welcome, <strong className="text-brand-ink font-semibold">{welcomeName}</strong>
        </span>

        <div className="relative" ref={menuRef}>
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="flex items-center gap-2 pl-1.5 pr-3 py-1.5 rounded-full border border-black/10 hover:border-brand-gold hover:bg-brand-gold/5 transition-colors"
          >
            <span className="w-8 h-8 rounded-full bg-brand-clay/10 border border-brand-clay text-brand-clay flex items-center justify-center text-xs font-mono font-semibold">
              {userInitials}
            </span>
            <ChevronDown size={14} className={`text-black/40 transition-transform ${menuOpen ? "rotate-180" : ""}`} />
          </button>

          {menuOpen && (
            <div className="absolute right-0 mt-2 w-52 bg-white border border-black/10 rounded-lg shadow-lg p-2 z-30">
              <button
                onClick={() => {
                  setMenuOpen(false);
                  navigate(profilePath);
                }}
                className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm hover:bg-brand-paper text-left"
              >
                <UserCircle size={16} className="text-brand-clay" /> Profile
              </button>
              <button className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm hover:bg-brand-paper text-left">
                <Settings size={16} className="text-brand-clay" /> Account Settings
              </button>
              <div className="h-px bg-black/10 my-1" />
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm hover:bg-brand-paper text-left text-brand-danger"
              >
                <LogOut size={16} /> Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
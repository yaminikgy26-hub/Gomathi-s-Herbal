const Sidebar = ({ children, footer }) => {
  return (
    <aside className="w-64 flex-shrink-0 h-screen sticky top-0 bg-brand-leaf text-brand-cream flex flex-col border-r border-black/10">
      <div className="px-6 py-6 border-b border-white/10">
        <span className="font-serif text-xl font-semibold">
          Gomathi's <em className="text-brand-goldLight font-normal italic">Herbals</em>
        </span>
      </div>
      <nav className="flex-1 overflow-y-auto px-3 py-5 space-y-1">{children}</nav>
      {footer && <div className="px-4 py-4 border-t border-white/10">{footer}</div>}
    </aside>
  );
};

export default Sidebar;
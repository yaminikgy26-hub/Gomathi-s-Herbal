import Header from "./Header";

const Layout = ({ sidebar, pageTitle, welcomeName, userInitials, profilePath, loginPath, children }) => {
  return (
    <div className="flex min-h-screen bg-brand-cream">
      {sidebar}
      <div className="flex-1 flex flex-col min-w-0">
        <Header title={pageTitle} welcomeName={welcomeName} userInitials={userInitials} profilePath={profilePath} loginPath={loginPath} />
        <main className="flex-1 p-8 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
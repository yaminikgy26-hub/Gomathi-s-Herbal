import { useState } from "react";
import Layout from "../components/Layout/Layout";

const SettingsPage = ({ sidebar, welcomeName, userInitials, profilePath }) => {
  const [storeName, setStoreName] = useState("Gomathi's Herbals");
  const [supportEmail, setSupportEmail] = useState("hello@gomathisherbals.com");
  const [saved, setSaved] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <Layout sidebar={sidebar} pageTitle="Settings" welcomeName={welcomeName} userInitials={userInitials} profilePath={profilePath} loginPath="/login">
      <form onSubmit={handleSubmit} className="bg-white border border-black/10 rounded-lg p-7 max-w-xl space-y-4">
        <h3 className="font-serif italic text-lg font-semibold">Store settings</h3>
        <div>
          <label className="block text-xs font-semibold text-brand-ink/70 mb-1">Store name</label>
          <input value={storeName} onChange={(e) => setStoreName(e.target.value)} className="w-full px-3 py-2.5 border border-black/15 rounded-md text-sm" />
        </div>
        <div>
          <label className="block text-xs font-semibold text-brand-ink/70 mb-1">Support email</label>
          <input value={supportEmail} onChange={(e) => setSupportEmail(e.target.value)} className="w-full px-3 py-2.5 border border-black/15 rounded-md text-sm" />
        </div>
        <button type="submit" className="px-6 py-2.5 rounded-md bg-brand-leaf text-brand-cream font-semibold text-sm hover:bg-brand-leaf2">Save settings</button>
        {saved && <p className="text-xs text-brand-clay">Settings saved.</p>}
      </form>
    </Layout>
  );
};

export default SettingsPage;
import { useState } from "react";
import Layout from "../components/Layout/Layout";
import SuperAdminSidebar from "../components/SideBar/SuperAdminSidebar";

const SuperAdminProfile = () => {
  const [profile, setProfile] = useState({
    fullName: "K Gomathi",
    email: "gomathibeautyshairspa2013@gmail.com",
    phone: "+91 73586 77706",
  });
  const [saved, setSaved] = useState(false);

  const handleChange = (e) => setProfile((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <Layout sidebar={<SuperAdminSidebar />} pageTitle="Super Admin Profile" welcomeName="Super Admin" userInitials="SA" profilePath="/super-admin/profile" loginPath="/login">
      <div className="grid grid-cols-[0.85fr_1.15fr] gap-6 items-start">
        <div className="bg-white border border-black/10 rounded-lg p-8 text-center">
          <div className="w-24 h-24 rounded-full bg-brand-clay/10 border border-brand-clay text-brand-clay flex items-center justify-center font-mono text-xl font-semibold mx-auto mb-4">GS</div>
          <h3 className="font-serif italic text-xl font-semibold">{profile.fullName}</h3>
          <p className="text-sm text-brand-ink/55">{profile.email}</p>
          <span className="inline-block mt-3 px-3 py-1 rounded-full text-xs font-mono uppercase bg-brand-clay/10 text-brand-clay">Super Admin</span>
        </div>

        <form onSubmit={handleSubmit} className="bg-white border border-black/10 rounded-lg p-7 space-y-4">
          <h3 className="font-serif italic text-lg font-semibold">Personal information</h3>
          <div>
            <label className="block text-xs font-semibold text-brand-ink/70 mb-1">Full name</label>
            <input name="fullName" value={profile.fullName} onChange={handleChange} className="w-full px-3 py-2.5 border border-black/15 rounded-md text-sm" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-brand-ink/70 mb-1">Email</label>
            <input name="email" value={profile.email} onChange={handleChange} className="w-full px-3 py-2.5 border border-black/15 rounded-md text-sm" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-brand-ink/70 mb-1">Phone</label>
            <input name="phone" value={profile.phone} onChange={handleChange} className="w-full px-3 py-2.5 border border-black/15 rounded-md text-sm" />
          </div>
          <button type="submit" className="px-6 py-2.5 rounded-md bg-brand-leaf text-brand-cream font-semibold text-sm hover:bg-brand-leaf2">Save changes</button>
          {saved && <p className="text-xs text-brand-clay">Profile updated successfully.</p>}
        </form>
      </div>
    </Layout>
  );
};

export default SuperAdminProfile;
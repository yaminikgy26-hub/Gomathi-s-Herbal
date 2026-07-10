// import Layout from "../components/Layout/Layout";
// import AdminSidebar from "../components/Sidebar/AdminSidebar";
// import StatCard from "../components/dashboard/StatsCard";
// import OrdersTable from "../components/dashboard/OrdersTable";

// const PENDING_ORDERS = [
//   { id: "#GH-1041", customer: "Arun K.", amount: 279, status: "pending" },
//   { id: "#GH-1037", customer: "Rekha P.", amount: 329, status: "pending" },
//   { id: "#GH-1035", customer: "Suresh M.", amount: 149, status: "pending" },
// ];

// const AdminDashboard = () => {
//   return (
//     <Layout sidebar={<AdminSidebar />} pageTitle="Dashboard" welcomeName="Admin" userInitials="AD" profilePath="/login" loginPath="/login">
//       <div className="grid grid-cols-4 gap-5 mb-8">
//         <StatCard label="Orders this week" value="318" trend="6.3%" />
//         <StatCard label="Pending shipments" value="14" trend="2" negative />
//         <StatCard label="Low-stock products" value="5" trend="1" negative />
//         <StatCard label="Registered customers" value="3,942" trend="42 new" />
//       </div>
//       <OrdersTable title="Orders awaiting fulfilment" orders={PENDING_ORDERS} />
//     </Layout>
//   );
// };

// export default AdminDashboard;


import { useState } from "react";
import Layout from "../components/Layout/Layout";
import Modal from "../components/common/Modal";
import SuperAdminSidebar from "../components/SideBar/SuperAdminSidebar";

const INITIAL_ADMINS = [
  { id: 1, name: "Store Admin", email: "admin@gomathisherbals.com", phone: "+91 90000 11111" },
];
const emptyForm = { name: "", email: "", phone: "" };

const AdminsPage = () => {
  const [admins, setAdmins] = useState(INITIAL_ADMINS);
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState(emptyForm);

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleAdd = (e) => {
    e.preventDefault();
    setAdmins((prev) => [...prev, { id: Date.now(), ...form }]);
    setForm(emptyForm);
    setModalOpen(false);
  };

  const handleDelete = (id) => {
    if (window.confirm("Remove this admin's access? They will no longer be able to log in.")) {
      setAdmins((prev) => prev.filter((a) => a.id !== id));
    }
  };

  return (
    <Layout sidebar={<SuperAdminSidebar />} pageTitle="Admins" welcomeName="Super Admin" userInitials="SA" profilePath="/super-admin/profile" loginPath="/login">
      <div className="bg-white border border-black/10 rounded-lg overflow-hidden">
        <div className="flex justify-between items-center px-6 py-4 border-b border-black/10">
          <h3 className="font-serif italic text-base font-semibold">Admin accounts</h3>
          <button onClick={() => setModalOpen(true)} className="px-4 py-2 rounded-md bg-brand-leaf text-brand-cream text-xs font-semibold hover:bg-brand-leaf2 transition-colors">
            + Add admin
          </button>
        </div>
        <table className="w-full text-sm">
          <thead className="bg-brand-paper text-brand-ink/50 text-xs uppercase">
            <tr>
              <th className="text-left px-6 py-3">Name</th>
              <th className="text-left px-6 py-3">Email</th>
              <th className="text-left px-6 py-3">Phone</th>
              <th className="text-right px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {admins.map((a) => (
              <tr key={a.id} className="border-t border-black/10 hover:bg-brand-gold/5 transition-colors">
                <td className="px-6 py-3 font-medium">{a.name}</td>
                <td className="px-6 py-3 text-brand-ink/70">{a.email}</td>
                <td className="px-6 py-3">{a.phone}</td>
                <td className="px-6 py-3 text-right">
                  <button onClick={() => handleDelete(a.id)} className="text-xs font-semibold text-brand-danger hover:text-red-700">Delete</button>
                </td>
              </tr>
            ))}
            {admins.length === 0 && (
              <tr><td colSpan={4} className="text-center px-6 py-8 text-brand-ink/50">No admins yet.</td></tr>
            )}
          </tbody>
        </table>
      </div>

      {modalOpen && (
        <Modal title="Add admin" onClose={() => setModalOpen(false)}>
          <form onSubmit={handleAdd} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-brand-ink/70 mb-1">Full name</label>
              <input name="name" required value={form.name} onChange={handleChange}
                className="w-full px-3 py-2.5 border border-black/15 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/40" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-brand-ink/70 mb-1">Email</label>
              <input type="email" name="email" required value={form.email} onChange={handleChange}
                className="w-full px-3 py-2.5 border border-black/15 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/40" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-brand-ink/70 mb-1">Phone</label>
              <input name="phone" required value={form.phone} onChange={handleChange}
                className="w-full px-3 py-2.5 border border-black/15 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/40" />
            </div>
            <button type="submit" className="w-full py-2.5 rounded-md bg-brand-gold text-brand-leaf font-semibold text-sm hover:bg-brand-goldLight transition-colors">
              Add admin
            </button>
          </form>
        </Modal>
      )}
    </Layout>
  );
};

export default AdminsPage;
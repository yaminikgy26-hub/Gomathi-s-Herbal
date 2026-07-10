import Layout from "../components/Layout/Layout";

const CUSTOMERS = [
  { name: "Priya R.", email: "priya@example.com", orders: 6, joined: "Feb 2026" },
  { name: "Arun K.", email: "arun@example.com", orders: 3, joined: "Mar 2026" },
  { name: "Meena S.", email: "meena@example.com", orders: 11, joined: "Jan 2026" },
  { name: "Karthik V.", email: "karthik@example.com", orders: 1, joined: "Jun 2026" },
];

const CustomersPage = ({ sidebar, welcomeName, userInitials, profilePath }) => {
  return (
    <Layout sidebar={sidebar} pageTitle="Customers" welcomeName={welcomeName} userInitials={userInitials} profilePath={profilePath} loginPath="/login">
      <div className="bg-white border border-black/10 rounded-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-black/10">
          <h3 className="font-serif italic text-base font-semibold">Registered customers</h3>
        </div>
        <table className="w-full text-sm">
          <thead className="bg-brand-paper text-brand-ink/50 text-xs uppercase">
            <tr>
              <th className="text-left px-6 py-3">Name</th>
              <th className="text-left px-6 py-3">Email</th>
              <th className="text-left px-6 py-3">Orders</th>
              <th className="text-left px-6 py-3">Joined</th>
            </tr>
          </thead>
          <tbody>
            {CUSTOMERS.map((c) => (
              <tr key={c.email} className="border-t border-black/10 hover:bg-brand-gold/5">
                <td className="px-6 py-3 font-medium">{c.name}</td>
                <td className="px-6 py-3 text-brand-ink/70">{c.email}</td>
                <td className="px-6 py-3">{c.orders}</td>
                <td className="px-6 py-3">{c.joined}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default CustomersPage;
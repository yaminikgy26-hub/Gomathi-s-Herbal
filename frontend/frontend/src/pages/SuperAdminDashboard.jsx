// import Layout from "../components/Layout/Layout";
// import SuperAdminSidebar from "../components/SideBar/SuperAdminSidebar";
// import StatCard from "../components/DashBoard/StatCard";
// import OrdersTable from "../components/DashBoard/OrdersTable";

// const RECENT_ORDERS = [
//   { id: "#GH-1042", customer: "Priya R.", amount: 447, status: "paid" },
//   { id: "#GH-1041", customer: "Arun K.", amount: 279, status: "pending" },
//   { id: "#GH-1040", customer: "Meena S.", amount: 329, status: "paid" },
//   { id: "#GH-1039", customer: "Karthik V.", amount: 199, status: "cancelled" },
// ];

// const SuperAdminDashboard = () => {
//   return (
//     <Layout sidebar={<SuperAdminSidebar />} pageTitle="Dashboard" welcomeName="Super Admin" userInitials="SA" profilePath="/super-admin/profile" loginPath="/login">
//       <div className="grid grid-cols-4 gap-5 mb-8">
//         <StatCard label="Revenue this month" value="₹4,82,300" trend="12.4%" />
//         <StatCard label="Total orders" value="1,284" trend="8.1%"/>
//         <StatCard label="Products live" value="63" trend="3 new" />
//         <StatCard label="Registered customers" value="3,942" trend="1.2%" negative />
//       </div>
//      <OrdersTable orders={RECENT_ORDERS} />
//    </Layout>
//   );
// };

// export default SuperAdminDashboard;

// 

import Layout from "../components/Layout/Layout";
import SuperAdminSidebar from "../components/SideBar/SuperAdminSidebar";
import StatCard from "../components/DashBoard/StatCard";
import OrdersTable from "../components/DashBoard/OrdersTable";
import { useNavigate } from "react-router-dom";

const RECENT_ORDERS = [
  {
    id: "#GH-1042",
    customer: "Priya R.",
    amount: 447,
    status: "Paid",
  },
  {
    id: "#GH-1041",
    customer: "Arun K.",
    amount: 279,
    status: "Pending",
  },
  {
    id: "#GH-1040",
    customer: "Meena S.",
    amount: 329,
    status: "Paid",
  },
  {
    id: "#GH-1039",
    customer: "Karthik V.",
    amount: 199,
    status: "Cancelled",
  },
];

const SuperAdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <Layout
      sidebar={<SuperAdminSidebar />}
      pageTitle="Super Admin Dashboard"
      welcomeName="Super Admin"
      userInitials="SA"
      profilePath="/super-admin/profile"
      loginPath="/login"
    >
      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">

        <StatCard
          label="Total Admins"
          value="5"
          trend="2 New"
        />

        <StatCard
          label="Customers"
          value="152"
          trend="10 New"
        />

        <StatCard
          label="Products"
          value="84"
          trend="4 Added"
        />

        <StatCard
          label="Orders"
          value="426"
          trend="15 Today"
        />

      </div>

      {/* Quick Actions */}
      <div className="bg-white border border-black/10 rounded-lg p-6 mb-8">

        <h2 className="font-serif text-xl font-semibold text-brand-ink mb-5">
          Quick Actions
        </h2>

        <div className="flex flex-wrap gap-4">

          <button
            onClick={() => navigate("/super-admin/admins")}
            className="px-5 py-3 rounded-lg bg-brand-clay text-white hover:opacity-90 transition"
          >
            Manage Admins
          </button>

          <button
            onClick={() => navigate("/super-admin/products")}
            className="px-5 py-3 rounded-lg bg-brand-sage text-white hover:opacity-90 transition"
          >
            Manage Products
          </button>

          <button
            onClick={() => navigate("/super-admin/orders")}
            className="px-5 py-3 rounded-lg bg-brand-gold text-brand-ink hover:opacity-90 transition"
          >
            View Orders
          </button>

          <button
            onClick={() => navigate("/super-admin/customers")}
            className="px-5 py-3 rounded-lg bg-brand-ink text-white hover:opacity-90 transition"
          >
            Customers
          </button>

        </div>

      </div>

      {/* Recent Orders */}
      <div>

        <h2 className="font-serif text-xl font-semibold text-brand-ink mb-5">
          Recent Orders
        </h2>

        <OrdersTable orders={RECENT_ORDERS} />

      </div>

    </Layout>
  );
};

export default SuperAdminDashboard;
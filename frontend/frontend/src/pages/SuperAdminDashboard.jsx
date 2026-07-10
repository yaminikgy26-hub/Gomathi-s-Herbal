import Layout from "../components/Layout/Layout";
import SuperAdminSidebar from "../components/SideBar/SuperAdminSidebar";
import StatCard from "../components/DashBoard/StatCard";
import OrdersTable from "../components/DashBoard/OrdersTable";

const RECENT_ORDERS = [
  { id: "#GH-1042", customer: "Priya R.", amount: 447, status: "paid" },
  { id: "#GH-1041", customer: "Arun K.", amount: 279, status: "pending" },
  { id: "#GH-1040", customer: "Meena S.", amount: 329, status: "paid" },
  { id: "#GH-1039", customer: "Karthik V.", amount: 199, status: "cancelled" },
];

const SuperAdminDashboard = () => {
  return (
    <Layout sidebar={<SuperAdminSidebar />} pageTitle="Dashboard" welcomeName="Super Admin" userInitials="SA" profilePath="/super-admin/profile" loginPath="/login">
      <div className="grid grid-cols-4 gap-5 mb-8">
        <StatCard label="Revenue this month" value="₹4,82,300" trend="12.4%" />
        <StatCard label="Total orders" value="1,284" trend="8.1%"/>
        <StatCard label="Products live" value="63" trend="3 new" />
        <StatCard label="Registered customers" value="3,942" trend="1.2%" negative />
      </div>
     <OrdersTable orders={RECENT_ORDERS} />
   </Layout>
  );
};

export default SuperAdminDashboard;
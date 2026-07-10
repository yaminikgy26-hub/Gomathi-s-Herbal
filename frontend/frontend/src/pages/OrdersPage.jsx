import Layout from "../components/Layout/Layout";
import OrdersTable from "../components/DashBoard/OrdersTable";

const ALL_ORDERS = [
  { id: "#GH-1042", customer: "Priya R.", amount: 447, status: "paid" },
  { id: "#GH-1041", customer: "Arun K.", amount: 279, status: "pending" },
  { id: "#GH-1040", customer: "Meena S.", amount: 329, status: "paid" },
  { id: "#GH-1039", customer: "Karthik V.", amount: 199, status: "cancelled" },
  { id: "#GH-1038", customer: "Divya N.", amount: 389, status: "paid" },
];

const OrdersPage = ({ sidebar, welcomeName, userInitials, profilePath }) => {
  return (
    <Layout sidebar={sidebar} pageTitle="Orders" welcomeName={welcomeName} userInitials={userInitials} profilePath={profilePath} loginPath="/login">
      <OrdersTable title="All orders" orders={ALL_ORDERS} />
    </Layout>
  );
};

export default OrdersPage;
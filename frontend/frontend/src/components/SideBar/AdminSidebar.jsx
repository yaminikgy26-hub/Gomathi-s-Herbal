import { LayoutDashboard, ShoppingBag, Package, Users, Settings, LogIn } from "lucide-react";
import Sidebar from "./SideBar";
import SidebarLink from "./SideBarLink";
import SidebarButton from "./SideBarButton";

const AdminSidebar = () => {
  return (
    <Sidebar footer={<SidebarButton to="/login" icon={LogIn} label="Login" variant="solid" />}>
      <SidebarLink to="/admin/dashboard" icon={LayoutDashboard} label="Dashboard" />
      <SidebarLink to="/admin/orders" icon={ShoppingBag} label="Orders" />
      <SidebarLink to="/admin/products" icon={Package} label="Products" />
      <SidebarLink to="/admin/customers" icon={Users} label="Customers" />
      <SidebarLink to="/admin/settings" icon={Settings} label="Settings" />
    </Sidebar>
  );
};

export default AdminSidebar;
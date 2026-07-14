import { LayoutDashboard, ShoppingBag, Package, Users, Settings, UserCircle } from "lucide-react";
import Sidebar from "./SideBar";
import SidebarLink from "./SideBarLink";
import SidebarButton from "./SideBarButton";

const SuperAdminSidebar = () => {
  return (
    <Sidebar>
      <SidebarLink to="/super-admin/SuperAdminDashboard" icon={LayoutDashboard} label="Dashboard" />
      <SidebarLink to="/super-admin/orders" icon={ShoppingBag} label="Orders" />
      <SidebarLink to="/super-admin/products" icon={Package} label="Products" />
      <SidebarLink to="/super-admin/customers" icon={Users} label="Customers" />
      <SidebarLink to="/super-admin/settings" icon={Settings} label="Settings" />

      <div className="pt-3 mt-3 border-t border-white/10">
        <SidebarButton to="/super-admin/profile" icon={UserCircle} label="Profile" />
      </div>
    </Sidebar>
  );
};

export default SuperAdminSidebar;
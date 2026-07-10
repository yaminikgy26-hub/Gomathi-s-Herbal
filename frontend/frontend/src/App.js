// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// import LandingPage from "./pages/landing-page/landing-page";
// import LoginPage from "./pages/login/LoginPage";
// import RegisterPage from "./pages/register/RegisterPage";

// import SuperAdminDashboard from "./pages/SuperAdminDashboard";
// import SuperAdminProfile from "./pages/SuperAdminProfile";
// import AdminDashboard from "./pages/AdminDashboard";


// import OrdersPage from "./pages/OrdersPage";
// import ProductsPage from "./pages/ProductsPage";
// import CustomersPage from "./pages/CustomersPage";
// import SettingsPage from "./pages/SettingsPage";

// import SuperAdminSidebar from "./components/SideBar/SuperAdminSidebar";
// import AdminSidebar from "./components/SideBar/AdminSidebar";


// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/register" element={<RegisterPage />} />

//         {/* Super Admin */}
//         <Route path="/super-admin/SuperAdminDashboard" element={<SuperAdminDashboard />} />
//         <Route path="/super-admin/profile" element={<SuperAdminProfile />} />
//         {/* <Route path="/super-admin/admins" element={<AdminsPage />} /> */}
//         <Route
//           path="/super-admin/orders"
//           element={<OrdersPage sidebar={<SuperAdminSidebar />} welcomeName="Super Admin" userInitials="SA" profilePath="/super-admin/profile" />}
//         />
//         <Route
//           path="/super-admin/products"
//           element={<ProductsPage sidebar={<SuperAdminSidebar />} welcomeName="Super Admin" userInitials="SA" profilePath="/super-admin/profile" />}
//         />
//         <Route
//           path="/super-admin/customers"
//           element={<CustomersPage sidebar={<SuperAdminSidebar />} welcomeName="Super Admin" userInitials="SA" profilePath="/super-admin/profile" />}
//         />
//         <Route
//           path="/super-admin/settings"
//           element={<SettingsPage sidebar={<SuperAdminSidebar />} welcomeName="Super Admin" userInitials="SA" profilePath="/super-admin/profile" />}
//         />

//         {/* Admin */}
//         <Route path="/admin/AdminDashboard" element={<AdminDashboard />} />
//         <Route
//           path="/admin/orders"
//           element={<OrdersPage sidebar={<AdminSidebar />} welcomeName="Admin" userInitials="AD" profilePath="/login" />}
//         />
//         <Route
//           path="/admin/Products"
//           element={<ProductsPage sidebar={<AdminSidebar />} welcomeName="Admin" userInitials="AD" profilePath="/login" />}
//         />
//         <Route
//           path="/admin/customers"
//           element={<CustomersPage sidebar={<AdminSidebar />} welcomeName="Admin" userInitials="AD" profilePath="/login" />}
//         />
//         <Route
//           path="/admin/settings"
//           element={<SettingsPage sidebar={<AdminSidebar />} welcomeName="Admin" userInitials="AD" profilePath="/login" />}
//         />

//         <Route path="*" element={<Navigate to="/login" replace />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import LandingPage from "./pages/landing-page/landing-page";
import LoginPage from "./pages/login/LoginPage";
import RegisterPage from "./pages/register/RegisterPage";
import UserRegisterPage from "./pages/user/UserRegisterPage";
import UserProfilePage from "./pages/user/UserProfilePage";

import SuperAdminDashboard from "./pages/SuperAdminDashboard";
import SuperAdminProfile from "./pages/SuperAdminProfile";
import AdminDashboard from "./pages/AdminDashboard";


import OrdersPage from "./pages/OrdersPage";
import ProductsPage from "./pages/ProductsPage";
import CustomersPage from "./pages/CustomersPage";
import SettingsPage from "./pages/SettingsPage";

import SuperAdminSidebar from "./components/SideBar/SuperAdminSidebar";
import AdminSidebar from "./components/SideBar/AdminSidebar";
import ProtectedRoute from "./components/Auth/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<UserRegisterPage />} />
        <Route path="/super-admin/register" element={<RegisterPage />} />

        {/* Customer (protected) */}
        <Route
          path="/user/profile"
          element={
            <ProtectedRoute allowedRoles={["customer"]}>
              <UserProfilePage />
            </ProtectedRoute>
          }
        />

        {/* Super Admin (protected) */}
        <Route
          path="/super-admin/SuperAdminDashboard"
          element={
            <ProtectedRoute allowedRoles={["super_admin"]}>
              <SuperAdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/super-admin/profile"
          element={
            <ProtectedRoute allowedRoles={["super_admin"]}>
              <SuperAdminProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/super-admin/admins"
          element={
            <ProtectedRoute allowedRoles={["super_admin"]}>
              {/* <AdminsPage /> */}
            </ProtectedRoute>
          }
        />
        <Route
          path="/super-admin/orders"
          element={
            <ProtectedRoute allowedRoles={["super_admin"]}>
              <OrdersPage SideBar={<SuperAdminSidebar />} welcomeName="Super Admin" userInitials="SA" profilePath="/super-admin/profile" />
            </ProtectedRoute>
          }
        />
        <Route
          path="/super-admin/products"
          element={
            <ProtectedRoute allowedRoles={["super_admin"]}>
              <ProductsPage sidebar={<SuperAdminSidebar />} welcomeName="Super Admin" userInitials="SA" profilePath="/super-admin/profile" />
            </ProtectedRoute>
          }
        />
        <Route
          path="/super-admin/customers"
          element={
            <ProtectedRoute allowedRoles={["super_admin"]}>
              <CustomersPage sidebar={<SuperAdminSidebar />} welcomeName="Super Admin" userInitials="SA" profilePath="/super-admin/profile" />
            </ProtectedRoute>
          }
        />
        <Route
          path="/super-admin/settings"
          element={
            <ProtectedRoute allowedRoles={["super_admin"]}>
              <SettingsPage sidebar={<SuperAdminSidebar />} welcomeName="Super Admin" userInitials="SA" profilePath="/super-admin/profile" />
            </ProtectedRoute>
          }
        />

        {/* Admin (protected) */}
        <Route
          path="/admin/AdminDashboard"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/orders"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <OrdersPage sidebar={<AdminSidebar />} welcomeName="Admin" userInitials="AD" profilePath="/login" />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/products"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <ProductsPage sidebar={<AdminSidebar />} welcomeName="Admin" userInitials="AD" profilePath="/login" />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/customers"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <CustomersPage sidebar={<AdminSidebar />} welcomeName="Admin" userInitials="AD" profilePath="/login" />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/settings"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <SettingsPage sidebar={<AdminSidebar />} welcomeName="Admin" userInitials="AD" profilePath="/login" />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
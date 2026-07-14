// import { Navigate } from "react-router-dom";

// const ProtectedRoute = ({ children, allowedRoles }) => {
//   const token = localStorage.getItem("access_token");
//   const role = localStorage.getItem("user_role");

//   if (!token) {
//     return <Navigate to="/login" replace />;
//   }
//   if (allowedRoles && !allowedRoles.includes(role)) {
//     return <Navigate to="/login" replace />;
//   }
//   return children;
// };

// export default ProtectedRoute;

import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const isAuthenticated = localStorage.getItem("is_authenticated") === "true";
  const role = localStorage.getItem("user_role");

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  if (allowedRoles && !allowedRoles.includes(role)) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;
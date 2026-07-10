// import api from "../services/api";

// export const loginUser = async ({ email, password }) => {
//   const { data } = await api.post("/auth/login/", { email, password });
//   localStorage.setItem("access_token", data.access);
//   localStorage.setItem("user_role", data.user.role); // "super_admin" | "admin"
//   return data;
// };

// export const registerSuperAdmin = async (payload) => {
//   const { data } = await api.post("/auth/register/super-admin/", payload);
//   return data;
// };

// export const logoutUser = () => {
//   localStorage.removeItem("access_token");
//   localStorage.removeItem("user_role");
// };

// export const getCurrentUser = () => ({
//   role: localStorage.getItem("user_role"),
//   token: localStorage.getItem("access_token"),
// });

import api from "../services/api";

export const loginUser = async ({ email, password }) => {
  const { data } = await api.post("/auth/login/", { email, password });
  localStorage.setItem("access_token", data.access);
  localStorage.setItem("user_role", data.user.role); // "customer" | "admin" | "super_admin"
  localStorage.setItem("user_name", data.user.full_name || data.user.name || "");
  return data;
};

export const registerCustomer = async (payload) => {
  const { data } = await api.post("/auth/register/customer/", payload);
  return data;
};

export const registerSuperAdmin = async (payload) => {
  const { data } = await api.post("/auth/register/super-admin/", payload);
  return data;
};

export const logoutUser = () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("user_role");
  localStorage.removeItem("user_name");
};

export const getCurrentUser = () => ({
  role: localStorage.getItem("user_role"),
  name: localStorage.getItem("user_name"),
  token: localStorage.getItem("access_token"),
});
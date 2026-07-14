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

// 

// import {api} from "../services/api";

// export const loginUser = async ({ email, password }) => {
//   const { data } = await api.post("/auth/login/", { email, password });

//   localStorage.setItem("is_authenticated", "true");
//   localStorage.setItem("user_role", data.user.role);
//   localStorage.setItem("user_name", data.user.name);
//   localStorage.setItem("user_email", data.user.email);

//   return data;
// };

// export const registerCustomer = async ({ name, email, phoneNumber, password }) => {
//   // const { data } = await api.post("/auth/register/", {
//   //   name,
//   //   email,
//   //   phone_number: phoneNumber,
//   //   password,
//   // });

//   // Auto-login right after successful registration
//   const loginData = await loginUser({ email, password });
//   return loginData;
// };
// export const logoutUser = () => {
//   localStorage.removeItem("is_authenticated");
//   localStorage.removeItem("user_role");
//   localStorage.removeItem("user_name");
//   localStorage.removeItem("user_email");
// };

// export const getCurrentUser = () => ({
//   isAuthenticated: localStorage.getItem("is_authenticated") === "true",
//   role: localStorage.getItem("user_role"),
//   name: localStorage.getItem("user_name"),
//   email: localStorage.getItem("user_email"),
// });

// import api from "../services/api";

import {api} from "../services/api";
export const loginUser = async ({ email, password }) => {
  const data = await api.post("/auth/login/", {
    email,
    password,
  });

  localStorage.setItem("is_authenticated", "true");
  localStorage.setItem("user_role", data.user.role);
  localStorage.setItem("user_name", data.user.name);
  localStorage.setItem("user_email", data.user.email);

  return data;
};
export const registerCustomer = async ({ name, email, phoneNumber, password }) => {
  await api.post("/auth/register/", {
    name,
    email,
    phone_number: phoneNumber,
    password,
  });

  // Auto-login right after successful registration
  const loginData = await loginUser({ email, password });
  return loginData;
};

export const logoutUser = () => {
  localStorage.removeItem("is_authenticated");
  localStorage.removeItem("user_role");
  localStorage.removeItem("user_name");
  localStorage.removeItem("user_email");
};

export const getCurrentUser = () => ({
  isAuthenticated: localStorage.getItem("is_authenticated") === "true",
  role: localStorage.getItem("user_role"),
  name: localStorage.getItem("user_name"),
  email: localStorage.getItem("user_email"),
});
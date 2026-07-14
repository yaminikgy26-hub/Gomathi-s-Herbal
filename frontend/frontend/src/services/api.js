// const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:8000/api";

// const apiFetch = async (endpoint, options = {}) => {
//   const token = localStorage.getItem("access_token");
  
//   // Set headers
//   const headers = {
//     "Content-Type": "application/json",
//     ...options.headers,
//   };

//   if (token) {
//     headers["Authorization"] = `Bearer ${token}`;
//   }

//   const response = await fetch(`${API_BASE_URL}${endpoint}`, {
//     ...options,
//     headers,
//   });

//   // Handle 401 Unauthorized globally
//   if (response.status === 401) {
//     localStorage.removeItem("access_token");
//     localStorage.removeItem("user_role");
//     // Optionally redirect to login here: window.location.href = '/login';
//   }

//   return response;
// };

// // Helper methods to mimic axios.get / axios.post
// export const api = {
//   get: (url) => apiFetch(url, { method: "GET" }),
//   post: (url, data) => apiFetch(url, { method: "POST", body: JSON.stringify(data) }),
//   put: (url, data) => apiFetch(url, { method: "PUT", body: JSON.stringify(data) }),
//   delete: (url) => apiFetch(url, { method: "DELETE" }),
// };

// export default api;

// const BASE_URL = "http://127.0.0.1:8000/api";

// export default BASE_URL;

// 

const API_BASE_URL =
  process.env.REACT_APP_API_URL || "http://localhost:8000/api";

const apiRequest = async (endpoint, options = {}) => {
  const token = localStorage.getItem("token");

  const headers = {
    "Content-Type": "application/json",
    ...options.headers,
    ...(token && { Authorization: `Bearer ${token}` }),
  };

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong.");
  }

  return data;
};

export const api = {
  get: (endpoint) =>
    apiRequest(endpoint, {
      method: "GET",
    }),

  post: (endpoint, body) =>
    apiRequest(endpoint, {
      method: "POST",
      body: JSON.stringify(body),
    }),

  put: (endpoint, body) =>
    apiRequest(endpoint, {
      method: "PUT",
      body: JSON.stringify(body),
    }),

  delete: (endpoint) =>
    apiRequest(endpoint, {
      method: "DELETE",
    }),
};
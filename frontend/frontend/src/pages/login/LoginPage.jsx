// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { loginUser } from "../../api/authService";

// const LoginPage = () => {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleChange = (e) => setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setLoading(true);
//     try {
//       const data = await loginUser(formData);
//       navigate(data.user.role === "super_admin" ? "/super-admin/dashboard" : "/admin/dashboard");
//     } catch (err) {
//       setError(err.response?.data?.detail || "Invalid email or password.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-brand-leaf px-4">
//       <div className="w-full max-w-sm bg-brand-cream rounded-lg p-8">
//         <p className="font-mono text-xs uppercase tracking-widest text-brand-clay font-semibold mb-2">Super Admin</p>
//         <h2 className="font-serif italic text-2xl font-semibold mb-6">Welcome back</h2>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-xs font-semibold text-brand-ink/70 mb-1">Email</label>
//             <input
//               type="email"
//               name="email"
//               required
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full px-3 py-2.5 border border-black/15 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/40"
//             />
//           </div>
//           <div>
//             <label className="block text-xs font-semibold text-brand-ink/70 mb-1">Password</label>
//             <input
//               type="password"
//               name="password"
//               required
//               value={formData.password}
//               onChange={handleChange}
//               className="w-full px-3 py-2.5 border border-black/15 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/40"
//             />
//           </div>

//           {error && <p className="text-xs text-brand-danger">{error}</p>}

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full py-3 rounded-md bg-brand-leaf text-brand-cream font-semibold text-sm hover:bg-brand-leaf2 disabled:opacity-60 transition-colors"
//           >
//             {loading ? "Signing in…" : "Login"}
//           </button>
//         </form>

//         <p className="text-center text-sm text-brand-ink/60 mt-6">
//           New super admin? <Link to="/register" className="text-brand-clay font-semibold">Register</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;



// 

// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { loginUser } from "../../api/authService";
// import "./LoginPage.css";

// const LoginPage = () => {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleChange = (e) => setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setLoading(true);
//     try {
//       const data = await loginUser(formData);
//       navigate(data.user.role === "super_admin" ? "/super-admin/SuperAdminDashboard" : "/admin/AdminDashboard");
//     } catch (err) {
//       setError(err.response?.data?.detail || "Invalid email or password.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="auth-page">
//       <div className="auth-card">
//         <p className="auth-kicker">Super Admin</p>
//         <h2 className="auth-title">Welcome back</h2>

//         <form onSubmit={handleSubmit} className="auth-form">
//           <div>
//             <label className="auth-label">Email</label>
//             <input
//               type="email"
//               name="email"
//               required
//               value={formData.email}
//               onChange={handleChange}
//               className="auth-input"
//             />
//           </div>
//           <div>
//             <label className="auth-label">Password</label>
//             <input
//               type="password"
//               name="password"
//               required
//               value={formData.password}
//               onChange={handleChange}
//               className="auth-input"
//             />
//           </div>

//           <div className="auth-check-row">
//             <label className="auth-check-label">
//               <input type="checkbox" className="auth-checkbox" /> Keep me signed in
//             </label>
//             <button type="button" className="auth-link-btn">Forgot password?</button>
//           </div>

//           {error && <p className="auth-error">{error}</p>}

//           <button type="submit" disabled={loading} className="auth-submit">
//             {loading ? "Signing in…" : "Login"}
//           </button>
//         </form>

//         <p className="auth-switch">
//           New super admin? <Link to="/register" className="auth-switch-link">Register</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;


// 

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../../api/authService";
import "./LoginPage.css";

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");
  setLoading(true);

  try {
    const data = await loginUser(formData);
    const role = data.user.role;

    if (role === "super_admin") {
      navigate("/super-admin/SuperAdminDashboard");
    } else if (role === "admin") {
      navigate("/admin/AdminDashboard");
    } else {
      navigate("/user/profile");
    }
  } catch (err) {
    console.error(err);
    setError(err.message || "Invalid email or password.");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="auth-page">
      <div className="auth-card">
        <p className="auth-kicker">Sign In</p>
        <h2 className="auth-title">Welcome back</h2>

        <form onSubmit={handleSubmit} className="auth-form">
          <div>
            <label className="auth-label">Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="auth-input"
            />
          </div>
          <div>
            <label className="auth-label">Password</label>
            <input
              type="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="auth-input"
            />
          </div>

          <div className="auth-check-row">
            <label className="auth-check-label">
              <input type="checkbox" className="auth-checkbox" /> Keep me signed in
            </label>
            <button type="button" className="auth-link-btn">Forgot password?</button>
          </div>

          {error && <p className="auth-error">{error}</p>}

          <button type="submit" disabled={loading} className="auth-submit">
            {loading ? "Signing in…" : "Login"}
          </button>
        </form>

        <p className="auth-switch">
          New here? <Link to="/register" className="auth-switch-link">Create an account</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
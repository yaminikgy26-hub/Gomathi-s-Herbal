// 

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../../api/authService";
import "./RegisterPage.css";

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
      navigate(data.user.role === "super_admin" ? "/super-admin/dashboard" : "/admin/dashboard");
    } catch (err) {
      setError(err.response?.data?.detail || "Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <p className="auth-kicker">Super Admin</p>
        <h2 className="auth-title">Welcome to Gomathi's Herbals</h2>

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
            <label className="flex items-center gap-2">
              <input type="checkbox" className="w-3.5 h-3.5" /> Save password
            </label>
            {/* <a href="#">Forgot password?</a> */}
          </div>

          {error && <p className="auth-error">{error}</p>}

          <button type="submit" disabled={loading} className="auth-submit">
            {loading ? "Signing in…" : "Register"}
          </button>
        </form>

        <p className="auth-switch">
          Already have an account? <Link to="/register" className="auth-switch-link">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
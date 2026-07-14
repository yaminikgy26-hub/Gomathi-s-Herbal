// 

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerCustomer } from "../../api/authService";
import "./UserRegisterPage.css";

const UserRegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");
  setLoading(true);
  try {
    await registerCustomer(formData);
    navigate("/user/profile");   // changed from "/login" — already logged in now
  } catch (err) {
    setError(err.response?.data?.message || "Registration failed. Please try again.");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="ureg-page">
      <div className="ureg-card">
        <p className="ureg-kicker">Create Account</p>
        <h2 className="ureg-title">Join Gomathi's Herbals</h2>
        <p style={{color: "red", fontWeight: "bold"}}>TEST MARKER 12345</p>
        <p className="ureg-sub">Create an account to track orders and save your favorites.</p>

        <form onSubmit={handleSubmit} className="ureg-form">
          <div>
            <label className="ureg-label">Full name</label>
            <input name="name" required value={formData.name} onChange={handleChange} className="ureg-input" />
          </div>
          <div>
            <label className="ureg-label">Email</label>
            <input type="email" name="email" required value={formData.email} onChange={handleChange} className="ureg-input" />
          </div>
          <div>
            <label className="ureg-label">Phone number</label>
            <input name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="ureg-input" />
          </div>
          <div>
            <label className="ureg-label">Password</label>
            <input type="password" name="password" required value={formData.password} onChange={handleChange} className="ureg-input" />
          </div>

          {error && <p className="ureg-error">{error}</p>}

          <button type="submit" disabled={loading} className="ureg-submit">
            {loading ? "Creating account…" : "Create Account"}
          </button>
        </form>

        <p className="ureg-switch">
          Already have an account? <Link to="/login" className="ureg-switch-link">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default UserRegisterPage;
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerCustomer } from "../../api/authService";
import "./RegisterPage.css";

const RegisterPage = () => {
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
  navigate("/login");
} catch (err) {
  console.error(err);
  setError(err.message || "Registration failed. Please try again.");
} finally {
  setLoading(false);
}
  };

  return (
    <div className="register-page">
      <div className="register-card">
        <p className="register-kicker">Create Account</p>
        <h2 className="register-title">Join Gomathi's Herbals</h2>

        <form onSubmit={handleSubmit} className="register-form">
          <div>
            <label className="register-label">Full name</label>
            <input name="name" required value={formData.name} onChange={handleChange} className="register-input" />
          </div>
          <div>
            <label className="register-label">Email</label>
            <input type="email" name="email" required value={formData.email} onChange={handleChange} className="register-input" />
          </div>
          <div>
            <label className="register-label">Phone number</label>
            <input name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="register-input" />
          </div>
          <div>
            <label className="register-label">Password</label>
            <input type="password" name="password" required value={formData.password} onChange={handleChange} className="register-input" />
          </div>

          {error && <p className="register-error">{error}</p>}

          <button type="submit" disabled={loading} className="register-submit">
            {loading ? "Creating account…" : "Create Account"}
          </button>
        </form>

        <p className="register-switch">
          Already have an account? <Link to="/login" className="register-switch-link">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
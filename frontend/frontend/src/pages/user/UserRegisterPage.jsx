import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerCustomer } from "../../api/authService";
import "./UserRegisterPage.css";

const UserRegisterPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords don't match.");
      return;
    }

    setLoading(true);
    try {
      await registerCustomer({
        full_name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
      });
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.detail || "Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="ureg-page">
      <div className="ureg-card">
        <p className="ureg-kicker">Create Account</p>
        <h2 className="ureg-title">Join Gomathi's Herbals</h2>
        <p className="ureg-sub">Create an account to track orders and save your favorites.</p>

        <form onSubmit={handleSubmit} className="ureg-form">
          <div>
            <label className="ureg-label">Full name</label>
            <input name="fullName" required value={formData.fullName} onChange={handleChange} className="ureg-input" />
          </div>
          <div>
            <label className="ureg-label">Email</label>
            <input type="email" name="email" required value={formData.email} onChange={handleChange} className="ureg-input" />
          </div>
          <div>
            <label className="ureg-label">Phone number</label>
            <input name="phone" required value={formData.phone} onChange={handleChange} className="ureg-input" />
          </div>
          <div className="ureg-row">
            <div>
              <label className="ureg-label">Password</label>
              <input type="password" name="password" required value={formData.password} onChange={handleChange} className="ureg-input" />
            </div>
            <div>
              <label className="ureg-label">Confirm password</label>
              <input type="password" name="confirmPassword" required value={formData.confirmPassword} onChange={handleChange} className="ureg-input" />
            </div>
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
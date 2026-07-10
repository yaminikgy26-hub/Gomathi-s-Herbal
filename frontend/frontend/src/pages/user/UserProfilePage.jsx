import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logoutUser, getCurrentUser } from "../../api/authService";
import "./UserProfilePage.css";

const UserProfilePage = () => {
  const navigate = useNavigate();
  const currentUser = getCurrentUser();

  const [profile, setProfile] = useState({
    fullName: currentUser.name || "",
    email: "",
    phone: "",
  });
  const [saved, setSaved] = useState(false);

  const handleChange = (e) => setProfile((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: call PATCH /api/customer/profile/ with `profile`
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  return (
    <div className="uprofile-page">
      <header className="uprofile-header">
        <a href="/" className="uprofile-logo">Gomathi's <span>Herbals</span></a>
        <button onClick={handleLogout} className="uprofile-logout">Logout</button>
      </header>

      <main className="uprofile-main">
        <div className="uprofile-grid">
          <div className="uprofile-card">
            <div className="uprofile-avatar">
              {(profile.fullName || "U").charAt(0).toUpperCase()}
            </div>
            <h3>{profile.fullName || "My Account"}</h3>
            <span className="uprofile-badge">Customer</span>
          </div>

          <div className="uprofile-panel">
            <h3 className="uprofile-panel-title">Personal information</h3>
            <form onSubmit={handleSubmit} className="uprofile-form">
              <div className="uprofile-row">
                <div>
                  <label className="uprofile-label">Full name</label>
                  <input name="fullName" value={profile.fullName} onChange={handleChange} className="uprofile-input" />
                </div>
                <div>
                  <label className="uprofile-label">Phone</label>
                  <input name="phone" value={profile.phone} onChange={handleChange} className="uprofile-input" />
                </div>
              </div>
              <div>
                <label className="uprofile-label">Email</label>
                <input name="email" value={profile.email} onChange={handleChange} className="uprofile-input" />
              </div>
              <button type="submit" className="uprofile-save">Save changes</button>
              {saved && <p className="uprofile-saved-msg">Profile updated successfully.</p>}
            </form>
          </div>
        </div>

        <div className="uprofile-orders">
          <h3 className="uprofile-panel-title">My orders</h3>
          <div className="uprofile-empty">You haven't placed any orders yet.</div>
        </div>
      </main>
    </div>
  );
};

export default UserProfilePage;
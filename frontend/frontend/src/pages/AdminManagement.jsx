import { useEffect, useState } from "react";
import "./AdminManagement.css";

const AdminManagement = () => {
  const [admins, setAdmins] = useState([
    {
      id: 1,
      name: "Admin One",
      email: "admin1@gmail.com",
      role: "admin",
    },
    {
      id: 2,
      name: "Admin Two",
      email: "admin2@gmail.com",
      role: "admin",
    },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    // Later we'll fetch admins from Django
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddAdmin = (e) => {
    e.preventDefault();

    const newAdmin = {
      id: Date.now(),
      name: formData.name,
      email: formData.email,
      role: "admin",
    };

    setAdmins([...admins, newAdmin]);

    setFormData({
      name: "",
      email: "",
      password: "",
    });
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this admin?"
    );

    if (confirmDelete) {
      setAdmins(admins.filter((admin) => admin.id !== id));
    }
  };

  return (
    <div className="admin-management">

      <h2>Admin Management</h2>

      <form className="admin-form" onSubmit={handleAddAdmin}>

        <input
          type="text"
          name="name"
          placeholder="Admin Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Admin Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Add Admin
        </button>

      </form>

      <table>

        <thead>

          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>

        </thead>

        <tbody>

          {admins.map((admin) => (

            <tr key={admin.id}>

              <td>{admin.name}</td>

              <td>{admin.email}</td>

              <td>{admin.role}</td>

              <td>

                <button
                  onClick={() => handleDelete(admin.id)}
                >
                  Delete
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
};

export default AdminManagement;
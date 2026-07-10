// import Layout from "../components/Layout/Layout";

// const PRODUCTS = [
//   { name: "Neem & Tulsi Bar", category: "Home Made Soaps", price: 149, stock: 84 },
//   { name: "Turmeric Glow Cream", category: "Skin Care", price: 329, stock: 41 },
//   { name: "Hibiscus Hair Oil", category: "Hair Care", price: 279, stock: 63 },
//   { name: "Gentle Baby Wash", category: "Baby Care", price: 199, stock: 28 },
// ];

// const ProductPage = ({ sidebar, welcomeName, userInitials, profilePath }) => {
//   return (
//     <Layout sidebar={sidebar} pageTitle="Products" welcomeName={welcomeName} userInitials={userInitials} profilePath={profilePath} loginPath="/login">
//       <div className="bg-white border border-black/10 rounded-lg overflow-hidden">
//         <div className="flex justify-between items-center px-6 py-4 border-b border-black/10">
//           <h3 className="font-serif italic text-base font-semibold">Product catalog</h3>
//           <button className="px-4 py-2 rounded-md bg-brand-leaf text-brand-cream text-xs font-semibold">+ Add product</button>
//         </div>
//         <table className="w-full text-sm">
//           <thead className="bg-brand-paper text-brand-ink/50 text-xs uppercase">
//             <tr>
//               <th className="text-left px-6 py-3">Product</th>
//               <th className="text-left px-6 py-3">Category</th>
//               <th className="text-left px-6 py-3">Price</th>
//               <th className="text-left px-6 py-3">Stock</th>
//             </tr>
//           </thead>
//           <tbody>
//             {PRODUCTS.map((p) => (
//               <tr key={p.name} className="border-t border-black/10 hover:bg-brand-gold/5">
//                 <td className="px-6 py-3 font-medium">{p.name}</td>
//                 <td className="px-6 py-3 text-brand-clay">{p.category}</td>
//                 <td className="px-6 py-3">₹{p.price}</td>
//                 <td className="px-6 py-3">{p.stock} units</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </Layout>
//   );
// };

// export default ProductPage;

import { useState } from "react";
import Layout from "../components/Layout/Layout";
import Modal from "../components/common/Modal";

const INITIAL_PRODUCTS = [
  { id: 1, name: "Neem & Tulsi Bar", category: "Home Made Soaps", price: 149, stock: 84 },
  { id: 2, name: "Turmeric Glow Cream", category: "Skin Care", price: 329, stock: 41 },
  { id: 3, name: "Hibiscus Hair Oil", category: "Hair Care", price: 279, stock: 63 },
  { id: 4, name: "Gentle Baby Wash", category: "Baby Care", price: 199, stock: 28 },
];

const CATEGORIES = ["Skin Care", "Home Made Soaps", "Body & Personal Care", "Hair Care", "Eye & Lip Care", "Baby Care"];
const emptyForm = { name: "", category: CATEGORIES[0], price: "", stock: "" };

const ProductPage = ({ sidebar, welcomeName, userInitials, profilePath }) => {
  const [products, setProducts] = useState(INITIAL_PRODUCTS);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(emptyForm);

  const openAddModal = () => {
    setEditingId(null);
    setForm(emptyForm);
    setModalOpen(true);
  };

  const openEditModal = (product) => {
    setEditingId(product.id);
    setForm({ name: product.name, category: product.category, price: product.price, stock: product.stock });
    setModalOpen(true);
  };

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSave = (e) => {
    e.preventDefault();
    if (editingId) {
      setProducts((prev) =>
        prev.map((p) => (p.id === editingId ? { ...p, ...form, price: Number(form.price), stock: Number(form.stock) } : p))
      );
    } else {
      setProducts((prev) => [...prev, { id: Date.now(), ...form, price: Number(form.price), stock: Number(form.stock) }]);
    }
    setModalOpen(false);
  };

  const handleDelete = (id) => {
    if (window.confirm("Delete this product? This can't be undone.")) {
      setProducts((prev) => prev.filter((p) => p.id !== id));
    }
  };

  return (
    <Layout sidebar={sidebar} pageTitle="Products" welcomeName={welcomeName} userInitials={userInitials} profilePath={profilePath} loginPath="/login">
      <div className="bg-white border border-black/10 rounded-lg overflow-hidden">
        <div className="flex justify-between items-center px-6 py-4 border-b border-black/10">
          <h3 className="font-serif italic text-base font-semibold">Product catalog</h3>
          <button onClick={openAddModal} className="px-4 py-2 rounded-md bg-brand-leaf text-brand-cream text-xs font-semibold hover:bg-brand-leaf2 transition-colors">
            + Add product
          </button>
        </div>
        <table className="w-full text-sm">
          <thead className="bg-brand-paper text-brand-ink/50 text-xs uppercase">
            <tr>
              <th className="text-left px-6 py-3">Product</th>
              <th className="text-left px-6 py-3">Category</th>
              <th className="text-left px-6 py-3">Price</th>
              <th className="text-left px-6 py-3">Stock</th>
              <th className="text-right px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id} className="border-t border-black/10 hover:bg-brand-gold/5 transition-colors">
                <td className="px-6 py-3 font-medium">{p.name}</td>
                <td className="px-6 py-3 text-brand-clay">{p.category}</td>
                <td className="px-6 py-3">₹{p.price}</td>
                <td className="px-6 py-3">{p.stock} units</td>
                <td className="px-6 py-3 text-right space-x-3">
                  <button onClick={() => openEditModal(p)} className="text-xs font-semibold text-brand-clay hover:text-brand-ink">Edit</button>
                  <button onClick={() => handleDelete(p.id)} className="text-xs font-semibold text-brand-danger hover:text-red-700">Delete</button>
                </td>
              </tr>
            ))}
            {products.length === 0 && (
              <tr><td colSpan={5} className="text-center px-6 py-8 text-brand-ink/50">No products yet.</td></tr>
            )}
          </tbody>
        </table>
      </div>

      {modalOpen && (
        <Modal title={editingId ? "Edit product" : "Add product"} onClose={() => setModalOpen(false)}>
          <form onSubmit={handleSave} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-brand-ink/70 mb-1">Product name</label>
              <input name="name" required value={form.name} onChange={handleChange}
                className="w-full px-3 py-2.5 border border-black/15 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/40" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-brand-ink/70 mb-1">Category</label>
              <select name="category" value={form.category} onChange={handleChange}
                className="w-full px-3 py-2.5 border border-black/15 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/40">
                {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-brand-ink/70 mb-1">Price (₹)</label>
                <input type="number" name="price" required min="0" value={form.price} onChange={handleChange}
                  className="w-full px-3 py-2.5 border border-black/15 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/40" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-brand-ink/70 mb-1">Stock (units)</label>
                <input type="number" name="stock" required min="0" value={form.stock} onChange={handleChange}
                  className="w-full px-3 py-2.5 border border-black/15 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/40" />
              </div>
            </div>
            <button type="submit" className="w-full py-2.5 rounded-md bg-brand-leaf text-brand-cream font-semibold text-sm hover:bg-brand-leaf2 transition-colors">
              {editingId ? "Save changes" : "Add product"}
            </button>
          </form>
        </Modal>
      )}
    </Layout>
  );
};

export default ProductPage;
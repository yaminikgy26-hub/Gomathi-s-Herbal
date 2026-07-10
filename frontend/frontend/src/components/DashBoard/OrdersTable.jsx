const STATUS_STYLES = {
  paid: "bg-brand-sage/20 text-[#3E5A3E]",
  pending: "bg-brand-gold/20 text-brand-clay",
  cancelled: "bg-brand-danger/15 text-brand-danger",
};

const OrdersTable = ({ title = "Recent orders", orders = [] }) => (
  <div className="bg-white border border-black/10 rounded-lg overflow-hidden">
    <div className="flex justify-between items-center px-6 py-4 border-b border-black/10">
      <h3 className="font-serif italic text-base font-semibold">{title}</h3>
      <button className="text-xs font-semibold text-brand-clay">View all →</button>
    </div>
    <table className="w-full text-sm">
      <thead className="bg-brand-paper text-brand-ink/50 text-xs uppercase">
        <tr>
          <th className="text-left px-6 py-3">Order</th>
          <th className="text-left px-6 py-3">Customer</th>
          <th className="text-left px-6 py-3">Amount</th>
          <th className="text-left px-6 py-3">Status</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr key={order.id} className="border-t border-black/10 hover:bg-brand-gold/5">
            <td className="px-6 py-3">{order.id}</td>
            <td className="px-6 py-3">{order.customer}</td>
            <td className="px-6 py-3">₹{order.amount}</td>
            <td className="px-6 py-3">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${STATUS_STYLES[order.status]}`}>
                {order.status}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default OrdersTable;
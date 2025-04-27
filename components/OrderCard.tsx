"use client";
import { updateOrderStatus } from "@/lib/api";

export default function OrderCard({ order }: { order: any }) {
  async function handleStatusChange() {
    const newStatus = order.status === "Pending" ? "In Progress" : "Delivered";
    await updateOrderStatus(order.id, newStatus);
    location.reload();
  }

  return (
    <div className="border p-4 rounded">
      <h3 className="font-bold">{order.productName} - {order.quantity} pcs</h3>
      <p>Buyer: {order.buyerName}</p>
      <p>Contact: {order.contact}</p>
      <p>Address: {order.address}</p>
      <p>Status: {order.status}</p>
      <button onClick={handleStatusChange} className="bg-purple-500 text-white mt-2 p-1 rounded">
        Update Status
      </button>
    </div>
  );
}

"use client";
import { useState } from "react";
import { updateOrderStatus } from "@/lib/api";

export default function OrderCard({ order }: { order: any }) {
  const [isUpdating, setIsUpdating] = useState(false);
  const [error, setError] = useState("");

  async function handleStatusChange() {
    setIsUpdating(true);
    setError("");
    
    try {
      const newStatus = order.status === "Pending" ? "In Progress" : 
                        order.status === "In Progress" ? "Delivered" : "Delivered";
      await updateOrderStatus(order.id, newStatus);
      location.reload();
    } catch (err) {
      setError("Failed to update status");
      console.error("Status update error:", err);
    } finally {
      setIsUpdating(false);
    }
  }

  return (
    <div className="border p-4 rounded shadow-sm hover:shadow-md transition-shadow">
      <h3 className="font-bold">{order.productName || `Order #${order.id}`} - {order.quantity} pcs</h3>
      <p>Buyer: {order.buyerName || order.deliveryName}</p>
      <p>Contact: {order.contact || order.deliveryPhone}</p>
      <p>Address: {order.address || order.deliveryAddr}</p>
      <p className="mt-2">
        Status: <span className={`
          font-medium
          ${order.status === 'Pending' ? 'text-yellow-600' : ''}
          ${order.status === 'In Progress' ? 'text-blue-600' : ''}
          ${order.status === 'Delivered' ? 'text-green-600' : ''}
        `}>
          {order.status}
        </span>
      </p>
      
      {error && (
        <p className="text-red-500 text-sm mt-1">{error}</p>
      )}
      
      {order.status !== "Delivered" && (
        <button 
          onClick={handleStatusChange} 
          className="bg-purple-500 text-white mt-2 p-2 rounded hover:bg-purple-600 disabled:bg-purple-300"
          disabled={isUpdating}
        >
          {isUpdating ? "Updating..." : order.status === "Pending" ? "Mark In Progress" : "Mark Delivered"}
        </button>
      )}
    </div>
  );
}

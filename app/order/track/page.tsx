"use client";
import { useState } from "react";
import { trackOrder } from "@/lib/api";

export default function TrackOrder() {
  const [id, setId] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleTrack() {
    if (!id || isNaN(Number(id))) {
      setError("Please enter a valid order ID");
      return;
    }
    
    setLoading(true);
    setError("");
    setStatus("");
    
    try {
      const res = await trackOrder(+id);
      if (res) {
        setStatus(res.status || "Order status unavailable");
      } else {
        setError("Order not found");
      }
    } catch (err) {
      setError("Error tracking order. Please try again.");
      console.error("Tracking error:", err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-4">Track Your Order</h1>
      
      {error && (
        <div className="p-3 mb-4 bg-red-100 text-red-700 rounded">
          {error}
        </div>
      )}
      
      <div className="flex flex-col md:flex-row gap-2">
        <input
          className="border p-2 rounded flex-grow"
          placeholder="Enter Order ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
          type="number"
          min="1"
        />
        <button 
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-blue-300" 
          onClick={handleTrack}
          disabled={loading}
        >
          {loading ? "Tracking..." : "Track"}
        </button>
      </div>
      
      {status && (
        <div className="mt-4 p-4 border rounded">
          <h2 className="font-semibold text-lg">Order Status</h2>
          <div className="mt-2 text-lg font-semibold">
            <span className={`
              ${status === 'Pending' ? 'text-yellow-600' : ''}
              ${status === 'In Progress' ? 'text-blue-600' : ''}
              ${status === 'Delivered' ? 'text-green-600' : ''}
            `}>
              {status}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

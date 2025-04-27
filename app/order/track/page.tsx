"use client";
import { useState } from "react";
import { trackOrder } from "@/lib/api";

export default function TrackOrder() {
  const [id, setId] = useState("");
  const [status, setStatus] = useState("");

  async function handleTrack() {
    const res = await trackOrder(+id);
    setStatus(res?.status || "Order not found");
  }

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-4">Track Your Order</h1>
      <input
        className="border p-2 rounded mb-4"
        placeholder="Enter Order ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button className="bg-blue-500 text-white p-2 rounded" onClick={handleTrack}>
        Track
      </button>
      {status && <div className="mt-4 text-lg font-semibold">{status}</div>}
    </div>
  );
}

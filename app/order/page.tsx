"use client";
import { useState } from "react";
import { placeOrder } from "@/lib/api";

export default function PlaceOrder() {
  const [form, setForm] = useState({
    buyerName: "",
    contact: "",
    address: "",
    productId: 1, // Default to first product
    quantity: 1,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");
    
    try {
      const result = await placeOrder(form);
      if (result) {
        setMessage("Order placed successfully!");
        // Reset form
        setForm({
          buyerName: "",
          contact: "",
          address: "",
          productId: 1,
          quantity: 1,
        });
      } else {
        setMessage("Error placing order. Please try again.");
      }
    } catch (error) {
      setMessage("Error placing order. Please try again.");
      console.error("Order submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-4">Place an Order</h1>
      
      {message && (
        <div className={`p-3 mb-4 rounded ${message.includes("Error") ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"}`}>
          {message}
        </div>
      )}
      
      <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
        <input
          placeholder="Your Name"
          value={form.buyerName}
          onChange={(e) => setForm((f) => ({ ...f, buyerName: e.target.value }))}
          className="border p-2 rounded"
          required
        />
        <input
          placeholder="Contact Number"
          value={form.contact}
          onChange={(e) => setForm((f) => ({ ...f, contact: e.target.value }))}
          className="border p-2 rounded"
          required
        />
        <input
          placeholder="Delivery Address"
          value={form.address}
          onChange={(e) => setForm((f) => ({ ...f, address: e.target.value }))}
          className="border p-2 rounded"
          required
        />
        <input
          placeholder="Product ID"
          type="number"
          value={form.productId}
          onChange={(e) => setForm((f) => ({ ...f, productId: +e.target.value }))}
          className="border p-2 rounded"
          required
          min="1"
        />
        <input
          placeholder="Quantity"
          type="number"
          value={form.quantity}
          onChange={(e) => setForm((f) => ({ ...f, quantity: +e.target.value }))}
          className="border p-2 rounded"
          required
          min="1"
        />
        <button 
          type="submit" 
          className="bg-green-500 text-white p-2 rounded hover:bg-green-600 disabled:bg-green-300"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Placing Order..." : "Place Order"}
        </button>
      </form>
    </div>
  );
}

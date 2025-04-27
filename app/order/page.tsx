"use client";
import { useState } from "react";
import { placeOrder } from "@/lib/api";

export default function PlaceOrder() {
  const [form, setForm] = useState({
    buyerName: "",
    contact: "",
    address: "",
    productName: "",
    quantity: 1,
  });

  async function handleSubmit(e: any) {
    e.preventDefault();
    await placeOrder(form);
    alert("Order placed successfully!");
  }

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-4">Place an Order</h1>
      <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
        {Object.keys(form).map((field) => (
          <input
            key={field}
            placeholder={field}
            value={(form as any)[field]}
            onChange={(e) =>
              setForm((f) => ({ ...f, [field]: field === "quantity" ? +e.target.value : e.target.value }))
            }
            className="border p-2 rounded"
            type={field === "quantity" ? "number" : "text"}
            required
          />
        ))}
        <button type="submit" className="bg-green-500 text-white p-2 rounded">
          Place Order
        </button>
      </form>
    </div>
  );
}

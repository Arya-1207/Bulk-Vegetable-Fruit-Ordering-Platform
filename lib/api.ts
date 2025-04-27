// lib/api.ts
// Handle both server-side rendering and client-side rendering
const baseUrl = typeof window === 'undefined' 
  ? process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_URL 
    ? `https://${process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_URL}`
    : 'http://localhost:3000'
  : ''; // Empty string for client-side to use relative URLs

export async function getProducts() {
  try {
    const res = await fetch(`${baseUrl}/api/products`, {
      // Add cache: 'no-store' to prevent caching for debugging
      cache: 'no-store'
    });
    
    if (!res.ok) {
      console.error("Error response from products API:", res.status, res.statusText);
      return [];
    }
    
    const data = await res.json();
    console.log("Products fetched:", data.length);
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export async function placeOrder(order: any) {
  try {
    const res = await fetch(`${baseUrl}/api/orders`, {
      method: "POST",
      body: JSON.stringify(order),
      headers: { "Content-Type": "application/json" },
    });
    if (!res.ok) throw new Error('Failed to place order');
    return await res.json();
  } catch (error) {
    console.error("Error placing order:", error);
    return null;
  }
}

export async function trackOrder(id: number) {
  try {
    const res = await fetch(`${baseUrl}/api/orders/${id}`);
    if (!res.ok) return null;
    return await res.json();
  } catch (error) {
    console.error("Error tracking order:", error);
    return null;
  }
}

export async function getOrders() {
  try {
    const res = await fetch(`${baseUrl}/api/admin/orders`, {
      cache: 'no-store'
    });
    if (!res.ok) return [];
    return await res.json();
  } catch (error) {
    console.error("Error fetching orders:", error);
    return [];
  }
}

export async function updateOrderStatus(id: number, status: string) {
  try {
    const res = await fetch(`${baseUrl}/api/admin/orders/${id}`, {
      method: "PUT",
      body: JSON.stringify({ status }),
      headers: { "Content-Type": "application/json" },
    });
    if (!res.ok) throw new Error('Failed to update status');
    return await res.json();
  } catch (error) {
    console.error("Error updating order status:", error);
    return null;
  }
}

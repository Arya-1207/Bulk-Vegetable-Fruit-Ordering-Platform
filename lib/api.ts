export async function getProducts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`);
  return res.json();
}

export async function placeOrder(order: any) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/orders`, {
    method: "POST",
    body: JSON.stringify(order),
    headers: { "Content-Type": "application/json" },
  });
  return res.json();
}

export async function trackOrder(id: number) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/orders/${id}`);
  return res.json();
}

export async function getOrders() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/orders`);
  return res.json();
}

export async function updateOrderStatus(id: number, status: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/orders/${id}`, {
    method: "PUT",
    body: JSON.stringify({ status }),
    headers: { "Content-Type": "application/json" },
  });
  return res.json();
}

import { getOrders } from "@/lib/api";
import OrderCard from "@/components/OrderCard";

export default async function AdminDashboard() {
  const orders = await getOrders();
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {orders.map((order) => (
          <OrderCard key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
}

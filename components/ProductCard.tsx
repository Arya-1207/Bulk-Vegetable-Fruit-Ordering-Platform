// components/ProductCard.tsx
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
      <div className="w-full h-48">
        <img 
          src={product.image || "/api/placeholder/400/320"} 
          alt={product.name} 
          className="w-full h-full object-cover" 
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p className="text-gray-600 text-sm mt-1">{product.description || "Fresh produce"}</p>
        <p className="mt-2 text-green-600 font-bold">₹{product.price.toFixed(2)}/kg</p>
        <Link href={`/order?productId=${product.id}`} className="mt-3 inline-block bg-green-500 text-white px-4 py-2 rounded text-sm hover:bg-green-600">
          Order Now
        </Link>
      </div>
    </div>
  );
}

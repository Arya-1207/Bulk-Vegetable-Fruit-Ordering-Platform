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
      <Link href={`/products/${product.id}`}>
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h2 className="text-lg font-semibold">{product.name}</h2>
          <p className="text-gray-600">{product.description}</p>
          <p className="mt-2 text-green-600 font-bold">₹{product.price}</p>
        </div>
      </Link>
    </div>
  );
}

// app/page.tsx
import ProductCard from "../components/ProductCard";
import { getProducts } from "@/lib/api";

export default async function Home() {
  const products = await getProducts();
  
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">Product Catalog</h1>
      
      {/* For debugging */}
      {products && <p className="mb-4 text-gray-500">Found {products.length} products</p>}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products && products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="col-span-3">No products available. Please check database connection.</p>
        )}
      </div>
    </div>
  );
}

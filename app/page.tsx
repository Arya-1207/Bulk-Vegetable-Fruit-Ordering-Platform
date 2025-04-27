import ProductCard from "../components/ProductCard";
import { getProducts } from "@/lib/api";

export default async function Home() {
  const products = await getProducts();
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">Product Catalog</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products && products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    </div>
  );
}

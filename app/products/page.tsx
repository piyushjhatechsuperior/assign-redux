"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { fetchProducts } from "@/lib/slices/productsSlice";
import ProductCard from "@/components/ProductCard";
import { Suspense } from "react";

function ProductsContent() {
  const dispatch = useAppDispatch();
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  const { items: products, loading } = useAppSelector(
    (state) => state.products
  );

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.length]);

  const filteredProducts = category
    ? products.filter((p) => p.category === category)
    : products;

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">
          {category
            ? `${category.charAt(0).toUpperCase() + category.slice(1)} Products`
            : "All Products"}
        </h1>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="text-lg text-gray-600">Loading products...</div>
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="flex justify-center items-center py-20">
            <div className="text-lg text-gray-600">No products found</div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gray-50">
          <div className="flex justify-center items-center py-20">
            <div className="text-lg text-gray-600">Loading...</div>
          </div>
        </div>
      }
    >
      <ProductsContent />
    </Suspense>
  );
}

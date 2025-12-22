'use client';

import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import { fetchProducts } from '@/lib/slices/productsSlice';
import ProductCard from '@/components/ProductCard';
import Navbar from '@/components/Navbar';

export default function Home() {
  const dispatch = useAppDispatch();
  const { items: products, loading, error } = useAppSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">
          Add to Cart Projects
        </h1>

        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="text-lg text-gray-600">Loading products...</div>
          </div>
        )}

        {error && (
          <div className="flex justify-center items-center py-20">
            <div className="text-red-600">Error: {error}</div>
          </div>
        )}

        {!loading && !error && products.length === 0 && (
          <div className="flex justify-center items-center py-20">
            <div className="text-gray-600">No products available</div>
          </div>
        )}

        {!loading && !error && products.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

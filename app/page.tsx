"use client";

import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { fetchProducts } from "@/lib/slices/productsSlice";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const dispatch = useAppDispatch();
  const { items: products, loading } = useAppSelector(
    (state) => state.products
  );

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.length]);

  const featuredProducts = products.slice(0, 4);
  const categories = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section
        className="bg-linear-to-r from-blue-600 to-purple-600 text-white py-20"
        aria-labelledby="hero-heading"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1
              id="hero-heading"
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Welcome to ShopHub
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Discover amazing products at unbeatable prices. Quality you can
              trust, delivered to your door.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/products"
                className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-bold text-lg shadow-lg"
              >
                Shop Now
              </Link>
              <Link
                href="/about"
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-bold text-lg"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white" aria-labelledby="features-heading">
        <div className="container mx-auto px-4">
          <h2
            id="features-heading"
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900"
          >
            Why Choose ShopHub?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                Quality Guaranteed
              </h3>
              <p className="text-gray-600">
                Every product is carefully selected and tested to ensure it
                meets our high standards of quality and durability.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                Best Prices
              </h3>
              <p className="text-gray-600">
                We negotiate with suppliers to bring you competitive pricing
                without compromising on quality or service.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                Fast Shipping
              </h3>
              <p className="text-gray-600">
                Get your orders delivered quickly with our reliable shipping
                partners and real-time tracking updates.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50" aria-labelledby="featured-heading">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2
              id="featured-heading"
              className="text-3xl md:text-4xl font-bold text-gray-900"
            >
              Featured Products
            </h2>
            <Link
              href="/products"
              className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2"
            >
              View All
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="text-lg text-gray-600">Loading products...</div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-white" aria-labelledby="categories-heading">
        <div className="container mx-auto px-4">
          <h2
            id="categories-heading"
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900"
          >
            Shop by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link
                key={category}
                href={`/products?category=${category}`}
                className="group bg-linear-to-br from-blue-50 to-purple-50 rounded-lg p-8 text-center hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <h3 className="text-lg font-bold capitalize text-gray-900 group-hover:text-blue-600 transition-colors">
                  {category}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-20 bg-linear-to-r from-purple-600 to-blue-600 text-white"
        aria-labelledby="cta-heading"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Shopping?
          </h2>
          <p className="text-xl mb-8 text-purple-100 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust ShopHub for their
            online shopping needs.
          </p>
          <Link
            href="/signup"
            className="inline-block px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition-colors font-bold text-lg shadow-lg"
          >
            Create Free Account
          </Link>
        </div>
      </section>
    </div>
  );
}

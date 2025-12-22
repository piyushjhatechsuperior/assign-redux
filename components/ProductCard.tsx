"use client";

import Image from "next/image";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { addToCart } from "@/lib/slices/cartSlice";
import { Product } from "@/lib/slices/productsSlice";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const dispatch = useAppDispatch();
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  const handleAddToCart = () => {
    if (isAuthenticated) {
      dispatch(addToCart(product));
    } else {
      alert("Please login to add items to cart");
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col h-full">
      <Link href={`/products/${product.id}`}>
        <div className="relative w-full h-64 bg-gray-100">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain p-4"
          />
        </div>
      </Link>
      <div className="p-4 flex flex-col grow">
        <Link href={`/products/${product.id}`}>
          <h3 className="font-semibold text-lg mb-2 line-clamp-2 hover:text-blue-600 transition-colors min-h-14">
            {product.title}
          </h3>
        </Link>
        <p className="text-gray-600 text-sm mb-2 line-clamp-2 min-h-10">
          {product.description}
        </p>
        <div className="flex items-center justify-between mb-3">
          <span className="text-lg font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </span>
          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
            {product.category}
          </span>
        </div>
        <button
          onClick={handleAddToCart}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors font-medium mt-auto"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

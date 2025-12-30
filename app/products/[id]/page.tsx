"use client";

import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { fetchProducts } from "@/lib/slices/productsSlice";
import {
  addToCart,
  updateQuantity,
  removeFromCart,
} from "@/lib/slices/cartSlice";

export default function ProductDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const productId = parseInt(params.id as string);

  const { items: products, loading } = useAppSelector(
    (state) => state.products
  );
  const { items: cartItems } = useAppSelector((state) => state.cart);
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.length]);

  const product = products.find((p) => p.id === productId);
  const cartItem = cartItems.find((item) => item.product.id === productId);
  const quantity = cartItem?.quantity || 0;

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      alert("Please login to add items to cart");
      router.push("/login");
      return;
    }
    if (product) {
      dispatch(addToCart(product));
    }
  };

  const handleQuantityChange = (newQuantity: number) => {
    if (!product) return;
    if (newQuantity > 0) {
      dispatch(updateQuantity({ id: product.id, quantity: newQuantity }));
    } else {
      dispatch(removeFromCart(product.id));
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="flex justify-center items-center py-20">
          <div className="text-lg text-gray-600">Loading product...</div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="flex justify-center items-center py-20">
          <div className="text-red-600">Product not found</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">
          Items Details Page
        </h1>
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative w-full h-96 bg-gray-100 rounded-lg">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-contain p-4"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                {product.title}
              </h2>
              <div className="space-y-4 mb-6">
                <div>
                  <span className="text-gray-600">Price: </span>
                  <span className="text-2xl font-bold text-gray-900">
                    ${product.price.toFixed(2)}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-600">Rating: </span>
                  <span className="bg-green-500 text-white px-3 py-1 rounded flex items-center gap-1">
                    {product.rating.rate}★
                  </span>
                  <span className="text-gray-500 text-sm">
                    ({product.rating.count} reviews)
                  </span>
                </div>
                <div>
                  <span className="text-gray-600">Category: </span>
                  <span className="text-gray-900 font-medium">
                    {product.category}
                  </span>
                </div>
                <div>
                  <span className="text-gray-600">Description: </span>
                  <p className="text-gray-700 mt-1">{product.description}</p>
                </div>
              </div>

              <div className="border-t pt-4 space-y-4">
                <div>
                  <span className="text-gray-600">Total: </span>
                  <span className="text-xl font-bold text-gray-900">
                    ${(product.price * (quantity || 1)).toFixed(2)}
                  </span>
                </div>

                {quantity > 0 && (
                  <div className="flex items-center gap-4">
                    <span className="text-gray-600">Remove: </span>
                    <button
                      onClick={() => dispatch(removeFromCart(product.id))}
                      className="text-red-500 hover:text-red-700"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </button>
                  </div>
                )}

                <div className="flex items-center gap-4">
                  <span className="text-gray-600">Quantity: </span>
                  <div className="flex items-center border border-gray-300 rounded">
                    <button
                      onClick={() => handleQuantityChange(quantity - 1)}
                      className="px-4 py-2 hover:bg-gray-100 transition-colors text-lg"
                    >
                      -
                    </button>
                    <span className="px-6 py-2 min-w-[4rem] text-center text-lg">
                      {quantity || 1}
                    </span>
                    <button
                      onClick={() => handleQuantityChange(quantity + 1)}
                      className="px-4 py-2 hover:bg-gray-100 transition-colors text-lg"
                    >
                      +
                    </button>
                  </div>
                </div>

                {quantity === 0 && (
                  <button
                    onClick={handleAddToCart}
                    className="w-full bg-blue-500 text-white py-3 px-6 rounded hover:bg-blue-600 transition-colors font-medium text-lg"
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

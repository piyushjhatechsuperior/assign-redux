'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAppSelector } from '@/lib/hooks';
import Navbar from '@/components/Navbar';
import CartItem from '@/components/CartItem';

export default function CartPage() {
  const router = useRouter();
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const { items: cartItems } = useAppSelector((state) => state.cart);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return null;
  }

  const total = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">
          Shopping Cart
        </h1>

        {cartItems.length === 0 ? (
          <div className="bg-white rounded-lg shadow-lg p-12 text-center">
            <p className="text-gray-600 text-lg mb-4">Your cart is empty</p>
            <Link
              href="/"
              className="inline-block bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-4 border-b border-gray-200 grid grid-cols-12 gap-4 font-semibold text-gray-700 bg-gray-50">
              <div className="col-span-3">Photo</div>
              <div className="col-span-9">Restaurant Name</div>
            </div>
            {cartItems.map((item) => (
              <CartItem key={item.product.id} item={item} />
            ))}
            <div className="p-6 border-t border-gray-200 bg-gray-50">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold text-gray-700">
                  Total Items: {totalItems}
                </span>
                <span className="text-2xl font-bold text-gray-900">
                  Total: ${total.toFixed(2)}
                </span>
              </div>
              <Link
                href="/checkout"
                className="block w-full bg-blue-500 text-white text-center py-3 px-6 rounded hover:bg-blue-600 transition-colors font-medium"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}


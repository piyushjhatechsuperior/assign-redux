'use client';

import Image from 'next/image';
import { useAppDispatch } from '@/lib/hooks';
import { removeFromCart, updateQuantity } from '@/lib/slices/cartSlice';
import { CartItem as CartItemType } from '@/lib/slices/cartSlice';

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const dispatch = useAppDispatch();

  const handleRemove = () => {
    dispatch(removeFromCart(item.product.id));
  };

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity > 0) {
      dispatch(updateQuantity({ id: item.product.id, quantity: newQuantity }));
    } else {
      handleRemove();
    }
  };

  return (
    <div className="grid grid-cols-12 gap-4 p-4 border-b border-gray-200 items-center">
      <div className="col-span-3">
        <div className="relative w-20 h-20 bg-gray-100 rounded shrink-0">
          <Image
            src={item.product.image}
            alt={item.product.title}
            fill
            className="object-contain p-2"
          />
        </div>
      </div>
      <div className="col-span-9">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="font-semibold text-base mb-1">{item.product.title}</h3>
            <p className="text-gray-600 text-sm mb-2">
              Price: ${item.product.price.toFixed(2)}
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-gray-600 text-sm">Quantity :</span>
                <div className="flex items-center border border-gray-300 rounded">
                  <button
                    onClick={() => handleQuantityChange(item.quantity - 1)}
                    className="px-3 py-1 hover:bg-gray-100 transition-colors"
                  >
                    -
                  </button>
                  <span className="px-4 py-1 min-w-12 text-center">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => handleQuantityChange(item.quantity + 1)}
                    className="px-3 py-1 hover:bg-gray-100 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                onClick={handleRemove}
                className="text-red-500 hover:text-red-700 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


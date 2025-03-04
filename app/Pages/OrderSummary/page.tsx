
"use client"
import React, { useEffect, useState } from "react";
import { useStore } from "@/app/Context/JewelryContext";
import { useSearchParams } from "next/navigation";
import Image, { StaticImageData } from "next/image";

interface UserData {
  name: string;
  email: string;
  phone: string;
  address: {
    street_name: string;
    city: string;
  };
}

interface CartItem {
  id: string | number;
  Category: string;
  Price: number;
  quantity: number;
  imageUrl:StaticImageData
}

export default function OrderSummary() {
  const searchParams = useSearchParams();
  const { cartItems } = useStore();
  const [localCartItems, setLocalCartItems] = useState<CartItem[]>([]);
  
  // Get user data from URL params
  const userData: UserData = {
    name: decodeURIComponent(searchParams.get('name') || ''),
    email: decodeURIComponent(searchParams.get('email') || ''),
    phone: decodeURIComponent(searchParams.get('phone') || ''),
    address: {
      street_name: decodeURIComponent(searchParams.get('street') || ''),
      city: decodeURIComponent(searchParams.get('city') || '')
    }
  };

  // Try to get cart items from URL if they exist
  const cartParam = searchParams.get('cart');
  
  useEffect(() => {
    // First try to use cart from URL parameter
    if (cartParam) {
      try {
        const parsedCart = JSON.parse(decodeURIComponent(cartParam));
        setLocalCartItems(parsedCart);
        return;
      } catch (e) {
        console.error("Failed to parse cart from URL", e);
      }
    }
    
    // If no cart in URL, try to get from localStorage
    const storedCart = localStorage.getItem('jewelryCartItems');
    if (storedCart) {
      try {
        const parsedCart = JSON.parse(storedCart);
        setLocalCartItems(parsedCart);
        return;
      } catch (e) {
        console.error("Failed to parse cart from localStorage", e);
      }
    }
    
    // If all else fails, use cartItems from the store
    if (cartItems && cartItems.length > 0) {
      setLocalCartItems(cartItems);
    }
  }, [cartParam, cartItems]);

  // Calculate totals from the items we have available
  const items = localCartItems.length > 0 ? localCartItems : cartItems;
  const total = items.reduce((sum, item) => sum + (item.Price * item.quantity), 0);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-amber-600">Order Summary</h1>
      
      {/* User Information */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Customer Details</h2>
        <div className="space-y-2">
          <p><span className="font-medium">Name:</span> {userData.name}</p>
          <p><span className="font-medium">Email:</span> {userData.email}</p>
          <p><span className="font-medium">Phone:</span> +20{userData.phone}</p>
          <p><span className="font-medium">Address:</span> {userData.address.street_name}, {userData.address.city}</p>
        </div>
      </div>

      {/* Order Details */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Order Items</h2>
        {items.length > 0 ? (
          <div className="space-y-4">
            {items.map((item, index) => (
              <div key={item.id || `item-${index}`} className="flex justify-between items-center border-b pb-4">
                <div className="flex items-center space-x-3">
                  {/* Product Image */}
                  <div className="w-16 h-16 rounded-md overflow-hidden bg-gray-100 flex-shrink-0">
                    {item.imageUrl ? (
                      <Image 
                        src={item.imageUrl} 
                        alt={item.Category}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                        No image
                      </div>
                    )}
                  </div>
                  
                  <div>
                    <p className="font-medium">{item.Category}</p>
                    <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                  </div>
                </div>
                <p className="font-medium">EGP {(item.Price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No items in the cart.</p>
        )}
      </div>

      {/* Total */}
      <div className="flex justify-between items-center pt-4 border-t">
        <span className="font-bold text-lg">Total:</span>
        <span className="font-bold text-lg text-amber-600">EGP {total.toFixed(2)}</span>
      </div>
      
      <div className="mt-8 border-t pt-4">
        <p className="text-center text-gray-600">
          Thank you for your order! We will process it shortly.
        </p>
      </div>
    </div>
  );
}
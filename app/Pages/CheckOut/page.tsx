
"use client"
import React, { useEffect } from "react";
import TotalCart from "@/app/Components/TotalCart";
import { useStore } from "@/app/Context/JewelryContext";


interface Userdata {
  name: string,
  email: string,
  address: {
    street_name: string,
    city: string,
  },
}

export default function AddressForm() {
  const { cartItems } = useStore();
  const [phone, setPhone] = React.useState<string>('');
  const [UserData, setUserData] = React.useState<Userdata>({
    name: '',
    email: '',
    address: {
      street_name: '',
      city: '',
    },
  });

  // Save cart items to localStorage whenever they change
  useEffect(() => {
    if (cartItems && cartItems.length > 0) {
      localStorage.setItem('jewelryCartItems', JSON.stringify(cartItems));
    }
  }, [cartItems]);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    const numbersOnly = input.replace(/\D/g, '').slice(0, 11);
    setPhone(numbersOnly);
  };

  // Function to generate the summary link with cart data
  const generateSummaryLink = () => {
    const baseUrl = window.location.origin;
    const params = new URLSearchParams({
      name: UserData.name,
      email: UserData.email,
      phone: phone,
      street: UserData.address.street_name,
      city: UserData.address.city,
      // Include cart items in the URL
      cart: JSON.stringify(cartItems)
    }).toString();
  
    return `${baseUrl}/Pages/OrderSummary?${params}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!UserData.name || !UserData.email || !UserData.address.street_name || !UserData.address.city || !phone) {
      alert("Please fill all required fields");
      return;
    }

    // Make sure there are items in the cart
    if (cartItems.length === 0) {
      alert("Your cart is empty. Please add items before placing an order.");
      return;
    }

    // Save cart to localStorage as a backup
    localStorage.setItem('jewelryCartItems', JSON.stringify(cartItems));

    const summaryLink = generateSummaryLink();
    const phoneNumber = "201061797406"; // Store owner's WhatsApp number

    // Create a formatted message for WhatsApp
    const message = `New Order Received! 🎉
  
*Customer Details:*
Name: ${UserData.name}
Email: ${UserData.email}
Phone: +20${phone}
Address: ${UserData.address.street_name}, ${UserData.address.city}

*Order Summary:*
${cartItems.map(item =>
      `${item.Category} - Qty: ${item.quantity} - EGP ${(item.Price * item.quantity).toFixed(2)}`
    ).join('\n')}

*Total:* EGP ${cartItems.reduce((sum, item) => sum + (item.Price * item.quantity), 0).toFixed(2)}

View full order details: ${summaryLink}`;

    // Create WhatsApp link
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp in a new window before navigating to summary
    // This avoids popup blocking issues
    window.open(whatsappLink, '_blank');
    
    // Then navigate to the summary page
    // Use a slight delay to ensure both actions complete
    setTimeout(() => {
      window.location.href = summaryLink;
    }, 300);
  };

  return (
    <div className="flex flex-col sm:flex sm:flex-row justify-center p-6 rounded-lg shadow-md border border-gray-100 gap-5">
      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Name Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="full-name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="full-name"
              name="full-name"
              autoComplete="name"
              value={UserData.name}
              onChange={(e) => setUserData({ ...UserData, name: e.target.value })}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              placeholder="John Doe"
            />
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              value={UserData.email}
              onChange={(e) => setUserData({ ...UserData, email: e.target.value })}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              placeholder="john@example.com"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <div className="flex">
              <span className="px-4 py-2 border border-r-0 border-gray-300 rounded-l-md bg-gray-50">+20</span>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={phone}
                onChange={handlePhoneChange}
                autoComplete="tel"
                pattern="(010|011|012|015)\d{8}"
                required
                className="flex-1 px-4 py-2 border border-gray-300 rounded-r-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                placeholder="1012345678"
                maxLength={11}
              />
            </div>
            <p className="text-sm text-gray-500 mt-1">Format: 10/11/12/15 followed by 8 digits</p>
          </div>
        </div>

        {/* Address */}
        <div>
          <label htmlFor="street-address" className="block text-sm font-medium text-gray-700 mb-1">
            Street Name
          </label>
          <input
            type="text"
            id="street-address"
            name="street-address"
            autoComplete="street-address"
            value={UserData.address.street_name}
            onChange={(e) => setUserData({
              ...UserData,
              address: {
                ...UserData.address,
                street_name: e.target.value
              }
            })}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            placeholder="Main Street Name"
          />
        </div>

        {/* City */}
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            autoComplete="address-level2"
            value={UserData.address.city}
            onChange={(e) => setUserData({
              ...UserData,
              address: {
                ...UserData.address,
                city: e.target.value
              }
            })}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            placeholder="e.g. Cairo"
          />
        </div>

        {/* Cart Summary Preview */}
        {cartItems.length === 0 ? (
          <div className="text-red-500 text-center p-2 bg-red-50 rounded">
            Your cart is empty. Please add items before placing an order.
          </div>
        ) : (
          <div className="text-green-700 text-center p-2 bg-green-50 rounded">
            {cartItems.length} item(s) in cart - Total: EGP {cartItems.reduce((sum, item) => sum + (item.Price * item.quantity), 0).toFixed(2)}
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={cartItems.length === 0}
          className={`w-full py-3 px-4 rounded-md transition-colors font-medium focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 ${
            cartItems.length === 0 
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
              : 'bg-amber-600 text-white hover:bg-amber-700'
          }`}
        >
          Complete Order
        </button>
      </form>

      <div className="flex justify-end items-end">
        <TotalCart />
      </div>
    </div>
  );
}


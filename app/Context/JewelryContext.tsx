"use client"
import React, { createContext, useState, useCallback, useEffect } from 'react';
import { StaticImageData } from 'next/image';
import AllCollection from '@/app/AllCollectionData';
import toast from 'react-hot-toast';

interface CartItem {
    id: number;
    imageUrl: StaticImageData;
    quantity: number;
    Price: number;
    Category: string;
}

type ContextType = {
    Add_to_Cart: (productId: number) => void;
    cartItems: CartItem[];
    UpdateQuantity: (ID: number, Quantity: number) => void;
    get_TotalCart: () => number;
    get_Cart_Count: () => number,
    cartCount: number,
};

export const StoreContext = createContext<ContextType>({
    Add_to_Cart: () => {
        throw new Error('Add_to_Cart function must be used within StoreProvider');
    },
    cartItems: [],
    UpdateQuantity: () => { },
    get_TotalCart: () => 0,
    get_Cart_Count: () => 0,
    cartCount: 0,
});

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [cartCount, setCartCount] = useState<number>(0);

    const Add_to_Cart = (itemID: number) => {
        const findProduct = AllCollection.find((product) => product.id === itemID);
        if (!findProduct) return;

        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === itemID);
            if (existingItem) {
                return prevItems.map(item =>
                    item.id === itemID ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevItems, { ...findProduct, quantity: 1 }];
        });
    };

    const UpdateQuantity = (ID: number, Quantity: number) => {
        setCartItems(prevItems =>
            Quantity === 0
                ? prevItems.filter(item => item.id !== ID)  // Remove item if quantity is 0
                : prevItems.map(item =>
                    item.id === ID
                        ? { ...item, quantity: Quantity }  // Update quantity if ID matches
                        : item  // Keep other items unchanged
                )
        );
    };

    const get_TotalCart = () => {
        let total: number = 0;
        for (const item of cartItems) {
            if (item.quantity > 0) {
                total += item.quantity * item.Price;
            }
        }
        return total;
    }

    const get_Cart_Count = useCallback(() => {
        const count = cartItems.reduce((total, item) => total + item.quantity, 0);
        setCartCount(count);
        return count;
    }, [cartItems]);

    useEffect(() => {
        get_Cart_Count();
    }, [get_Cart_Count]);

    const value1 = {
        Add_to_Cart, 
        cartItems, 
        UpdateQuantity,
        get_TotalCart,
        get_Cart_Count,
        cartCount
    }

    return (
        <StoreContext.Provider value={value1}>
            {children}
        </StoreContext.Provider>
    );
};

export const useStore = () => {
    const context = React.useContext(StoreContext);
    if (!context) {
        toast.error("Error");
    }
    return context;
};
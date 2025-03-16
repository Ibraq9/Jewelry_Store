"use client"
import React, { createContext, useState, useCallback, useEffect, useRef } from 'react';
import { StaticImageData } from 'next/image';
import AllCollection from '@/app/AllCollectionData';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


interface CartItem {
    id: number;
    imageUrl: StaticImageData;
    quantity: number;
    Price: number;
    Category: string;
}

interface FilterProductType {
    id: number;
    Price: number;
    imageUrl: StaticImageData;
    Category: string;
}

type ContextType = {
    Add_to_Cart: (productId: number) => void;
    cartItems: CartItem[];
    UpdateQuantity: (ID: number, Quantity: number) => void;
    get_TotalCart: () => number;
    get_Cart_Count: () => number,
    cartCount: number,
    isOwner: boolean,
    setisOwner: React.Dispatch<React.SetStateAction<boolean>>,
    Password: string,
    setPassword: React.Dispatch<React.SetStateAction<string>>,
    CheckPassword: () => void,
    AcceptOwner: boolean,
    setAcceptOwner: React.Dispatch<React.SetStateAction<boolean>>,
    FilterProduct: FilterProductType[],
    setFilterProduct: React.Dispatch<React.SetStateAction<FilterProductType[]>>,
    handleDelete: (ID: number) => void
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
    isOwner: false,
    setisOwner: () => { },
    Password: '',
    setPassword: () => { },
    CheckPassword: () => { },
    AcceptOwner: false,
    setAcceptOwner: () => { },
    FilterProduct: [],
    setFilterProduct: () => { },
    handleDelete: () => []
});

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [cartCount, setCartCount] = useState<number>(0);
    const [isOwner, setisOwner] = useState<boolean>(false);
    const isInitialMount = useRef(true);
    const [Password, setPassword] = React.useState<string>('');
    const [AcceptOwner, setAcceptOwner] = React.useState<boolean>(false);
    const [FilterProduct, setFilterProduct] = React.useState<FilterProductType[]>([]);



    const CheckPassword = () => {
        if (Password === 'r***a1') {
            setAcceptOwner(true);
        } else {
            setAcceptOwner(false);
        }
    }

    const Add_to_Cart = (itemID: number) => {
        const findProduct = AllCollection.find((product) => product.id === itemID);
        if (!findProduct) {
            return;
        }
        let action = '';
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === itemID);
            if (existingItem) {
                action = 'increase';
                return prevItems.map(item =>
                    item.id === itemID ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            action = 'add';
            return [...prevItems, { ...findProduct, quantity: 1 }];
        });

        if (action === 'increase') {
            toast.success("Item increased success");
        } else if (action === 'add') {
            toast.success("Item added success");
        }
    };

    const UpdateQuantity = (ID: number, Quantity: number) => {

        const itemExists = cartItems.some(item => item.id === ID);
        if (!itemExists) return;

        const currentQuantity = cartItems.find(item => item.id === ID)?.quantity;
        if (currentQuantity === Quantity) return;

        setCartItems(prevItems => {
            if (Quantity === 0) {
                const newItems = prevItems.filter(item => item.id !== ID);
                return newItems;
            } else {
                return prevItems.map(item =>
                    item.id === ID ? { ...item, quantity: Quantity } : item
                );
            }
        });

        if (Quantity === 0) {
            toast.success("Item deleted successfully");
        }
    };

    const get_TotalCart = useCallback(() => {
        return cartItems.reduce((total, item) => total + (item.quantity * item.Price), 0);
    }, [cartItems]);

    const get_Cart_Count = useCallback(() => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    }, [cartItems]);

    // Update cartCount in useEffect, not during render
    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
            return;
        }
        const count = cartItems.reduce((total, item) => total + item.quantity, 0);
        setCartCount(count);

    }, [cartItems]);


    const handleDelete = (ID: number) => {
        const UpdateAllCollection = AllCollection.filter(item => item.id !== ID);
        setFilterProduct(UpdateAllCollection);
    }

    const value1 = {
        Add_to_Cart,
        cartItems,
        UpdateQuantity,
        get_TotalCart,
        get_Cart_Count,
        cartCount,
        isOwner,
        setisOwner,
        CheckPassword,
        Password,
        setPassword,
        AcceptOwner,
        setAcceptOwner,
        FilterProduct,
        setFilterProduct,
        handleDelete,
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
        throw new Error("useStore must be used within a StoreProvider");
    }
    return context;
};






















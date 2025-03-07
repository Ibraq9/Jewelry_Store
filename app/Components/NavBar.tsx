"use client"
import React from 'react';
import Image from "next/image";
import Logo from '../assets/Logo.png'
import Cart from '../assets/cart_icon.png';
import Sidebar from '../assets/menu_icon.png'
import Link from 'next/link';
import Close from '../assets/cross_icon.png';
import { usePathname } from "next/navigation";




const NavBar = () => {

    const [SideMenu, setSideMenu] = React.useState(false);
    const pathname = usePathname();

    return (
        <div className='flex justify-around items-center h-20'>
            <Link href={'/'}><Image className='w-60  cursor-pointer' src={Logo} alt='Logo Image' /></Link>

            <ul className='gap-7 hidden sm:flex font-bold'>
                <Link href={'/'} className={`flex flex-col items-center ${pathname === '/Pages' || pathname === '/' ? "active" : ""}`}>
                    <p>Home</p>
                    <hr className="w-2/4 border-none h-[1.5px] bg-black hidden" />
                </Link>

                <Link href={'/Pages/Collection'} className={`flex flex-col items-center ${pathname === '/Pages/Collection' ? "active" : ""}`}>
                    <p>Collection</p>
                    <hr className="w-2/4 border-none h-[1.5px] bg-black hidden" />
                </Link>


                <Link href={'/Pages/About'} className={`flex flex-col items-center ${pathname === '/Pages/About' ? "active" : ""}`}>
                    <p>About Us</p>
                    <hr className="w-2/4 border-none h-[1.5px] bg-black hidden" />
                </Link>
            </ul>

            <div className='flex gap-5'>
                <Link href={'/Pages/Cart'} className="relative inline-block">
                    <Image
                        className='w-5 cursor-pointer'
                        src={Cart}
                        alt='Cart Icon'
                    />

                </Link>

                <Image
                    onClick={() => setSideMenu(prev => !prev)}
                    className='w-5 sm:hidden cursor-pointer'
                    src={Sidebar}
                    alt='SideBar'
                    width={20}
                    height={20}
                />
            </div>


            <div className={`w-full absolute right-0 bottom-0 top-0 overflow-hidden bg-white transition-all ${SideMenu ? 'block' : 'hidden'}`} style={{ zIndex: 999 }}>
                <div>
                    <div onClick={() => setSideMenu(prev => !prev)} className="flex gap-3 m-3 items-center cursor-pointer">
                        <Image className='w-4' src={Close} alt='Back arraw Icon' />
                        <p>Back</p>
                    </div>
                    <div className="flex flex-col gap-5 m-6">
                        <Link href={'/'} onClick={() => setSideMenu(prev => !prev)} className='py-2 pl-6 border'>Home</Link>

                        <Link href={'/Pages/Collection'} onClick={() => setSideMenu(prev => !prev)} className='py-2 pl-6 border'>collections</Link>

                        <Link href={'/Pages/About'} onClick={() => setSideMenu(prev => !prev)} className='py-2 pl-6 border'>About us</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar





















































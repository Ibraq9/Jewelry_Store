import React from 'react'
import Hero from '../Components/Hero'
import SomeCollection from '../Components/SomeCollection';
import MiddleComp from '../Components/MiddleComp';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import { StoreProvider } from '../Context/JewelryContext';

const page = () => {
  return (
    <div className='flex flex-col'>
      <StoreProvider>
        <NavBar />
        <Hero />
        <SomeCollection />
        <MiddleComp />
        <Footer />
      </StoreProvider>
    </div>
  )
}

export default page

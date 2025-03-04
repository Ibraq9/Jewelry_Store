import React from 'react'
import Hero from '../../Components/Hero'
import SomeCollection from '../../Components/SomeCollection';
import MiddleComp from '../../Components/MiddleComp';

const pag = () => {
  return (
    <div className='flex flex-col'>
      <Hero/>
      <SomeCollection/>
      <MiddleComp/>
    </div>
  )
}

export default pag

import React from 'react'
import OilsAndGhee from './OilsAndGhee'
import Vegetables from'./Vegetables'
import PackedFood from './PackedFood'


const Grocery = () => {
  return (
    <div>
        <h1 className='font-extrabold text-lime-400 text-center text-5xl p-2'>
        Groceries</h1>
        <div className='flex m-2 justify-between'>
        <OilsAndGhee />
        <Vegetables />
        <PackedFood />
        </div>
    </div>
  )
}

export default Grocery
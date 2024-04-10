import React from 'react'
import { IMG_CDN } from '../utils/constants';


const RestaurantCard = (props) => {

  

  const {resData} = props;

  const {name , areaName , cuisines , avgRatingString , cloudinaryImageId } = resData.info;
 
   
  return (
    <div className='resCard w-64 rounded-lg shadow-lg shadow-violet-400 m-1 mb-4 hover:scale-110 transition duration-500 cursor-pointer'> 
        
            <img
            className='w-60 h-60 mt-4  ml-2 rounded-lg'
            src={IMG_CDN + cloudinaryImageId }
            alt='resImage'>
            </img>
            <h3 className='p-2 font-bold'>{name}</h3>
            <h3 className='p-2 font-bold'>{areaName}</h3>
            <h4 className='p-2 font-semibold text-sm'>{cuisines.join(" ")}</h4>
            <h4 className='p-2 font-semibold text-sm'>{avgRatingString}⭐</h4>


    </div>
  )
}

export default RestaurantCard
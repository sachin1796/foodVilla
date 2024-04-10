import React from 'react'
import { useParams } from 'react-router-dom'
import {IMG_CDN} from "../utils/constants"
import MenuDetails from './MenuDetails';
import Shimmer from './Shimmer';
import useRestaurant from '../customHooks/useRestaurant';

const IndividualRestaurantDetails = () => {

    const params = useParams();
    const {resId} = params;

    const restaurantInfo = useRestaurant(resId);


  return !restaurantInfo ? (<Shimmer />) : (
  <div className='text-orange-600 font-semibold'>
      <div>
        <h1 className='ml-8 p-2 text-2xl font-bold'>{restaurantInfo?.resInfo?.name}</h1>
        <img
        alt='resImage'
        className='rounded-lg ml-8 mt-2 w-1/4 h-64'
        src={IMG_CDN +  restaurantInfo?.resInfo?.cloudinaryImageId}></img>
        {/* <h1 className='font-semibold text-lg m-1'>{individualRes.cuisines.join(" ")}</h1> */}
        <h1 className='font-semibold m-1 ml-8'>{restaurantInfo?.resInfo?.areaName + ", " + restaurantInfo?.resInfo?.city}</h1>
        <h1 className='font-semibold m-1 ml-8'>{restaurantInfo?.resInfo?.costForTwoMessage}</h1>
    </div>
    <div>
        <MenuDetails />
    </div>
  </div>
  )
}

export default IndividualRestaurantDetails
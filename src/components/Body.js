import React, { useEffect, useState } from 'react'
import RestaurantCard from "./RestaurantCard"
import { SWIGGY_API_URL } from '../utils/constants'
import Shimmer from './Shimmer'
import { Link } from 'react-router-dom'
import useOnLineStatus from "../customHooks/useOnlineStatus"


const Body = () => {


  const[restaurants , setRestaurants] = useState([]);
  const[newFilteredRestaurants, setNewFilteredRestaurants] = useState([]);
  const[searchText, setSearchText] = useState("");



 
  useEffect(() => {
    fetchData();
  },[])

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API_URL);
    const response = await data.json();
   

    const list = response.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    setRestaurants(list)
    setNewFilteredRestaurants(list)
  }


  function filterData(searchText,restaurants){
    const filteredRestaurants = restaurants.filter((restaurant) => restaurant.info?.name.toLowerCase().includes(searchText.toLowerCase()))
    return filteredRestaurants;  
  }


const onLineStatus = useOnLineStatus();


if(onLineStatus === false) {
  return <h1>Offline , Please Check Internet Connection!!</h1>
}



if(restaurants.length === 0){
  return <Shimmer />
}


  return (
    <div>
        <div className='flex flex-row justify-center m-2'>
            <input 
            className='w-96 p-2 m-2 rounded-lg border-2 border-violet-500 hover:scale-110 transition duration-500 cursor-pointer text-red-600 font-semibold focus:outline-none'
            type='text' 
            placeholder='Search for delicious food'
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
              />
            <button className='bg-red-500 text-white p-2 m-2 ml-6 rounded-lg font-semibold border-2 border-violet-500'
             onClick={() => {
              // onclick of the search i want to provide the searched text and List of restaurant from where the data will be filtered
              const data = filterData(searchText,restaurants)
              // once the data has been filtered i will update my filtered restaurants
              setNewFilteredRestaurants(data);
             }}>Search</button>
        </div>
        <div className='flex flex-row flex-wrap ml-[120px]'>
        {
         newFilteredRestaurants?.map((restaurant,index) => (<Link to={"/restaurant/"+restaurant.info?.id}><RestaurantCard key={index}   resData={restaurant}/></Link>))
        
        }
        </div>
    </div> 
  )
}

export default Body
import { useEffect ,useState } from "react"


const useRestaurantMenu = (resId) => {

    const[restaurantDetails,setRestaurantDetails] = useState(null);

    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {

        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.8466937&lng=80.94616599999999&restaurantId="
        +resId+"&catalog_qa=undefined&submitAction=ENTER");
        const response = await data.json();


        const modifiedData = {
            resInfo : response?.data?.cards[0]?.card?.card?.info,
            menu : response?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards,
            
            }
            setRestaurantDetails(modifiedData)        
    }
    return restaurantDetails;
 }

 export default useRestaurantMenu;
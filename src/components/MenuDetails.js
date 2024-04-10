import { useParams } from 'react-router-dom';
import useRestaurant from '../customHooks/useRestaurant';

const MenuDetails = () => {

    const params = useParams();
    const {resId} = params;

    const menuInfo = useRestaurant(resId);


  return (
    <div>
        <h1 className='ml-8 pt-5 font-bold text-2xl text-red-500'>Menu Items</h1>
        {
           menuInfo?.menu?.map((item) => <li className='p-2 m-2' key={item?.card?.info?.id}>{item?.card?.info?.name}</li>)
        }
    </div>
  )
}

export default MenuDetails
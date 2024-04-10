import React from 'react'
import {icon} from "../utils/constants"
import { useState , useContext } from 'react'
import { Link } from 'react-router-dom'
import userContext from '../utils/UserContext'


const Header = () => {
  const [buttonName,setButtonName] = useState("Login")
  const {user2} = useContext(userContext);

  return (
    <div className='flex justify-between border-2 border-violet-500 bg-gradient-to-l from-violet-400'>
      <div className='logo w-28 p-2'>
        <img
        src={icon}
        alt='logo' /> 
      </div>
      <div className='navBar'>
        <ul className='flex gap-2 m-10  font-bold text-red-600 text-lg cursor-pointer'>
          <Link to="/">
          <li className='hover:text-white'>Home</li>
          </Link>
          <Link to="/about">
          <li className='hover:text-white'>About Us</li>
          </Link>
          <Link to="/instamart">
          <li className='hover:text-white'>Instamart</li>
          </Link>
          <Link to="/blogs">
          <li className='hover:text-white'>Blogs</li>
          </Link>
          <Link to="/grocery">
          <li className='hover:text-white text-green-700 text-xl mx-4'>Grocery</li>
          </Link>
          <li>{user2.name}</li>
          <button
           className='text-violet-800 hover:text-red-600 border-2 border-violet-800 rounded-lg mx-2 px-2'
           onClick={() => {
            buttonName === "Login" ? setButtonName("Logout") : setButtonName("Login");
           }}
           >{buttonName}</button>

        </ul>
      </div>

      
    </div>
  )
}

export default Header
import React, { useState } from 'react'

import { Outlet } from 'react-router-dom'

const Section = ({title,description,isVisible,setIsVisible}) => {
 
  return (
    <div className='border border-rose-200 p-2 m-2'>
      <h3 className='font-bold text-xl'>{title}</h3>
      {
        isVisible ?   ( <button 
        className='bg-red-700 rounded-md text-white px-1 m-2'
        onClick={() => setIsVisible(false)}>Hide</button>) : (
          <button 
        className='bg-red-700 rounded-md text-white px-1 m-2'
        onClick={() => setIsVisible(true)}>Show</button>
        )
      }
      {isVisible && <p>{description}</p>}

      
    </div> 
  )
}

const Instamart = () => {

  const[visibleSection , setVisibleSection] = useState("about");


  return (
    <div>
      <h1 className='text-center font-bold text-2xl'>Instamart</h1>
      <Section
      title={"About Instamart"}
      description={
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
        } 

      isVisible={visibleSection === "about"}
      setIsVisible={() => setVisibleSection("about")}
      />
        <Section
      title={"About the Journey"}
      description={
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
        } 
        isVisible={visibleSection === "journey"}
        setIsVisible={() => setVisibleSection("")}

      />  <Section
      title={"Careers"}
      description={
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
        } 
        isVisible={visibleSection === "careers"}
        setIsVisible={() => setVisibleSection("careers")}

      />
      

    <Outlet />
    </div>
  )
}

export default Instamart
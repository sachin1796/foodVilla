import React from 'react'

const Shimmer = () => {
  return (

    
    <div className='flex flex-row flex-wrap mt-28'>
        {Array(12)
            .fill("")
            .map((e,index) =>(
                <div 
                key={index}
                className='w-64 h-80 flex-wrap ml-[120px] rounded-lg shadow-lg shadow-violet-400 m-1 mb-4'></div>
            ))
        }   
    </div>
  )
  
}

export default Shimmer
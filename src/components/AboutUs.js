import React from 'react'

const AboutUs = () => {
  return (
    <div>
      <img 
        className='absolute -z-20 h-screen w-screen'
        src='https://ychef.files.bbci.co.uk/1280x720/p0gtwv3p.jpg'></img>
      <div className='py-16 px-4'>
        <h1 className='text-4xl font-semibold text-white'>
        Our mission is to elevate the quality of life for the urban consumer with unparalleled convenience.
        Convenience is what makes us tick. It's what makes us get out of bed and say, "Let's do this."</h1>
      </div>
      <div className='px-4'>
        <h1 className='text-center text-5xl py-5 text-red-100 font-bold'>What’s In Store For The Future?</h1>
        <h1 className='text-3xl text-white'>Food Villa has grand plans to be India’s most loved hyperlocal player.
          It aims to be the most accessible platform on the network 
          - reimagining the meaning of convenience in the country through a variety of service offerings.</h1>
      </div>

    </div>
  )
}

export default AboutUs
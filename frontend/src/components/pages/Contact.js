import React from 'react'
import video from '../../assets/contactbackground.mp4'

const Contact = () =>
{
  return (
    <div className='Contact'>
      <div className="content">
        <video src={video} autoPlay loop muted playsInline/>
        <div className='center'>
          contact
        </div>
      </div>
    </div>
  )
}

export default Contact
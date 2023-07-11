import React from 'react'
import video from '../../assets/resumebackground.mp4'
import picture from  '../../assets/resume.png'

const Resume = () =>
{
  return (
    <div className='Resume'>
      <div className="content">
        <video src={video} autoPlay loop muted playsInline/>
        <div className='center'>
          <img src={picture} alt='resume'/>
        </div>
      </div>
    </div>
  )
}

export default Resume
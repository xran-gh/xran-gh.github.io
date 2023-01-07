import React from 'react'
import video from '../../assets/errorbackground.mp4'

const NotFound = () =>
{
  return (
    <div className='NotFound'>
      <div className="content">
        <video src={video} autoPlay loop muted playsInline/>
        <div className='center'>
          <div className="code">404</div>
          <div className="title">Error</div>
          <div className="subtitle">Page Not Found</div>
        </div>
      </div>
    </div>
  )
}

export default NotFound
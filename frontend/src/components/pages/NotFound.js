import React from 'react'
import video from '../../assets/errorbackground.mp4'

const NotFound = () =>
{
  return (
    <div className='NotFound'>
			<video src={video} autoPlay loop muted playsInline/>
      <div className="content">
        <div className="code">404</div>
        <div className="title">Error</div>
        <div className="subtitle">Page Not Found</div>
      </div>
    </div>
  )
}

export default NotFound
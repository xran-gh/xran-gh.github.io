import React from 'react'
import video from '../../assets/errorbackground.mp4'
import { useInView } from 'react-intersection-observer';

const NotFound = () =>
{
  const { ref: codeRef, inView: codeInView } = useInView({threshold: 0.1});
  const { ref: subtitleRef, inView: subtitleInView } = useInView({threshold: 0.1});

  return (
    <div className='NotFound'>
      <div className="content">
        <video src={video} autoPlay loop muted playsInline/>
        <div className='center'>
          <div ref={codeRef} className={`${'code'} ${codeInView ? 'animateTitle' : 'OutOfView'}`}>404</div>
          <div className="title">Error</div>
          <div ref={subtitleRef} className={`${'subtitle'} ${subtitleInView ? 'animateSubtitle' : 'OutOfView'}`}>Page Not Found</div>
        </div>
      </div>
    </div>
  )
}

export default NotFound
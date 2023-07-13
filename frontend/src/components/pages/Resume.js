import React from 'react'
import video from '../../assets/resumebackground.mp4'
import picture from  '../../assets/resume.png'
import { useInView } from 'react-intersection-observer';

const Resume = () =>
{
  const { ref: resumeRef, inView: resumeInView } = useInView({threshold: 0.1});

  return (
    <div className='Resume'>
      <div className="content">
        <video src={video} autoPlay loop muted playsInline/>
        <div ref={resumeRef} className={`${'center'} ${resumeInView ? 'animateResume' : 'OutOfView'}`}>
          <img src={picture} alt='resume'/>
        </div>
      </div>
    </div>
  )
}

export default Resume
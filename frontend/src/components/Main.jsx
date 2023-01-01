import React from 'react'
import video from '../assets/background.mp4'

const Main = () =>
{
  return (
    <div className='Main'>
      <div className="overlay"/>
      <video src={video} autoPlay loop muted/>
      <div className="content">
        <div className="title">Hello 你好</div>
        <div className="name">I'm Ran Xu</div>
        <div className="subtitle">Software Engineer</div>
      </div>
    </div>
  )
}

export default Main
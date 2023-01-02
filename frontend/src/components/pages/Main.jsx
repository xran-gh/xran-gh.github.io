import React from 'react'
import video from '../../assets/background.mp4'

const Main = () =>
{
  return (
    <div className='Main'>
      <video src={video} autoPlay loop muted playsInline/>
      <div className="content">
        <div className="title">Hello 你好, I'm</div>
        <div className="name">Ran Xu</div>
        <div className="subtitle">Software Engineer</div>
      </div>
      Main
    </div>
  )
}

export default Main
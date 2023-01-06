import React from 'react'
import video from '../../assets/background.mp4'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

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
      <div className="expand">
          <ExpandMoreIcon fontSize='inherit'/>
      </div>
      Main
    </div>
  )
}

export default Main
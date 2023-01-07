import React from 'react'
import video from '../../assets/mainbackground.mp4'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const Main = () =>
{
  return (
    <div className='Main'>      
      <div className="content">
        <video src={video} autoPlay loop muted playsInline/>
        <div className='center'>
          <div className="title">Hello 你好, I'm</div>
          <div className="name">Ran Xu</div>
          <div className="subtitle">Software Engineer</div>
        </div>
        <div className='expand'>
          <ExpandMoreIcon className='icon' fontSize='inherit'/>
        </div>
      </div>
      <div className='AboutCard'>
        My Journey
      </div>
      <div className='CoursesCard'>
        Programming Courses
      </div>
      <div className='ProjectCard'>
        Project Ideas
      </div>
    </div>
  )
}

export default Main
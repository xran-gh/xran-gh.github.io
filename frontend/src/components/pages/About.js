import React from 'react'
import video from '../../assets/aboutbackground.mov'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {Link} from 'react-scroll';
import Button from "@mui/material/Button";

const About = () =>
{
  return (
    <div className='About'>
      <div className="content">
        <video src={video} autoPlay loop muted playsInline/>
        <div className='center'>
          <div className="title">Hello 你好, I'm</div>
          <div className="name">Ran Xu</div>
          <div className="subtitle">Software Engineer</div>
        </div>
        <div className='expand'>
          <Link to="AboutBody" smooth={true} duration={1000}>
            <Button disableRipple style={{backgroundColor:'transparent'}}>
              <ExpandMoreIcon className='icon' />
            </Button>
          </Link>
        </div>
      </div>
      <div className='AboutBody'>
        About My Journey So Far
      </div>
      <div className='CoursesCard'>
        Programming Course Summary And Homework
      </div>
      <div className='ProjectCard'>
        Current Projects And Future Ideas
      </div>
    </div>
  )
}

export default About
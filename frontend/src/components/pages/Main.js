import React from 'react'
import video from '../../assets/mainbackground.mp4'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {Link} from 'react-scroll';
import Button from "@mui/material/Button";
import PersonIcon from '@mui/icons-material/Person'
import SchoolIcon from '@mui/icons-material/School'
import LightbulbIcon from '@mui/icons-material/Lightbulb'

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
          <Link to="AboutCard" smooth={true} duration={1000}>
            <Button disableRipple style={{backgroundColor:'transparent'}}>
              <ExpandMoreIcon className='icon' />
            </Button>
          </Link>
        </div>
      </div>
      <div className='AboutCard'>
        <div className='top'>
          <PersonIcon fontSize='inherit' sx={{paddingRight: "0.2vw"}}/>
          About Me
        </div>
        <div className='center'>
          section under work
        </div>
      </div>
      <div className='CoursesCard'>
        <div className='top'>
          <SchoolIcon fontSize='inherit' sx={{paddingRight: "0.2vw"}}/>
          Programming Courses
        </div>
        <div className='center'>
          section under work
        </div>
      </div>
      <div className='ProjectCard'>
        <div className='top'>
          <LightbulbIcon fontSize='inherit' sx={{paddingRight: "0.2vw"}}/>
          Projects And Ideas
        </div>
        <div className='center'>
          section under work
        </div>
      </div>
    </div>
  )
}

export default Main
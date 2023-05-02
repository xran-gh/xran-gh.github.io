import React from 'react'
import video from '../../assets/mainbg.mp4'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Link } from 'react-scroll';
import Button from "@mui/material/Button";
import PersonIcon from '@mui/icons-material/Person'
import SchoolIcon from '@mui/icons-material/School'
import LightbulbIcon from '@mui/icons-material/Lightbulb'
import { useInView } from 'react-intersection-observer';
import { Link as DomLink} from 'react-router-dom';

const Main = () =>
{
  const { ref: titleRef, inView: titleInView } = useInView({threshold: 0.9});
  const { ref: subtitleRef, inView: subtitleInView } = useInView({threshold: 0.9});
  const { ref: aboutRef, inView: aboutInView } = useInView({threshold: 0.2});
  const { ref: courseRef, inView: courseInView } = useInView({threshold: 0.2});
  const { ref: projectRef, inView: projectInView } = useInView({threshold: 0.2});

  return (
    <div className='Main'>
      <div className="content">
        <video src={video} autoPlay loop muted playsInline/>
        <div className='center'>
          <div ref={titleRef} className={`${'title'} ${titleInView ? 'animateTitle' : 'OutOfView'}`}>Hello 你好, I'm</div>
          <div className={`${'name'}`}>Ran Xu</div>
          <div ref={subtitleRef} className={`${'subtitle'} ${subtitleInView ? 'animateSubtitle' : 'OutOfView'}`}>Software Engineer</div>
        </div>
        <div className='expand'>
          <Link to="AboutCard" smooth={true} duration={1000}>
            <Button disableRipple style={{backgroundColor:'transparent'}}>
              <ExpandMoreIcon className='icon' />
            </Button>
          </Link>
        </div>
      </div>
      <div ref={aboutRef} className={`${'AboutCard'} ${aboutInView ? 'animateAbout' : 'OutOfView'}`}>
        <div className='top'>
          <PersonIcon fontSize='inherit' sx={{paddingRight: "0.2vw"}}/>
          About Me
        </div>
        <div className='center'>
          <div className='aboutContent'>
            <p>
              From software developer to gamer, athletics to arcademics, Chinese to English, come discover
              what interests and experiences that shape the way I am
            </p>
            <div className='imageList'>
              pictures
            </div>
          </div>
          <DomLink to="/about">
            <button className='mainBtn' onClick={()=>{window.scroll(0, 0)}}>Learn More</button>
          </DomLink>
        </div>
      </div>
      <div ref={courseRef} className={`${'CoursesCard'} ${courseInView ? 'animateCourse' : 'OutOfView'}`}>
        <div className='top'>
          <SchoolIcon fontSize='inherit' sx={{paddingRight: "0.2vw"}}/>
          Programming Courses
        </div>
        <div className='center'>
          <DomLink to="/course">
            <button className='mainBtn' onClick={()=>{window.scroll(0, 0)}}>Learn More</button>
          </DomLink>
        </div>
      </div>
      <div ref={projectRef} className={`${'ProjectCard'} ${projectInView ? 'animateProject' : 'OutOfView'}`}>
        <div className='top'>
          <LightbulbIcon fontSize='inherit' sx={{paddingRight: "0.2vw"}}/>
          Projects And Ideas
        </div>
        <div className='center'>
          <DomLink to="/project">
            <button className='mainBtn' onClick={()=>{window.scroll(0, 0)}}>Learn More</button>
          </DomLink>
        </div>
      </div>
    </div>
  )
}

export default Main
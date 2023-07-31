import React from 'react'
import video from '../../assets/mainbackground.mp4'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Link } from 'react-scroll';
import Button from "@mui/material/Button";
import { useInView } from 'react-intersection-observer';

const Main = () =>
{
  const { ref: titleRef, inView: titleInView } = useInView({threshold: 0.9});
  const { ref: subtitleRef, inView: subtitleInView } = useInView({threshold: 0.9});
  const { ref: aboutRef, inView: aboutInView } = useInView({threshold: 0.2});

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
          Who is this guy
        </div>
        <div className='center'>
          <div className='aboutContent'>
            <div className='imageList'>
              pictures
            </div>
            <p>
              From software developer to gamer, athletics to arcademics, Chinese to English, come discover
              what interests and experiences build my skill set and expertise
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Main
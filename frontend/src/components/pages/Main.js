import React from 'react'
import video from '../../assets/mainbackground.mp4'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Link } from 'react-scroll';
import Button from "@mui/material/Button";
import { useInView } from 'react-intersection-observer';
import ImageSlider from "./../ImageSlider";
import self1 from "../../assets/self1.jpg";
import self2 from "../../assets/self2.jpg";
import self3 from "../../assets/self3.jpg";
import self4 from "../../assets/self4.jpg";
import self5 from "../../assets/self5.jpg";

const Main = () =>
{
  const { ref: titleRef, inView: titleInView } = useInView({threshold: 0.9});
  const { ref: subtitleRef, inView: subtitleInView } = useInView({threshold: 0.9});
  const { ref: aboutRef, inView: aboutInView } = useInView({threshold: 0.2});

  const slides = [
    {url: self1, title:'graduation'},
    {url: self2, title:'baseball'},
    {url: self3, title:'anime'},
    {url: self4, title:'universal'},
    {url: self5, title:'ace'}
  ]

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
              <ImageSlider slides={slides}/>
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
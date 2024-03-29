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
import codeImg from "../../assets/code.jpg";

const Main = () =>
{
  const { ref: titleRef, inView: titleInView } = useInView({threshold: 0.9});
  const { ref: subtitleRef, inView: subtitleInView } = useInView({threshold: 0.9});
  const { ref: aboutRef, inView: aboutInView } = useInView({threshold: 0.6});
  const { ref: codeRef, inView: codeInView } = useInView({threshold: 0.2});

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
            <div className='column1'>
              /
            </div>
            <div className='column2'>
              <div className='row1'>
                <ImageSlider slides={slides}/>
              </div>
            </div>
            <div className='column3'>
              /
            </div>
          </div>
        </div>
      </div>

      <div ref={codeRef} className={`${'CodeCard'} ${codeInView ? 'animateCode' : 'OutOfView'}`}>
        <div className='top'>
          Check out the code
        </div>
        <div className='center'>
          <div className='codeContent'>
            <p>
              The code for this website is open source! Come check it out on my Github repository
            </p>
            <div className='codeImage'>
              <img src={codeImg} alt='codeImage'/>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Main
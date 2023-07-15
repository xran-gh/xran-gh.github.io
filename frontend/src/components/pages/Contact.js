import React from 'react'
import video from '../../assets/contactbackground.mp4'
import MailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import InstagramIcon from '@mui/icons-material/Instagram'

const Contact = () =>
{
  return (
    <div className='Contact'>
      <div className="content">
        <video src={video} autoPlay loop muted playsInline/>
        <div className='center'>
          <MailIcon className='icon'/>
          <PhoneIcon/>
          <LinkedInIcon/>
          <GitHubIcon/>
          <InstagramIcon/>
        </div>
      </div>
    </div>
  )
}

export default Contact
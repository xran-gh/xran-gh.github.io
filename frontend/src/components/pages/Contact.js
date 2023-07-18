import React, { useState } from 'react'
import video from '../../assets/contactbackground.mp4'
import MailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import InstagramIcon from '@mui/icons-material/Instagram'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'

const Contact = () =>
{
  const [openMail, setOpenMail] = useState(false);
  const [openPhone, setOpenPhone] = useState(false);

  return (
    <div className='Contact'>
      <div className="content">
        <video src={video} autoPlay loop muted playsInline/>
        <div className='center'>

          <Button className='mailButton' onClick={() => setOpenMail(true)}>
            <MailIcon className='icon'/>
          </Button>

          <Dialog
            open={openMail}
            onClose={() => setOpenMail(false)}
            PaperProps={{
              style:
              {
                backgroundColor: 'black',
                border: "calc(0.2vw + 0.2vh) solid grey",
              }
            }}
          >
            <DialogTitle sx={"color:white; font-size: calc(1.5vw + 1.5vh);"}>Email Address</DialogTitle>
            <DialogContent>
              <DialogContentText sx={"color:red; font-size: calc(3vw + 3vh);"}>xran@mail.com</DialogContentText>
            </DialogContent>
            <DialogActions sx={"justify-content: center"}>
              <Button
                sx=
                {
                  "background: darkred; margin: calc(1vw + 1vh); color: white; font-size: calc(1vw + 1vh); font-weight: 700; padding: 1vh 1vw; border: calc(0.2vw + 0.2vh) solid red;"
                }
                onClick={() => setOpenMail(false)}>Close</Button>
            </DialogActions>
          </Dialog>

          <Button className='phoneButton' onClick={() => setOpenPhone(true)}>
            <PhoneIcon className='icon'/>
          </Button>

          <Dialog
            open={openPhone}
            onClose={() => setOpenPhone(false)}
            PaperProps={{
              style: {
                backgroundColor: 'black',
                border: "calc(0.2vw + 0.2vh) solid grey",
              },
            }}
          >
            <DialogTitle sx={"color:white; font-size: calc(1.5vw + 1.5vh);"}>Phone Number</DialogTitle>
            <DialogContent>
              <DialogContentText sx={"color:red; font-size: calc(3vw + 3vh);"}>(561) 755-1172</DialogContentText>
            </DialogContent>
            <DialogActions sx={"justify-content: center"}>
              <Button
                sx=
                {
                  "background: darkred; margin: calc(1vw + 1vh); color: white; font-size: calc(1vw + 1vh); font-weight: 700; padding: 1vh 1vw; border: calc(0.2vw + 0.2vh) solid red;"
                }
                onClick={() => setOpenPhone(false)}>Close</Button>
            </DialogActions>
          </Dialog>

          <Button className='linkedinButton' href='https://www.linkedin.com/in/ranxu-cs/' target='_blank' rel="noreferrer">
            <LinkedInIcon className='icon'/>
          </Button>

          <Button className='githubButton' href='https://github.com/xran-gh' target='_blank' rel="noreferrer">
            <GitHubIcon className='icon'/>
          </Button>

          <Button className='instagramButton' href='https://www.instagram.com/xran.ig/' target='_blank' rel="noreferrer">
            <InstagramIcon className='icon'/>
          </Button>

        </div>
      </div>
    </div>
  )
}

export default Contact
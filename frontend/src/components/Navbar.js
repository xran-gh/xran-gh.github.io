import React from 'react'
import { NavLink, Outlet} from 'react-router-dom'
import Divider from '@mui/material/Divider';
import HomeIcon from '@mui/icons-material/Home'
import PersonIcon from '@mui/icons-material/Person'
import DescriptionIcon from '@mui/icons-material/Description'
import { useInView } from 'react-intersection-observer';

const RootLayout = () =>
{
  const { ref, inView } = useInView();

  return (
    <div className='root-layout'>
      <header>
        <nav ref={ref} className={inView ? 'animateNav' : 'OutOfView'}>
          <NavLink className={'nav-link'} to="/">
            <HomeIcon fontSize='inherit' sx={{paddingRight: "0.2vw"}}/>
            Home
          </NavLink>
          <Divider
            orientation='vertical'
            flexItem
            sx={{backgroundColor:"red", borderRightWidth: "calc(0.1vw + 0.1vh)"}}
          />
          <NavLink className={'nav-link'} to="resume">
            <DescriptionIcon fontSize='inherit' sx={{paddingRight: "0.2vw"}}/>
            Resume
          </NavLink>
          <Divider
            orientation='vertical'
            flexItem
            sx={{backgroundColor:"red", borderRightWidth: "calc(0.1vw + 0.1vh)"}}
          />
          <NavLink className={'nav-link'} to="contact">
            <PersonIcon fontSize='inherit' sx={{paddingRight: "0.2vw"}}/>
            Contact
          </NavLink>
        </nav>
      </header>
      <main>
        <Outlet/>
      </main>
    </div>
  )
}

export default RootLayout
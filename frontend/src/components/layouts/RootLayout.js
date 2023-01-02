import React from 'react'
import { NavLink, Outlet} from 'react-router-dom'
import Divider from '@mui/material/Divider';
import HomeIcon from '@mui/icons-material/Home'
import PersonIcon from '@mui/icons-material/Person'
import SchoolIcon from '@mui/icons-material/School'
import LightbulbIcon from '@mui/icons-material/Lightbulb'

const RootLayout = () =>
{
  return (
    <div className='root-layout'>
      <header>
        <nav>
          <NavLink className={'nav-link'} to="/">
            <HomeIcon fontSize='inherit' sx={{paddingRight: "0.2vw"}}/>
            Home
          </NavLink>
          <Divider
            orientation='vertical'
            flexItem
            sx={{backgroundColor:"white", borderRightWidth: "calc(0.1vw + 0.1vh)"}}
          />
          <NavLink className={'nav-link'} to="about">
            <PersonIcon fontSize='inherit' sx={{paddingRight: "0.2vw"}}/>
            About
          </NavLink>
          <Divider
            orientation='vertical'
            flexItem
            sx={{backgroundColor:"white", borderRightWidth: "calc(0.1vw + 0.1vh)"}}
          />
          <NavLink className={'nav-link'} to="course">
            <SchoolIcon fontSize='inherit' sx={{paddingRight: "0.2vw"}}/>
            Course
          </NavLink>
          <Divider
            orientation='vertical'
            flexItem
            sx={{backgroundColor:"white", borderRightWidth: "calc(0.1vw + 0.1vh)"}}
          />
          <NavLink className={'nav-link'} to="project">
            <LightbulbIcon fontSize='inherit' sx={{paddingRight: "0.2vw"}}/>
            Project
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
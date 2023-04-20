import {createBrowserRouter, Route, createRoutesFromElements, RouterProvider} from 'react-router-dom'

// Navbar
import Navbar from './components/Navbar';

// pages
import Main from "./components/pages/Main";
import About from './components/pages/About';
import Course from './components/pages/Course';
import Project from './components/pages/Project';
import NotFound from './components/pages/NotFound';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar/>}>
      <Route index element={<Main/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="course" element={<Course/>}/>
      <Route path="project" element={<Project/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Route>
  )
)

function App()
{
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
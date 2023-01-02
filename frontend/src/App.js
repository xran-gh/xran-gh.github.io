import {createBrowserRouter, Route, createRoutesFromElements, RouterProvider} from 'react-router-dom'

// pages
import Main from "./components/pages/Main";
import About from './components/pages/About';
import Course from './components/pages/Course';
import Project from './components/pages/Project';

// layouts
import RootLayout from './components/layouts/RootLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<Main/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="course" element={<Course/>}/>
      <Route path="project" element={<Project/>}/>
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
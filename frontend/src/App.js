import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom'

// Navbar
import Navbar from './components/Navbar';

// pages
import Main from "./components/pages/Main";
import Resume from './components/pages/Resume';
import Contact from './components/pages/Contact';
import NotFound from './components/pages/NotFound';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar/>}>
      <Route index element={<Main/>}/>
      <Route path="resume" element={<Resume/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Route>
  )
)

const App = () =>
{
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
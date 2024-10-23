import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Notes from './components/Notes'
import ViewNotes from './components/ViewNotes'



const router = createBrowserRouter(
  [
    {
        path:'/',
        element:
        <div className='bg-[#161618] text-white h-screen w-full flex flex-col items-center gap-5'>
          <Navbar/>
          <Home/>
        </div>
    },
    {
      path:'/notes',
      element:
      <div className='bg-[#161618] text-white h-screen w-full flex flex-col items-center gap-5'>
        <Navbar/>
        <Notes/>
      </div>
    },
    {
      path:'/notes/:id',
      element:
      <div className='bg-[#161618] text-white h-screen w-full flex flex-col items-center gap-5'>
        <Navbar/>
        <ViewNotes/>
      </div>
    },

  ]

)


function App() {

  return (
    <div >
      <RouterProvider router={router}/>
    </div>
  )
}

export default App

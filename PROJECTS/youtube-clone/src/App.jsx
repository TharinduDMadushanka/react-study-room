import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Video from './Pages/Video/Video'

const App = () => {

  // to manage the sidebar’s open/close state dynamically.
  const [sidebar, setSidebar] = useState(true);

  return (
    <div>
      <Navbar setSidebar={setSidebar}/>
      <Routes>
        <Route path='/' element= {<Home sidebar={sidebar}/>} />
        <Route path='/video/:categoryId/:videoId' element= {<Video/>} />
      </Routes>
    </div>
  )
}

export default App

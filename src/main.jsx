import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import store from './store/store'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllPosts from './components/AllPosts'
import Navbar from './components/Navbar'
import SinglePost from './components/SinglePost'
import AwesomeComponent from './components/About'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<AllPosts />}/>
          <Route path='/single/:id' element={<SinglePost />} />
          <Route path='/about' element={<AwesomeComponent />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)

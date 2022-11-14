import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../pages/App'
import Header from '../components/header/Header'
import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Container from '../components/container/Container';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/countries' element={<Container />} />
          <Route path='/stats' element={<div className='bg-white h-full' />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
)

import React, { useState } from 'react';
import "./App.css"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from '../components/sidebar/Sidebar';
import Container from '../components/container/Container';
import { Outlet } from "react-router-dom";

function App(){
  const notify = () => toast.success('🦄 Wow so easy!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });;
  const [query, setQuery] = useState('');

  const handleInput = (q) => {
    setQuery(q);
  }

  return (
    <div>
      <div className='max-w-8xl mx-auto lg:px-10'>
        <Sidebar handleInput={handleInput} />
        <Outlet context={query} />
      </div>
    </div>
  );
}

export default App;
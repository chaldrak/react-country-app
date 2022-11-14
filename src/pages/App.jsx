import React from 'react';
import "./App.css"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from '../components/sidebar/Sidebar';
import Container from '../components/container/Container';

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

  return (
    <div>
      <div className='max-w-8xl mx-auto px-10'>
        <Sidebar />
        <Container />
      </div>
    </div>
  );
}

export default App;
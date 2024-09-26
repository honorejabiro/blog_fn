import React from 'react'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainLayout = ({changeSearch, search}) => {
  return (
    <div>
      <NavBar changeSearch={changeSearch} search={search}/>
      <ToastContainer />
      <Outlet />
    </div>
  )
}

export default MainLayout

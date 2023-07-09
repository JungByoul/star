import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom"
import Root from "./hub_detail/root";
import './index.css'

import Login from "./Login/Login";
import  NewPosting from './Posting/NewPosting';

import SelectedText from './Posting/SelectedText';


const router = createBrowserRouter([
  {
    path:"/",
    element: <Root />,    
    
  },
  {
    path:'/login',
    element: <Login />,
  },

  {
    path:'/say',
    element: <NewPosting />,
  },
  
  {
    path:'/select',
    element: <SelectedText />,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>,
)

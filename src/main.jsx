import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import MainLayout from './layouts/mainLayout.jsx'
import Index from './pages/index.jsx'
import { DataProvider } from './context/DataProvider.jsx'


const router = createBrowserRouter([
  
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index:true,
        element: <Index />
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataProvider >
      <RouterProvider 
        router={router}/>
    </DataProvider>
  </React.StrictMode>,
)

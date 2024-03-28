import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import './index.css';

import { createBrowserRouter, RouterProvider, Outlet  } from "react-router-dom";

import { ShoppingCartProvider } from './Context/ShoppingCartContext.js';

import Footer from './components/Footer';
import Navbar from './components/Navbar/Navbar.js';

import Home from './pages/Home'
import NoPage from './pages/NoPage'
import Checkout from './pages/Checkout';
import Products from './pages/Products.js';
import Contact from './pages/Contact.js';
import ViewProduct from './pages/ViewProduct.js';

const Layout = () => (
  <div className='flex flex-col min-h-screen'>
    <Navbar />
    <Outlet/>
    <Footer />  
  </div>
);

const router = createBrowserRouter([
  { 
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/test',
        element: <Home />,
      },
      {
        path: '/products',
        element: <Products/>,
      },
      {
        path: '/product/:id',
        element: <ViewProduct/>
      },
      {
        path: '/contact',
        element: <Contact/>
      },
      {
        path: '/checkout',
        element: <Checkout />,
      },
      { path: "*", 
        element: <NoPage /> 
      }
    ],
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ShoppingCartProvider>
      <RouterProvider router={router} />
    </ShoppingCartProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

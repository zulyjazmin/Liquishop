import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Alta from './pages/Alta';
import Contacto from './pages/Contacto';
import Nosotros from './pages/Nosotros';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Home />,

  },
  {
    path:'/alta',
    element: <Alta />,

  },
  {
    path:'/contacto',
    element: <Contacto />,

  },
  {
    path:'/nosotros',
    element: <Nosotros />,

  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


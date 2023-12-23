import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import routes from './Routes/Routes.jsx';
import { RouterProvider } from 'react-router-dom';
import AuthProviders from './providers/AuthProviders.jsx';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <div className="max-w-screen-xl mx-auto overflow-hidden">
        <RouterProvider router={routes} />
      </div>
    </AuthProviders>
  </React.StrictMode>
);

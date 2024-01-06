import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import routes from './Routes/Routes.jsx';
import { RouterProvider } from 'react-router-dom';
import AuthProviders from './providers/AuthProviders.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <AuthProviders>
        <div className="max-w-screen-xxl mx-auto overflow-hidden">
          <RouterProvider router={routes} />
        </div>
      </AuthProviders>
    </React.StrictMode>
  </QueryClientProvider>
);

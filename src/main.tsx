import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './router.tsx';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';


export const queryClient = new QueryClient();
const darkTheme = {
  body: "#1c1c1c",
  text: "#fff",
  subtitle: "#b6b6b6"
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />

      <ToastContainer
        position="top-center"
        hideProgressBar={true}
        pauseOnHover={false}
        autoClose={2000}
      />

      <ThemeProvider theme={darkTheme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import DashboardLayout from './layouts/dashboard_layout.tsx';
import IndexPage from './routes/index.tsx';
import SignInPage from './routes/signin.tsx';
import InvoicesPage from './routes/invoices.tsx';
import SignUpPage from './routes/signup.tsx';
import ContactPage from './routes/contact.tsx';

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <ClerkProvider >
//       <App />
//     </ClerkProvider>
//   </React.StrictMode>,
// )

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {path: '/', element: <IndexPage />},
      {path: 'sign-up', element: <SignUpPage />},
      {path: '/sign-in', element: <SignInPage />},
      {path: 'contact', element: <ContactPage />},
      {
        element: <DashboardLayout />,
        path: '/dashboard', 
        children: [
          {path: '/dashboard', element: <IndexPage />},
          {path: 'invoices', element: <InvoicesPage />},
        ]
      },

      
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      {/* <App /> */}
    </RouterProvider>
  </React.StrictMode>,
);

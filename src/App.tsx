import React from 'react';
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import { Home } from './pages/Home';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { PrivacyPolicyV2 } from './pages/PrivacyPolicyV2';
import { Contacts } from './pages/Contacts';
import { ErrorPage } from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: '/privacy-policy',
    element: <PrivacyPolicy />,
  },
  {
    path: '/ppa',
    element: <PrivacyPolicyV2 />
  },
  {
    path: '/contacts',
    element: <Contacts />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

import React from 'react';
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import { Home } from './pages/Home';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { PrivacyPolicyAndroid } from './pages/PrivacyPolicyAndroid';
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
    element: <PrivacyPolicyAndroid />
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

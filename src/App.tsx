import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { Home } from './pages/Home';
import { PrivacyPolicy } from './pages/PrivacyPolicy';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/privacy-policy',
    element: <PrivacyPolicy />,
  },
]);

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;

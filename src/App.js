import React from 'react';
import Landing from './routes/landing';
import ErrorPage from './routes/error-page';
import './App.css';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing/>,
    errorElement: <ErrorPage/>
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
 );
}

export default App;

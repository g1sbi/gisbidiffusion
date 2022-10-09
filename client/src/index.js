import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Landing from './routes/landing.jsx';
import Home from './routes/home';
import ErrorPage from './routes/error-page';
import Tips from './routes/tips';
import Profile from './routes/profile';
import About from './routes/about';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing/>,
    errorElement: <ErrorPage/>
  },
  {
    path:'home',
    element: <Home/>,
    children: [
      {
        path: 'tips',
        element: <Tips/>
      },
   ]
  },
  {
    path: 'home/profile',
    element: <Profile/>
  },
  {
    path: 'home/about',
    element: <About/>
  }

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

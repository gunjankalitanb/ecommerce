import React from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter,Router, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { StrictMode } from 'react';
// import './routes/Root.css';
// import {createBrowserRouter, RouterProvider,} from "react-router-dom";
// import Root from './routes/Root';
import Home from './routes/Home';
import Product from './routes/Product';
import Signup from './routes/Signup';
import Login from './routes/Login';
import AddProducts  from './routes/AddProducts';
import NotFound  from './routes/NotFound';

// import {auth,fs} from './routes/Config';
// import Registration from './routes/Registration';
// import './routes/Home.css';

// import { Auth0Provider } from '@auth0/auth0-react';


const root = createRoot(document.getElementById('root'));
root.render(

  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/add-products" element={<AddProducts />} />
        <Route element={<NotFound />} />

        {/* <Route path="/{auth, fs}" element={<auth, fs />} /> */}
        <Route path="/Product" element={<Product />} />
      </Routes>
    </BrowserRouter>
 

);











// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />
//   },
//   {
//     path: "/Registration",
//     element: <Registration/>
//   }
// ]);


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <RouterProvider router={router}/>
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

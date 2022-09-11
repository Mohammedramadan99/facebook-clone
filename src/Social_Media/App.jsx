import React from 'react'
// import './bootstrap.css'
import './sass/Style.css'
// import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from 'react-router-dom'
// import { ToastContainer } from "react-toastify";
import MainPage from './Components/MainPage/MainPage';
import Navbar from './Components/Navbar/Navbar';
import UserDetails from './Components/UserDetails/UserDetails';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';

export default function App()
{
    return (
        <>
            {/* <ToastContainer /> */}
            <Navbar />
            <Routes>
                <Route path='/' exact element={<MainPage />} />
                <Route path='/login' exact element={<Login />} />
                <Route path='/register' exact element={<Register />} />
                <Route path='/user/:id' exact element={<UserDetails />} />
            </Routes>
        </>
    )
}


// login,register -- single user -- show people 
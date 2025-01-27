import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Navbar from "./assets/components/Navbar";
import Footer from "./assets/components/Footer";
import Pizzas from "./assets/pages/Pizzas";
import Home from "./assets/pages/Home";
import Profile from "./assets/pages/Profile";
import './App.css'
import Login from "./assets/pages/Login";
import Register from "./assets/pages/Register";
import Cart from "./assets/pages/Cart";
import NotFound from "./assets/pages/NotFound";


const App = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/pizza/:pizzaId" element={<Pizzas />} />
                <Route path="/Cart" element={<Cart />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </div>
    );
};


export default App;

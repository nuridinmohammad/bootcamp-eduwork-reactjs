import React from "react";
import { Link, Outlet } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Category from './pages/category'
import './style.css'

const Index = () => {
  const date = new Date()
  
  return (
    <div className="main">
      <nav style={{ display: "flex", gap: "10px", fontSize: "1.3em" }}>
        <Link className="link" to="/home">Home</Link>
        <Link className="link" to="/about">About</Link>
        <Link className="link" to="/contact">Contact</Link>
        <Link className="link" to="/category/music">Music</Link>
        <Link className="link" to="/category/video">Video</Link>
      </nav>

      <div className="outlet">
        <h1>My Website</h1>
        <Outlet />
      </div>

      <div className="footer">
        <p>Mohammad Nuridin - {date.getFullYear()}</p>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index/>}>
            <Route path="home" element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path="category/:name" element={<Category/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


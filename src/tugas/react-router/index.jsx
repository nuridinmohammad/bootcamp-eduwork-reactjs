import React from "react";
import { Link, Outlet } from "react-router-dom";
import './style.css'

const index = () => {
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

export default index;

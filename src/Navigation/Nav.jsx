import React from "react";
import "./Nav.css";
import { FiHeart } from "react-icons/fi";
import { AiOutlineUserAdd, AiOutlineShoppingCart } from "react-icons/ai";

export default function Nav() {
  return (
    <nav className="">
      <div className="nav-container">
        <input
          type="text"
          placeholder="Enter your search shoes..."
          className="search-input"
        />
      </div>
      <div className="profile-container">
        <a href="#" className="">
          <FiHeart className="nav-icons" />
        </a>
        <a href="#">
          <AiOutlineShoppingCart className="nav-icons" />
        </a>
        <a href="#">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
      </div>
    </nav>
  );
}

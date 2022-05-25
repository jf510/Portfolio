import React, { useState, useEffect } from "react";
import App from "./App";
import "./Nav.css";
import { BrowserRouter, Router, Link } from "react-router-dom";

function Nav() {
  const [introText, setIntroText] = useState("");

  return (
    <div className="navbar">
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <p class="btn">Home</p>
      </Link>
      <Link to={"/projects"} style={{ textDecoration: "none" }}>
        <p class="btn">Projects</p>
      </Link>
      <a href="https://github.com/jf510" class="btn">
        Github
      </a>
      <a href="#" class="btn">
        Contact
      </a>
    </div>
  );
}

export default Nav;

import React from "react";
import "./Home.css";
import Sidebar from "./Sidebar";
import Display from "./Display";

function Home() {
  return (
    <div className="home">
      <h1>Jordan Fontaine</h1>
      <div className="home__content">
        <Sidebar />
        <Display />
      </div>
    </div>
  );
}

export default Home;

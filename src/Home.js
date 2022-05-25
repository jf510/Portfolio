import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./Home.css";

function Home() {
  const [introText, setIntroText] = useState("");
  const [aboutMeIntro, setAboutMeIntro] = useState("");
  const [aboutMeBody, setAboutMeBody] = useState("");

  useEffect(() => {
    loadIntroText();
  }, []);

  const loadIntroText = () => {
    setIntroText("Welcome to Fontaine Web Development!");
  };

  const loadAboutMeIntro = () => {
    setAboutMeIntro(
      " My Name is Jordan Fontaine, and I’m a Full-Stack web developer, with a background in Astrophysics from Columbia University. I have experience building functional websites and applications for use on desktop and mobile devices, for small businesses and individuals seeking to enhance their business."
    );
  };

  const loadAboutMeBody = () => {
    setAboutMeBody(
      <ul>
        <li>Programming Languages: JavaScript, Python</li>
        <li>Front End: HTML, CSS, React.js</li>
        <li>Back End: Node.js, ExpressJS, Flask, Rest</li>
        <li>Libraries: JQuery, Jasmine</li>
        <li>Database: SQL, PostgreSQL, SQLAlchemy</li>
        <li>Development and Deployment: Git, GitHub, Firebase, Heroku</li>
        <li>
          Other: Data Structures and Algorithms, Unit and Integration Testing
        </li>
        <li>Language: English (Fluent), Arabic (Intermediate)</li>
      </ul>
    );
  };

  useEffect(() => {
    loadAboutMeIntro();
    loadAboutMeBody();
  }, []);

  return (
    <div className="home">
      <div className="headline">
        <h1>{introText}</h1>
      </div>
      <div className="body">
        <span className="body1">
          <h3>About Me</h3>
          {aboutMeIntro}
        </span>
        <span className="body2">
          <h3>Skills</h3>
          {aboutMeBody}
        </span>
      </div>
    </div>
  );
}

export default Home;

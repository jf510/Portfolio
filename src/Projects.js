import React from "react";
import Card from "./Card";
import Notflix from "./NotflixPic.png";
import Amazon from "./AmazonPic.png";
import Covid from "./CovidPic.png";
import Orbit from "./OrbitSimPic.png";
import "./Projects.css";

function Projects() {
  return (
    <div className="projects">
      <div className="web2__projectsLeft">
        <Card
          src={Notflix}
          title="Notflix"
          description="Video streaming app based on Netflix."
        />
        <Card
          src={Amazon}
          title="E-commerce Shopping Website"
          description="Shopping website based on the Amazon Prime page."
        />
        <Card
          src={Covid}
          title="Covid-19 Tracker"
          description="Generates the number of covid cases for a given country."
        />
      </div>
      <div className="web2__projectsRight">
        <Card
          src={Orbit}
          title="Orbit Simulation"
          description="Generates the orbits of the exoplanets in the Kepler-19 System."
        />
        <Card
          src="https://th.bing.com/th/id/R.7db97312febf3884900242c5eba064f0?rik=8vnNKo8%2b1GV8zA&riu=http%3a%2f%2fhalffullmarketing.site%2fwp-content%2fuploads%2f2017%2f07%2fcoming-soon.png&ehk=Kj%2fjpXttsyLnoNkLPq0fab4K%2bEarX1gKmYa4LnGOyig%3d&risl=&pid=ImgRaw&r=0"
          title="Online Experiences"
          description="Unique activities we can do together, led by a world of hosts."
        />
        <Card
          src="https://th.bing.com/th/id/R.7db97312febf3884900242c5eba064f0?rik=8vnNKo8%2b1GV8zA&riu=http%3a%2f%2fhalffullmarketing.site%2fwp-content%2fuploads%2f2017%2f07%2fcoming-soon.png&ehk=Kj%2fjpXttsyLnoNkLPq0fab4K%2bEarX1gKmYa4LnGOyig%3d&risl=&pid=ImgRaw&r=0"
          title="Online Experiences"
          description="Unique activities we can do together, led by a world of hosts."
        />
      </div>
    </div>
  );
}

export default Projects;

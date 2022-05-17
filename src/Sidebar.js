import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import TwitterIcon from "@mui/icons-material/Twitter";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import WaterfallChartIcon from "@mui/icons-material/WaterfallChart";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="about__me">
        <h2>About Me</h2>
        <ul className="aboutme__links">
          <li>Github</li>
          <li>Linkedin</li>
          <li>Resume</li>
        </ul>
      </div>
      <div className="sidebar__projectSection">
        <div className="sidebar__projectContent">
          <h2>Projects</h2>

          <SidebarOption Icon={NotificationsIcon} text="E-commerce Website" />
          <SidebarOption Icon={LiveTvIcon} text="Notflix" />
          <SidebarOption Icon={TwitterIcon} text="Twitter" />
          <SidebarOption Icon={WaterfallChartIcon} text="Stock Trading App" />
          <SidebarOption Icon={HealthAndSafetyIcon} text="Covid-19 Tracker" />
          <SidebarOption Icon={RocketLaunchIcon} text="Orbit Simulator" />
          <SidebarOption Icon={MailOutlineIcon} text="Messager App" />
          <SidebarOption Icon={AirplaneTicketIcon} text="Travel/Hotel App" />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

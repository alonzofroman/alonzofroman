import React from "react";
import '../styles/projects.css';
import ProjectCarousel from "./carousel";

function Projects() {
  return (
    <div className='projectpage'>
      <h2>Projects</h2>
      <ProjectCarousel />
    </div>
  );
}

export default Projects;

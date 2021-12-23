import React from "react";
import '../styles/projects.css';
import ProjectCarousel from "./carousel";

function Projects() {
  return (
    <div className='projectpage'>
      <h2>Projects</h2>
      <ProjectCarousel />

      {/* <div className='otherProjects'>
        <h5>Other Projects</h5>
            <a href="https://github.com/alonzofroman/employee-tracker" target="_blank" rel='noreferrer'>Employee Tracker</a>
            <a href="https://github.com/alonzofroman/team-profile-generator" target="_blank" rel='noreferrer'>Team Profile Generator</a>
            <a href="https://github.com/alonzofroman/readme-generator" target="_blank" rel='noreferrer'>Readme Generator</a>
      </div> */}
      
    </div>
  );
}

export default Projects;

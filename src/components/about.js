import React from "react";
import "../styles/about.css";
import { FaJsSquare, FaGithub, FaGitAlt, FaHtml5, FaCss3, FaNodeJs, FaReact } from "react-icons/fa";
import { DiMysql, DiMongodb } from 'react-icons/di';
import { SiApollographql, SiWebpack, SiJquery, SiBootstrap, SiGraphql, SiHeroku, SiFirebase } from 'react-icons/si';

function About() {
  return (
    <div className='aboutMe'>
      <h2 className='aboutTitle'>About Me</h2>

      <p className='aboutText'>
        My name is Alonzo Roman, full-stack web developer and graduate of UC
        Berkeley Extension's Coding Bootcamp. My experiences in the coding bootcamp
        have prepared me and made me confident in my ability to work in any team
        environment, and my experience in the Marine Corps has given me a strong
        work ethic.
      </p>

      <p className='contactAbout'>Email: alonzofromancoding@gmail.com</p>

      <h3>Skills</h3>
      <div className='skillIcons'>

      <div className='skill'>
            <p>HTML</p>
            <FaHtml5 size={60} />
        </div>

        <div className='skill'>
          <p>Javascript</p>
          <FaJsSquare size={60} />
        </div>

        <div className='skill'>
          <p>jQuery</p>
          <SiJquery size={60} />
        </div>

        <div className='skill'>
            <p>CSS</p>
            <FaCss3 size={60} />
        </div>

        <div className='skill'>
          <p>Bootstrap</p>
          <SiBootstrap size={60} />
        </div>

        <div className='skill'>
            <p>NodeJS</p>
            <FaNodeJs size={60} />
        </div>

        <div className='skill'>
            <p>mySQL</p>
            <DiMysql size={60} />
        </div>

        <div className='skill'>
            <p>MongoDB</p>
            <DiMongodb size={60} />
        </div>

        <div className='skill'>
            <p>React</p>
            <FaReact size={60} />
        </div>

        <div className='skill'>
            <p>Apollo</p>
            <SiApollographql size={60} />
        </div>

        <div className='skill'>
          <p>GraphQL</p>
          <SiGraphql size={60} />
        </div>

        <div className='skill'>
            <p>Git</p>
            <FaGitAlt size={60} />
            
        </div>

        <div className='skill'>
            <p>Github</p>
            <FaGithub size={60} />
        </div>

        <div className='skill'>
          <p>Heroku</p>
          <SiHeroku size={60} />
        </div>

        <div className='skill'>
          <p>Webpack</p>
          <SiWebpack size={60} />
        </div>

        

      </div>
    </div>
  );
}

export default About;

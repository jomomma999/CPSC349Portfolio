import React from "react";
import './Projects.css';
import GitHubIcon from '@mui/icons-material/GitHub';

function Projects() {
    return(
        <div className="projects">
      <div className="project-container">
        <div className="project">
          <h2>OS-Concept-Project</h2>
          <p>
            Design two programs that make use of fork(), execlp(), and wait() functions to fetch weather information for a bunch of locations from a web-based weather service API. The basic logic of each program will be as follows:
            The program reads the latitude and longitude location from the specified file.
          </p>
          <div className="git">
        <a href="https://github.com/jomomma999/OS-Concept-Project" target="_blank" rel="noopener noreferrer">
         <GitHubIcon/>
        </a>
      </div>
        </div>
      </div>
      <div className="project-container">
        <div className="project">
          <h2>Magic Survey Project</h2>
          <p>
            A group project for a database class to create a survey website while focusing on the database aspect. The datanase was created 
            using MySQL to populate the users, passwords, surverys, survery questions, and answer choices. 
          </p>
          <div className="git">
        <a href="https://github.com/KornTortilla/Magic-Survey-Project" target="_blank" rel="noopener noreferrer">
         <GitHubIcon/>
        </a>
      </div>
        </div>
      </div>
      <div className="project-container">
        <div className="project">
          <h2>Vending Machine Project</h2>
          <p>
            Group project for a software engineering class using agile framework to tockle a vending machine project and add features provided 
            by the "investors" of the project. The program can execute on windows terminal and prompts the user to enter a number based on 
            what the user wants to do.
          </p>
          <div className="git">
        <a href="https://github.com/Group-6-Vendor/project-CPCS-362" target="_blank" rel="noopener noreferrer">
         <GitHubIcon/>
        </a>
      </div>
        </div>
      </div>
    </div>
    );
}
 
export default Projects;
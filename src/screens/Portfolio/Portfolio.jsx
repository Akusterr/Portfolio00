import React from 'react'
import "./Portfolio.css";
import { projects } from "./projects"

function Portfolio() {
    const ProjectList = projects.map((project, idx) => {
        return (
            <div key={idx} className="portfolio-projects-frame">
                <img src={project.image} alt={project.title}/>
            </div>
        )
    });
  return (
    <div id="portfolio" className='portfolio-container'>
        <h1>Portfolio</h1>
        <p>
            Check out my <a href='https://github.com/Akusterr' target="_+blank" > Github</a> page!
        </p>
        <div className="portfolio-grid">
            {ProjectList}
        </div>
    </div>
  )
}

export default Portfolio
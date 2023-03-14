import React, { Component } from 'react'
import Project from './Project'

export default function Portfolio() {
 
    let projects = [
      {
        title: "Javascript test",
        image: "https://www.wisdomgeek.com/wp-content/uploads/2020/11/unit-test-private-non-exported-function-javascript-1280x720.jpeg",
        description: "placeholder",
        url: "https://coulsonp.github.io/JavaScript-Test/",
      },
      {
        title: "Javascript test",
        image: "placeholder",
        description: "placeholder",
        url: "placeholder",
      },
      {
        title: "Javascript test",
        image: "placeholder",
        description: "placeholder",
        url: "placeholder",
      },
      {
        title: "Javascript test",
        image: "placeholder",
        description: "placeholder",
        url: "placeholder",
      },
      {
        title: "Javascript test",
        image: "placeholder",
        description: "placeholder",
        url: "placeholder",
      },
      {
        title: "Javascript test",
        image: "placeholder",
        description: "placeholder",
        url: "placeholder",
      },
    ]
    return (
      
      <div>
        <h1>My Portfolio</h1>
        <div className='card-flex'>
        {projects.map(project => {
          return(
            <Project title = {project.title} image={project.image} description={project.description} url= {project.url}></Project>
          )
        })}
        </div>
      </div>
    )
}
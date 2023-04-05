import React, { Component } from 'react'
import Project from './Project';

export default function Portfolio() {
 
  let projects = [
    {
      title: "furbnb",
      image: "https://hawaii.armymwr.com/application/files/8216/0459/7182/GettyImages-157668281.jpg",
      description: "This site is for pet owners who want to sign their pet up for a large variety of services.",
      url: "https://furbnbcare.herokuapp.com/",
      repo: "https://github.com/devkjoon/furbnb",
    },
      {
        title: "Javascript test",
        image: "https://www.wisdomgeek.com/wp-content/uploads/2020/11/unit-test-private-non-exported-function-javascript-1280x720.jpeg",
        description: "This is a timed JavaScrpit test you can take to test your skills. As you take the test your time goes down, and if you miss one the time drops by 10 seconds.This app uses HTML, CSS, and JavaScript.",
        url: "https://coulsonp.github.io/JavaScript-Test/",
        repo: "https://github.com/CoulsonP/JavaScript-Test",
      },
      {
        title: "Weather Forecast",
        image: "https://media.khou.com/assets/KHOU/images/e4b4dc0b-93e1-43e5-974b-673b208a297a/e4b4dc0b-93e1-43e5-974b-673b208a297a_1140x641.jpg",
        description: "This site allows a user to search for a city and receive the weather in that area up to five days ahead. This app uses HTML, CSS, and JavaScript.",
        url: "https://coulsonp.github.io/Weather-Forecast/",
        repo: "https://github.com/CoulsonP/Weather-Forecast",
      },
      {
        title: "Note Taker",
        image: "https://blog.lulu.com/wp-content/uploads/2020/02/021120_NoteTaking-Blog.png",
        description: "This application gives the user the ability to write notes and save them for later. The app uses HTML, CSS, and JavaScript.",
        url: "https://frozen-bastion-88258.herokuapp.com/notes",
        repo: "https://github.com/CoulsonP/Note-Taker",
      },
      {
        title: "Password Generator",
        image: "https://1password.com/img/redesign/password-generator/passwords-locked.0cc3d134c49655b237541264a9b0e3f9.svg",
        description: "This project is a random password generator. The site will generate a password at random after the user gives it specifications. The app uses HTML, CSS, and JavaScript.",
        url: "https://coulsonp.github.io/Password-Generator-Challenge3/",
        repo: "https://github.com/CoulsonP/Password-Generator-Challenge3",
      },
      {
        title: "Project Manager",
        image: "https://www.herzing.edu/sites/default/files/styles/fp_960_480/public/2020-09/project-management-skills.jpg.webp?itok=rN-QQPq6",
        description: "A web application that provides a platform for managing projects, with a focus on ease of use and efficiency. This app uses Handlebars, Express, JavaScript, CSS, NodeMailer, DotEnv, and Bootstrap.",
        url: "https://floating-bayou-84303.herokuapp.com/login",
        repo: "https://github.com/ryanhood10/ProjectManager",
      },
      {
        title: "Game Search",
        image: "https://assets.website-files.com/5fc9d3d58a00611de699385c/6257fd859ccf5ca509519e03_Xsolla%20Microsoft%20Store_1200%D1%85630%20(1).png",
        description: "This site was made to help the user find a game, see details about it, and explore the community that plays the game. This app is made with HTML, CSS, JavaScript, and Bootstrap.",
        url: "https://coulsonp.github.io/Game-Search/#!",
        repo: "https://github.com/CoulsonP/Game-Search",
      },
      
    ]
    return (
      
      <div>
        <h3>My Portfolio</h3>
        <div className='card-flex'>
        {projects.map(project => {
          return(
            <Project title = {project.title} image={project.image} description={project.description} url= {project.url} repo = {project.repo}></Project>
          )
        })}
        </div>
      </div>
    )
}
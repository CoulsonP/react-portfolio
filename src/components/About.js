import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <h2 className='topAbout'>About me</h2>
        <img className='myPic' src={process.env.PUBLIC_URL + '/IMG_9040.jpg'} alt="profile pic"/>
        <hr></hr>
        <p className='aboutMePar'>
        I am an aspiring front-end developer who recently completed a coding bootcamp through Vanderbilt. During my time in the program, I gained valuable skills and knowledge in web development, including HTML, CSS, JavaScript, and React.
        As a developer, I am passionate about creating user-friendly and intuitive websites that enhance the user experience. I believe that the key to a successful website is making it easy for users to navigate and find what they need quickly.
        I am excited about the opportunity to use my skills to make a positive impact on the world by creating websites that are both visually appealing and easy to use. I am always looking for new challenges and opportunities to grow as a developer and I am committed to staying up-to-date with the latest technologies and best practices in the industry.
        </p>
      </div>
      
    )
  }
}

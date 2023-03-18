// import React, { Component } from 'react';

// export default class Resume extends Component {
//   render() {
//     return (
//       <div>
//         <h2>My Resume</h2>
//         <a href={process.env.PUBLIC_URL + "/resume.png"} download>
//           <button className='resume-button'>Download Resume</button>
//         </a>
//         <ul>
//           <h4>Skills</h4>
//           <li>HTML5</li>
//           <li>CSS</li>
//           <li>JavaScript</li>
//           <li>React</li>
//           <li>MySQL</li>
//           <li>DOM Manipulation</li>
//           <li>JSON</li>
//         </ul>
//       </div>
//     );
//   }
// }


import React, { Component } from 'react';

export default class Resume extends Component {
  render() {
    return (
      <div>
        <h2>My Resume</h2>
        <a href={process.env.PUBLIC_URL + "/resume.png"} download>
          <button className='resume-button'>Download Resume</button>
        </a>
        <ul className='resume-container'>
          <h4>Front-End Skills</h4>
          <li>HTML5</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>MySQL</li>
          <li>DOM Manipulation</li>
          <li>JSON</li>
          <h4>Performance Development</h4>
          <li>NoSQL</li>
          <li>Progressive Web Applications (PWA)</li>
          <li>MongoDB</li>
          <li>Mongoose</li>
          <li>GraphQL</li>
          <li>React</li>
          <li>MERN</li>
          <li>State</li>
        </ul>
      </div>
    );
  }
}
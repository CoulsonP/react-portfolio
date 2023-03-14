import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <p className='topAbout'>Aspiring Full Time Developer</p>
        <img className='myPic' src={process.env.PUBLIC_URL + '/IMG_9040.jpg'} alt="profile pic"/>
      </div>
    )
  }
}

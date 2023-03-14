import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Nav extends Component {
  render() {
    return (
      <div className='linkDiv'>
       <ul className='linkStyle'>
       <li> <Link className='link' style = {{textDecoration:"none"}}to = "/"><span>About</span></Link></li>
       <li> <Link className='link' style = {{textDecoration:"none"}}to = "/portfolio"><span>Portfolio</span></Link></li>
       <li> <Link className='link' style = {{textDecoration:"none"}}to = "/contact"><span>Contact</span></Link></li>
       <li> <Link className='link' style = {{textDecoration:"none"}}to = "/resume"><span>Resume</span></Link></li>
       </ul>
      </div>
    )
  }
}
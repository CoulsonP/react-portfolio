import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
export default class Nav extends Component {
  render() {
    return (
      <div className='linkDiv'>
       <ul className='linkStyle'>
       <li><NavLink className='link' style={{textDecoration: "none"}} to="/" exact activeClassName="active-link"><span>About</span></NavLink> </li>
       <li><NavLink className='link' style={{textDecoration: "none"}} to="/portfolio" activeClassName="active-link"><span>Portfolio</span></NavLink> </li>
       <li><NavLink className='link' style={{textDecoration: "none"}} to="/contact" activeClassName="active-link"><span>Contact</span></NavLink> </li>
       <li><NavLink className='link' style={{textDecoration: "none"}} to="/resume" activeClassName="active-link"><span>Resume</span></NavLink> </li>
       </ul>
      </div>
    )
  }
}
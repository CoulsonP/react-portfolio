import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Nav extends Component {
  render() {
    return (
      <div>
       <ul>
       <li> <Link to = "/">about</Link></li>
       <li> <Link to = "/portfolio">portfolio</Link></li>
       <li> <Link to = "/contact">contact</Link></li>
       <li> <Link to = "/resume">resume</Link></li>
       </ul>
      </div>
    )
  }
}
import React, { Component } from 'react'
import Nav from './Nav'

export default class Header extends Component {
  render() {
    return (
      <div>
        <h2 className='header'>Coulson's Portfolio</h2>
        <Nav></Nav>
      </div>
    )
  }
}
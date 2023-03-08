import React, { Component } from 'react'
import Nav from './Nav'

export default class Header extends Component {
  render() {
    return (
      <div>
        <h2>This is the Header page!!</h2>
        <Nav></Nav>
      </div>
    )
  }
}
import React, { Component } from 'react'

export default class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      message: '',
      emailError: ''
    };
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });

    // Check if email is valid
    if (name === 'email') {
      if (!value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
        this.setState({
          emailError: 'Invalid email address'
        });
      } else {
        this.setState({
          emailError: ''
        });
      }
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();

    // Check if all fields are filled
    if (!this.state.name || !this.state.email || !this.state.message) {
      alert('Please fill in all required fields.');
    } else {
      alert('Thank you for submitting the form.');
    }
  }

  render() {
    return (
      <div className='whole-form'>
        <h2>Contact Me</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" value={this.state.name} onChange={this.handleInputChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" value={this.state.email} onChange={this.handleInputChange} required />
            {this.state.emailError && <span>{this.state.emailError}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" value={this.state.message} onChange={this.handleInputChange} required />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
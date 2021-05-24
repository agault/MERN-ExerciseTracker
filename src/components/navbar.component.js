import React, { Component } from 'react';//import always
import { Link } from 'react-router-dom';//allow to link diff routes
//Navbar is the name of the comonent
export default class Navbar extends Component {//components always have to render something

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">ExcerTracker</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">View All Exercises</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Add Exercise</Link>
          </li>
          <li className="navbar-item">
          <Link to="/user" className="nav-link">Create New User</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}
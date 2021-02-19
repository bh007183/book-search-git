import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default function Nav() {
    return (
        <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo right">Logo</a>
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/saved">Saved</Link></li>
          </ul>
        </div>
      </nav>
    )
}

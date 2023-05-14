import React from 'react';
import { Link } from "react-router-dom";

const navbar = () =>{
  return (
    <div>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/AreasOfFocus">Areas of Focus</Link>
      </li>
      <li>
        <Link to="/ContactMe">Contact Me</Link>
      </li>
      <li>
        <Link to="/Announcements">Announcements</Link>
      </li>
      <li>
        <Link to="/MaddieLowen">About Maddie</Link>
      </li>
    </div>
  );
}
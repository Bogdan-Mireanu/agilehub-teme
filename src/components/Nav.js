import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

export default function Nav () {
  const location = useLocation();
  console.log(location);
return (
    <ul className="nav justify-content-center">
      <li className="nav-item">
        <NavLink className="nav-link text-warning" exact to="/movies">Movie-List</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link text-warning" exact to="/movies/:id">Movie-Details</NavLink>
      </li>
   </ul>
)
}
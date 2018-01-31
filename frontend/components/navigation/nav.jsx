import React from 'react';
import { Link } from 'react-router-dom';


export const NavBar = ({ path }) => {
  let linkToTables = path === '/' ? <li></li> : <button className='nav-button'><Link className='nav-link' to='/' >Back To Tables</Link></button>
  return (
        <div className='nav-container'>
          <h1 className='nav-header'>LARAVAL</h1>
          {linkToTables}
        </div>
  )
}
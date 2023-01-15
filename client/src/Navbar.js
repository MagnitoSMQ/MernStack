import React from 'react'
import Home from './Home';
import News from './News';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <ul>
        <Link to='/'><li>Home</li></Link>
        <Link to='/news'><li>News</li></Link>
        <Link to='/pages/about'><li>About</li></Link>
        <Link to='/pages/contacts'><li>Contacts</li></Link>
      </ul>
    </div>
  )
}


export default Navbar;
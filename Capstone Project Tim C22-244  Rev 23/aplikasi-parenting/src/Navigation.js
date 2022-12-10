import React from 'react';
import { Link } from 'react-router-dom';


function Navigation() {
  return (
    <div >
    <nav>
      <ul>
        <h1 className='.nameApp'>YusinaApp</h1>
   
        <li>
          <Link className='nav-li' to="/">Beranda</Link>
        </li>
        <li>
          <Link className='nav-li' to="/Materi">Materi</Link>
        </li>
        <li>
          <Link className='nav-li' to="/TipsTriks">TipsTriks</Link>
        </li>
        <li>
          <Link className='nav-li' to="/Video">video</Link>
        </li>
      </ul>
    </nav>
    </div>
  );
}

export default Navigation;

import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className='c-header'>
      <div className='o-container'>
        <div className='o-grid o-grid--between'>
          <div className='o-grid__col u-3/12@md'>
            <p className='c-header__logo'>
              <Link to='/' className='c-header__link' aria-label='Home'>
                Santiago Correa
              </Link>
            </p>
          </div>
          <div className='o-grid__col u-9/12@md'>
            <nav className='c-header__nav'>
              <ul className='c-header__list'>
                <li className='c-header__item'>
                  <Link
                    to='/about'
                    className='c-header__link'
                    aria-label='About Me Page'
                  >
                    About
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

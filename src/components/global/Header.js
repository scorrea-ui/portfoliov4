import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import ProjectButton from "../shared/ProjectsButton";

const Header = (props) => {
  const [active, setActive] = useState(false);

  const openMenu = () => {
    setActive(!active);
  };

  return (
    <header className='c-header'>
      <div className='o-container'>
        <div className='o-grid o-grid--between'>
          <div className='o-grid__col u-3/12@md'>
            <div className='c-header__logo'>
              <Link to='/' className='c-header__link' aria-label='Home'>
                Santiago Correa
              </Link>
              <button
                className='c-header__hamburger'
                onClick={(e) => openMenu()}
              >
                <img
                  src={process.env.PUBLIC_URL + "/images/icons/hamburger.png"}
                  alt='Open menu'
                />
              </button>
            </div>
          </div>
          <div className='o-grid__col u-9/12@md'>
            <nav className={`c-header__nav ${active ? "active" : ""}`}>
              <ul className={`c-header__list ${active ? "active" : ""}`}>
                <li className='c-header__item'>
                  <Link to='/' className='c-header__link' aria-label='Home'>
                    Home
                  </Link>
                </li>
                <li className='c-header__item'>
                  <Link
                    to='/about'
                    className='c-header__link'
                    aria-label='About Me Page'
                  >
                    About
                  </Link>
                </li>
                <li className='c-header__item'>
                  {props.match.path !== "/" ? (
                    <Link to='/#projects' className='c-header__link'>
                      Projects
                    </Link>
                  ) : (
                    <ProjectButton
                      className='c-header__link'
                      content='Projects'
                    />
                  )}
                </li>
                <li className='c-header__item'>
                  <a
                    href='mailto:scorrea.dev@gmail.com'
                    className='c-header__link'
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default withRouter(Header);

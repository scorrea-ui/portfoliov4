import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className='c-footer'>
      <div className='o-container'>
        <div className='o-grid o-grid--center'>
          <div className='o-grid__col u-3/12@md'>
            <p className='c-footer__logo'>&copy; copyright {year}</p>
          </div>
          <div className='o-grid__col u-9/12@md'>
            <nav className='c-footer__nav'>
              <ul className='c-footer__list'>
                <li className='c-footer__item'>
                  <span className='c-footer__link'>Contact:</span>
                </li>
                <li className='c-footer__item'>
                  <a
                    className='c-footer__link'
                    href='https://www.linkedin.com/in/santiago-correa-693a7b135/'
                    aria-label='Santiago Correa - Linkedin'
                  >
                    <img
                      src={`${process.env.PUBLIC_URL}/images/icons/white/linkedin-in-brands.svg`}
                      alt='Linkedin'
                    />
                  </a>
                </li>
                <li className='c-footer__item'>
                  <a
                    className='c-footer__link'
                    href='https://wa.me/573008753370'
                    aria-label='Whatsapp Me'
                  >
                    <img
                      src={`${process.env.PUBLIC_URL}/images/icons/white/whatsapp-brands.svg`}
                      alt='Whatsapp Me'
                    />
                  </a>
                </li>
                <li className='c-footer__item'>
                  <a
                    className='c-footer__link'
                    href='mailto:scorrea.coder@gmail.com'
                    aria-label='Email Me'
                  >
                    <img
                      src={`${process.env.PUBLIC_URL}/images/icons/white/envelope-solid.svg`}
                      alt='Email Me'
                    />
                  </a>
                </li>
                <li className='c-footer__item'>
                  <a
                    className='c-footer__link'
                    href='tel:+573008753370'
                    aria-label='Call Me'
                  >
                    <img
                      src={`${process.env.PUBLIC_URL}/images/icons/white/phone-solid.svg`}
                      alt='Call Me'
                    />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

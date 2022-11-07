import React, { useState } from 'react';
import './Header.scss';
import { ABOUT_ROUTE, NEWS_ROUTE, MAIN_ROUTE } from '../../utils/consts';
import { ReactComponent as Logo } from '../../img/header/logo.svg';
import { ReactComponent as Facebook } from '../../img/header/facebook.svg';
import { ReactComponent as Insta } from '../../img/header/insta.svg';
import { ReactComponent as Youtube } from '../../img/header/youtube.svg';
import { NavLink } from 'react-router-dom';
import Link from 'react-scroll/modules/components/Link';

const Header = () => {
  const [active, setActive] = useState(false);

  return (
    <header className='header'>
      <div className='header__container container'>
        <div onClick={() => setActive(!active)} className={active ? 'header__icon active' : 'header__icon'}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={active ? 'header__top active' : 'header__top'}>
          <nav className='header__navigation navigation'>
            <ul className='navigation__list'>
              <li onClick={() => setActive(false)}>
                <NavLink to={MAIN_ROUTE} className='navigation__link'>
                  <Link to='products' smooth={true} duration={500}>
                    Products
                  </Link>
                </NavLink>
              </li>
              <li onClick={() => setActive(false)}>
                <NavLink to={ABOUT_ROUTE} className='navigation__link'>
                  About Us
                </NavLink>
              </li>
              <li onClick={() => setActive(false)}>
                <NavLink to={MAIN_ROUTE} className='navigation__link'>
                  <Link to='Best-deals' smooth={true} duration={500}>
                    Best Deals
                  </Link>
                </NavLink>
              </li>
              <li onClick={() => setActive(false)}>
                <NavLink to={NEWS_ROUTE} className='navigation__link'>
                  Latest News
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className='header__row'>
            <div className='header__column header__column-text'>
              <div className='header__phone'>
                Phone:<a href='tel:+1234567890'>+1 (234) 567 89 00</a>
              </div>
              <div className='header__schedule'>
                Working Hours:<span> we are open 24/7</span>
              </div>
            </div>
            <div className='header__column'>
              <ul className='header__list'>
                <li>
                  <a
                    className='header__link'
                    rel='noopener noreferrer'
                    target='_blank'
                    href='https://facebook.com/'
                  >
                    <Facebook />
                  </a>
                </li>
                <li>
                  <a
                    className='header__link'
                    rel='noopener noreferrer'
                    target='_blank'
                    href='https://instagram.com/'
                  >
                    <Insta />
                  </a>
                </li>
                <li>
                  <a
                    className='header__link'
                    rel='noopener noreferrer'
                    target='_blank'
                    href='https://youtube.com/'
                  >
                    <Youtube />
                  </a>
                </li>
              </ul>
              <div className='header__language'>
                <div className='header__select'>
                  <select name='' id=''></select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div onClick={() => setActive(false)} className='header__logo'>
          <NavLink to={MAIN_ROUTE} className='header__img'>
            <Logo />
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;

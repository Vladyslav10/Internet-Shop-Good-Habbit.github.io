import React from 'react';
import { NavLink } from 'react-router-dom';
//import Link from 'react-scroll/modules/components/Link';
import { ReactComponent as Logo } from '../../img/header/logo.svg';
import { ReactComponent as Facebook } from '../../img/header/facebook.svg';
import { ReactComponent as Insta } from '../../img/header/insta.svg';
import { ReactComponent as Youtube } from '../../img/header/youtube.svg';
import { ABOUT_ROUTE, MAIN_ROUTE, NEWS_ROUTE } from '../../utils/consts';
import './BottomNavigation.scss';

const BottomNavigation = () => {
  return (
    <section className='second-navigation'>
      <div className='second-navigation__container container'>
        <div className='second-navigation__row'>
          <div className='second-navigation__column'>
            <div className='second-navigation__logo'>
              <NavLink to={MAIN_ROUTE} className='second-navigation__img'>
                <Logo />
              </NavLink>
            </div>
            <p className='second-navigation__text'>
              We sell high-quality vitamins and dietary supplements.
            </p>
            <ul className='second-navigation__logos'>
              <li>
                <a
                  className='second-navigation__social'
                  rel='noopener noreferrer'
                  target='_blank'
                  href='https://facebook.com/'
                >
                  <Facebook />
                </a>
              </li>
              <li>
                <a
                  className='second-navigation__social'
                  rel='noopener noreferrer'
                  target='_blank'
                  href='https://instagram.com/'
                >
                  <Insta />
                </a>
              </li>
              <li>
                <a
                  className='second-navigation__social'
                  rel='noopener noreferrer'
                  target='_blank'
                  href='https://youtube.com/'
                >
                  <Youtube />
                </a>
              </li>
            </ul>
          </div>
          <div className='second-navigation__column second-navigation__column-list'>
            <h3 className='second-navigation__title'>Navigation</h3>
            <nav className='second-navigation__nav'>
              <ul className='second-navigation__list'>
                <li>
                  <NavLink to={MAIN_ROUTE} className='second-navigation__link'>
                    Products
                  </NavLink>
                </li>
                <li>
                  <NavLink to={ABOUT_ROUTE} className='second-navigation__link'>
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink to={MAIN_ROUTE} className='second-navigation__link'>
                    Best Deals
                  </NavLink>
                </li>
                <li>
                  <NavLink to={NEWS_ROUTE} className='second-navigation__link'>
                    Latest News
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <div className='second-navigation__column second-navigation__column-list'>
            <h3 className='second-navigation__title'>Quick Links</h3>
            <ul className='second-navigation__list'>
              <li>
                <NavLink to={MAIN_ROUTE} className='second-navigation__link'>
                    Shipping & Returns
                </NavLink>
              </li>
              <li>
                <NavLink to={ABOUT_ROUTE} className='second-navigation__link'>
                  Privacy Policy
                </NavLink>
              </li>
              <li>
                <NavLink to={MAIN_ROUTE} className='second-navigation__link'>
                    Terms & Conditions
                </NavLink>
              </li>
              <li>
                <NavLink to={NEWS_ROUTE} className='second-navigation__link'>
                  Orders & Returns
                </NavLink>
              </li>
            </ul>
          </div>
          <div className='second-navigation__column'>
            <h3 className='second-navigation__title'>Contacts</h3>
            <div className='second-navigation__contacts'>
              <div className='second-navigation__contact second-navigation__contact-phone'>
                <span>Phone:</span> <a href="tel:+1234567890">+1 (234) 567 89 00</a>
              </div>
              <div className='second-navigation__contact second-navigation__contact-email'>
                <span>Email:</span> <a href="mailto:goodhabit@email.com">goodhabit@email.com</a>
              </div>
              <div className='second-navigation__contact second-navigation__contact-address'>
                <span>Address:</span> 170 S 1st St, Brooklyn, NY 11211, USA
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BottomNavigation;

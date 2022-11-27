import React from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import videoBackground from '../../img/aboutPage/video.jpg';
import user from '../../img/aboutPage/ceo-avatar.jpg';
import { ReactComponent as Triangle } from '../../img/aboutPage/triangle.svg';
import './About.scss';
import BottomNavigation from '../../components/bottomNavigation/BottomNavigation';

const About = () => {
  return (
    <div className='wrapper'>
      <Header />
      <main className='main main-about'>
        <div className='main-about__video'>
          <div className='main-about__container container'>
            <div className='main-about__img ibg'>
              <img
                src={videoBackground}
                alt='a doctor with book in his hands'
              />
              <a
                rel='noopener noreferrer'
                target='_blank'
                href='https://youtube.com/'
                className='main-about__link'
              >
                <Triangle/>
              </a>
            </div>
          </div>
        </div>
        <div className='main-about__content'>
          <div className='main-about__container container'>
            <div className='main-about__row'>
              <p className='main-about__column'>
                In the modern world, our health is regularly exposed to all
                sorts of stresses. Poor food, untimely nutrition, inadequate
                sleep - all of this negatively affects our health. Also, do not
                forget about bad ecology, constant stress at work, etc. All this
                leads to the fact that we get sick more often, and the systems
                of our body do not work as they should. Therefore, we can notice
                a deterioration in the condition of hair, skin, nails, teeth.
                Your health should be maintained, and dietary supplements and
                vitamins will help you with this.
              </p>
              <p className='main-about__column'>
                Complexes of natural ingredients will help you maintain your
                health and improve your well-being. Our company has been working
                in the market of dietary supplements and vitamins since 1997. It
                all started with a small company that had just one laboratory.
                We are now one of the largest manufacturers and sellers of
                dietary and health supplements in the United States. Our
                products are sold in 48 states, not to mention the online store
                available to customers from all over the world.
              </p>
            </div>
          </div>
        </div>
        <div className='main-about__information'>
          <div className='main-about__container container'>
            <div className='main-about__row'>
              <div className='main-about__column main-about__column-img'>
                <div className='ibg'>
                  <img src={user} alt='avatar' />
                </div>
              </div>
              <div className='main-about__column'>
                <p className='main-about__text'>
                  All products sold by our company are certified. Our dietary
                  supplements and vitamins have passed all the necessary
                  laboratory tests, which have proven their safety.
                </p>
                <p className='main-about__text'>
                  We do everything so that you can get the most from nature. No
                  synthetics, only natural ingredients that are really effective
                  and safe for humans. Our products truly help you stay healthy,
                  feel better, and enhance the effects of essential medications
                  in your treatment.
                </p>
                <p className='main-about__text'>
                  We regularly conduct research and develop new products for
                  your well-being. Our laboratory is actively studying the
                  properties of natural components, which allows us to
                  constantly develop new products.
                </p>
                <h2 className='main-about__title'>Amanda Dorsey, CEO </h2>
              </div>
            </div>
          </div>
        </div>
        <BottomNavigation/>
        <div className='main-about__form'></div>
      </main>
      <Footer />
    </div>
  );
};

export default About;

import React from "react";
import BottomNavigation from '../../components/bottomNavigation/BottomNavigation';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
// import './Works.scss';

const Main = () => {
    return(
       <div className='wrapper'>
           <Header/>
           <main>
           
            <BottomNavigation/>
           </main>
           <Footer/>
       </div>
    );
};

export default Main;
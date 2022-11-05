import React from "react";
import './Footer.scss';

const Footer = () => {
    return(
       <footer className='footer'>
           <div className="footer__container container">
                <div className="footer__row">
                    <div className="footer__created">© Created by</div>
                    <div className="footer__right">All rights Reserved</div>
                </div>
           </div>
       </footer>
    );
};

export default Footer;
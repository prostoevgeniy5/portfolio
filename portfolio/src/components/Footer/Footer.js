import React from 'react';
import s from './Footer.module.css';

function Footer(props) {
	return (
	<footer className="sixthWrapper">
         <p>Footer</p>
         <div className="sixthWrapper_element">
            <span>Иван Иванов</span>
            <div className="sixthWrapper_element__midle">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className="fourthWrapper_element__bottom">
              &copy; 2019 Все права защищены.
            </div>
         </div>
     </footer>
		);
}

export  default Footer;
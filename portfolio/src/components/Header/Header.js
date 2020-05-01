import React from 'react';
import s from './Header.module.css';

function Header () {
	return (
      <div className={s.App_header}>      
        <p>
          Header
        </p>
        <nav className={s.nav}>
          <a href="#" >Главная</a>
          <a href="#" >Скилы</a>
          <a href="#" >Работа</a>
          <a href="#" >Контакты</a>
        </nav>
      </div>
      );
  }


export default Header;
import React from 'react';
import s from './Main.module.css';

function Main (props) {
	return (
        <div className={s.firstBlockWrapper}>
          <p> Block 1</p>
          <div className={s.firstBlockWrapper_element}>
            <div className={s.firstBlockWrapper_element_item}>
              Меня зовут Евгений. Я frontend разработчик.
            </div>
          <div className={s.firstBlockWrapper_element_item2}>
            
          </div>
        </div>
      </div>
		);
}

export default Main;
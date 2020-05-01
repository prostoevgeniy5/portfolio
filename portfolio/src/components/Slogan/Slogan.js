import React from 'react';
import s from './Slogan.module.css';

function Slogan(props) {
	return (
		<div className={s.fourthWrapper}>
         	<p> Block 4</p>
         	<div className={s.fourthWrapper_element}>
            	<div className={s.fourthWrapper_element__top}>
              		Рассматриваю варианты удалённой работы.
            	</div>
            <div className={s.fourthWrapper_element__bottom}>
              <button>Найми меня</button>
            </div>
         </div>
     	</div>
		);
}

export default Slogan;
import React from 'react';
import s from './SkilsItem.module.css';

function SkilsItem () {
  return (
        <div className={s.secondBlockWrapper_element_item2__1}>
              <div className={s.item2__top}>

              </div>
              <div className={s.item2__midle}>
                <span>React</span>
              </div>
              <div className={s.item2__bottom}>
                <div>Подробное описание навыка</div>
              </div>
        </div>
    );
}

export default SkilsItem;
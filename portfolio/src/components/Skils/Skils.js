import React from 'react';
import s from './Skils.module.css';
import SkilsItem from './SkilsItem/SkilsItem.js';

function Skils (props) {
	return (
		      <div className={s.secondBlockWrapper}>
        <p> Block 2</p>
        <div className={s.secondBlockWrapper_element}>
          <div className={s.secondBlockWrapper_element_item}>
            <span className={s.description}>Мои скилы</span>
          </div>
          <div className={s.secondBlockWrapper_element_item2}>
            <SkilsItem />
            <SkilsItem />
            <SkilsItem />
        {/*    <div className={s.secondBlockWrapper_element_item2__1}>
              <div /> className={s.item2__top}>

              </div>
              <div className={s.item2__midle}>
                <span>React</span>
              </div>
              <div className={s.item2__bottom}>
                <div>Подробное описание навыка</div>
              </div>
            </div>
             <div className={s.secondBlockWrapper_element_item2__2}>
              <div className={s.item2__top}>
                
              </div>
              <div className={s.item2__midle}>
                <span>React</span>
              </div>
              <div className={s.item2__bottom}>
                <div>Подробное описание навыка</div>
              </div>
            </div>
             <div className={s.secondBlockWrapper_element_item2__3}>
              <div className={s.item2__top}>
                
              </div>
              <div className={s.item2__midle}>
                <span>React</span>
              </div>
              <div className={s.item2__bottom}>
                <div>Подробное описание навыка</div>
              </div>
            </div>
        */}
          </div>
        </div>
      </div>
		);
}

export default Skils;
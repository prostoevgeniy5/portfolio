import React from 'react';
import s from './Myprojects.module.css';

function Myprojects(props) {
	return (
		<div className={s.thirdBlockWrapper}>
        	<p className={s.thirdBlockWrapper_paragraph}> Block 3</p>
        	<div className={s.thirdBlockWrapper_element}>
          	 <div className={s.thirdBlockWrapper_element_item}>
           			 <span className={s.description}>Мои работы</span>
         		 </div>
          		<div className={s.thirdBlockWrapper_element_item2}>
            		<div className={s.thirdBlockWrapper_element_item2__1}>
             			<div className={s.third_item2__top}>
                			<div className={s.third_item2__top_image}>
                				  <img src={"https://www.psychologos.ru/images/articles/showcases/48nn9rsd.jpg"} alt={"image"} />
                      </div>
                      <div className={s.third_item2__top_button}>
              					<button>Смотреть</button>
            				  </div> 
              				</div>
             
              				<div className={s.third_item2__bottom}>
                				<div>Название проекта</div>
                				<div>Подробное описание</div>
              				</div>
            			</div>
             		<div className={s.thirdBlockWrapper_element_item2__1}>
              			<div className={s.third_item2__top}>
                			<div className={s.third_item2__top_image}>
                				<img src={"https://www.psychologos.ru/images/articles/showcases/48nn9rsd.jpg"} alt={"image"} />
                      </div>
              				<div className={s.third_item2__top_button}>
                					<button>Смотреть</button>
              				</div> 
              				</div>
             
              				<div className={s.third_item2__bottom}>
                				<div>Название проекта</div>
                				<div>Подробное описание</div>
              				</div>
            			</div>
          			</div>
        		</div>
      		</div>
      	
		);
}

export default Myprojects;
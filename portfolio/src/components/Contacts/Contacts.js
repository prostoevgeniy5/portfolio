import React from 'react';
import s from './Contacts.module.css';

function Contacts(props) {
	return (
      <div className={s.fifthWrapper}>
        <p>Блок 5</p>       
           <form className={s.fifthWrapper_form} action="" method="get" >
              <span>Контакты</span>
              <div className={s.fifthWrapper_form__item}>
                <input type="text" id="firstname" name="fname" />
                <input type="text" id="lastname" name="lname" />
                <textarea  id="textdata" rows="4" cols="20" />
              </div>
              <div>
                <input type="submit" value="Submit" />
              </div>
            </form>         
      </div>
      );
}

export default Contacts;
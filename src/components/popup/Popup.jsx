import React from 'react';
import s from './popup.module.scss'

const Popup = ({submitHandler, email}) => {
    return (
        <div className={s.popup}>

            <div className={s.popup_block}>

                <img src={require('../../assets/close.png')} width={16} height={15} className={s.close}
                     draggable={false} onClick={submitHandler}/>

                <img src={require('../../assets/popup.png')} width={192} height={192} draggable={false}/>

                <span>
                    Registration is completed
                </span>


                <div>
                    <p>
                        Thank you for registering. To activate your account, please check your email
                    </p>

                    <span className={s.email}>
                  {email}
                </span>
                </div>


                <div className={s.buttons_block}>

                    <button
                        className={s.close_button}
                        onClick={submitHandler}
                    >
                        Close
                    </button>

                </div>
            </div>

        </div>
    );
};

export default Popup;
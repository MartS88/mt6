import React from 'react';
import s from './Header.module.scss'
import Logo from "./logo/Logo";
import {useMediaQuery} from "react-responsive";
import MobileLogo from "./mobilelogo/MobileLogo";
import {scrollToElement} from "../utils/scrollUtils";

const Header = () => {

    const isMobile = useMediaQuery({maxWidth: 765});

    return (
        <header>

            <div className={s.header_menu_block}>

                {!isMobile ? <Logo/> : <MobileLogo/>}

                <div className={s.button_block}>
                    <button
                        onClick={scrollToElement}
                        className={s.open_account}>Open account
                    </button>
                </div>

            </div>

            <div className={s.header_block_wrapped}>
                <div className={s.headear_wrapped_up_block_div}>
                <div className={s.header_wrapped_up_block}>
                    <h1 className={s.header_title}>
                        Trade today with the unbeatable MetaTrader Platforms
                    </h1>

                    <span className={s.header_about}>
                           Trade with the MTrading , the advantages of the MetaTrader platform and conditions you can't find anywhere else.
                    </span>

                    <button
                        onClick={scrollToElement}
                        className={s.open_account}>
                        Open account
                    </button>
                </div>

                    {!isMobile ?  <img src={require('../../assets/background.png')} draggable={false} className={s.background}/> : <img src={require('../../assets/background_mobile.png')} draggable={false} className={s.background}/>}


                </div>

                <div className={s.trade_block}>
                    <h3 className={s.trade_block_title}>Trade only the best tools</h3>

                    <span className={s.trade_block_span}>Trading offers a wide range of trading instruments with the best trading conditions</span>
                </div>


                <div className={s.header_wrapped_down_block}>

                    <div className={s.wrapped_down_vector_block}>
                        <img src={require('../../assets/Icon.png')} draggable={false} className={s.wrapped_down_vector_block_logo}/>

                        <span className={s.about_vector}>
                           Currencies
                        </span>
                    </div>

                    <div className={s.wrapped_down_vector_block}>
                        <img src={require('../../assets/Icon2.png')} draggable={false} className={s.wrapped_down_vector_block_logo}/>

                        <span className={s.about_vector}>
                          Indices
                        </span>
                    </div>

                    <div className={s.wrapped_down_vector_block}>
                        <img src={require('../../assets/Icon3.png')} draggable={false} className={s.wrapped_down_vector_block_logo}/>

                        <span className={s.about_vector}>
                          Stock
                        </span>
                    </div>

                    <div className={s.wrapped_down_vector_block}>
                        <img src={require('../../assets/Icon4.png')} draggable={false} className={s.wrapped_down_vector_block_logo}/>

                        <span className={s.about_vector}>
                          Metal
                        </span>
                    </div>

                    <div className={s.wrapped_down_vector_block}>
                        <img src={require('../../assets/Icon5.png')} draggable={false} className={s.wrapped_down_vector_block_logo}/>

                        <span className={s.about_vector}>
                          Energy
                        </span>
                    </div>

                    <div className={s.wrapped_down_vector_block}>
                        <img src={require('../../assets/Icon6.png')} draggable={false} className={s.wrapped_down_vector_block_logo}/>

                        <span className={s.about_vector}>
                          Crypto
                        </span>
                    </div>
                </div>

            </div>

        </header>
    );
};

export default Header;
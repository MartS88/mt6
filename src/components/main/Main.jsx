import React, {useState} from 'react';
import s from './Main.module.scss'
import {useMediaQuery} from "react-responsive";
import {MetaTrader0,MetaTrader1,MetaTrader2,MetaTrader3 } from '../metatrader/metatrader'

const Main = () => {

    const isMobile = useMediaQuery({maxWidth: 765});

    const [activeItem, setActiveItem] = useState(0)


    const itemHandler = (item) => {
        setActiveItem(item)
        const element = document.getElementById('metatrader');
        element.scrollIntoView({
            behavior: 'smooth',
        });
    }

    return (
        <main>

            <h3 className={s.main_title}>Use the platform that suits you best</h3>

            <div

                className={s.main_choose_line}>

                <div className={`${s.main_choose_line_item} ${activeItem === 0 ? s.active : ''}`}
                     onClick={() => itemHandler(0)}
                >
                    MetaTrader 4
                </div>

                <div className={`${s.main_choose_line_item} ${activeItem === 1 ? s.active : ''}`}
                     onClick={() => itemHandler(1)}
                >
                    MetaTrader 4 MultiTerminal
                </div>

                <div className={`${s.main_choose_line_item} ${activeItem === 2 ? s.active : ''}`}
                     onClick={() => itemHandler(2)}
                >
                    MetaTrader 4 Supreme Edition
                </div>

                <div className={`${s.main_choose_line_item} ${activeItem === 3 ? s.active : ''}`}
                     onClick={() => itemHandler(3)}
                >
                    MetaTrader 4 WebTrader
                </div>

            </div>


            {activeItem === 0 &&  <MetaTrader0/>}
            {activeItem === 1 &&  <MetaTrader1/>}
            {activeItem === 2 &&  <MetaTrader2/>}
            {activeItem === 3 &&  <MetaTrader3/>}




            <div className={s.main_icons_block}>
                <h3 className={s.main_icons_block_title}>
                    Why invest with MTrading?
                </h3>

                <div className={s.main_icons}>

                    <div className={s.main_icon}>

                        <img src={require('../../assets/vector.png')} width={60} height={60} draggable={false}/>

                        <span className={s.icon_title}>

                            Professional Tools
                        </span>

                        <span className={s.about}>
                           Use ready-to-go trading strategies and indicators for confident trading.
                        </span>
                    </div>

                    <div className={s.main_icon}>

                        <img src={require('../../assets/vector2.png')} width={60} height={60} draggable={false}/>

                        <span className={s.icon_title}>

                           Unrestricted Trading
                        </span>

                        <span className={s.about}>
                          Log into the platform and trade from any device.
                        </span>
                    </div>

                    <div className={s.main_icon}>

                        <img src={require('../../assets/vector3.png')} width={60} height={60} draggable={false}/>

                        <span className={s.icon_title}>

                       Fast Withdrawals

                        </span>

                        <span className={s.about}>
                          Withdraw profits immediately.
                        </span>
                    </div>

                    <div className={s.main_icon}>

                        <img src={require('../../assets/vector4.png')} width={60} height={60} draggable={false}/>

                        <span className={s.icon_title}>

                          Zero Commission
                        </span>

                        <span className={s.about}>
                           Make deposits and withdraw profits without commissions.
                        </span>
                    </div>

                </div>

            </div>
        </main>
    );
};

export default Main;
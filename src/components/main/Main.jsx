import React, {useEffect, useState} from 'react';
import s from './Main.module.scss'
import {useMediaQuery} from "react-responsive";
import {scrollToElement} from "../utils/scrollUtils";

const Main = () => {

    const isMobile = useMediaQuery({maxWidth: 765});
    const [sliderValue, setSliderValue] = useState(250);
    const [profit, setProfit] = useState(312)
    const handleChange = (e) => {
        const value = parseInt(e.target.value, 10);
        setSliderValue(value);
    };

    const calculateBackgroundColor = () => {
        const percentage = (sliderValue - 250) / (25000 - 250) * 100;
        const color = `linear-gradient(to right, #8A24F3 ${percentage}%, #fff ${percentage}%)`;
        return {background: color};

    };

    const [activeItem, setActiveItem] = useState(200)
    const [activeItemValue, setActiveItemValue] = useState(0.25)
    const handleItemClick = (item) => {
        setActiveItem(item)
        setActiveItemValue(item === 200 ? 0.25 : 0.3);
    };

    useEffect(() => {
        setProfit(Math.floor(sliderValue * activeItemValue));
    }, [sliderValue, activeItemValue]);


    return (
        <main>

            <div className={s.start_block}>

                <h3 className={s.start_block_title}> How to collect your first bonus</h3>

                <div className={s.start_block_items}>

                    <div className={s.start_block_item}>
                        <img src={require('../../assets/number_frame.png')} width={48} height={48} draggable={false}/>
                        <span className={s.start_block_item_about}>
                           Open an account and verify
                        </span>

                        {!isMobile
                            ? <img src={require('../../assets/image 2448.png')} draggable={false}/>
                            : <img src={require('../../assets/image 2448_mobile.png')} draggable={false}/>
                        }

                    </div>

                    <div className={s.start_block_item}>
                        <img src={require('../../assets/number_frame2.png')} width={48} height={48} draggable={false}/>
                        <span className={s.start_block_item_about}>
                            Make deposit with <div className={s.start_block_item_about2}>40+ methods</div>
                        </span>

                        {!isMobile
                            ? <img src={require('../../assets/image 2449.png')} draggable={false}/>
                            : <img src={require('../../assets/image 2449_mobile.png')} draggable={false}/>
                        }
                    </div>

                    <div className={s.start_block_item}>
                        <img src={require('../../assets/number_frame3.png')} width={48} height={48} draggable={false}/>
                        <span className={s.start_block_item_about}>
                            Choose the required deposit bonus
                        </span>

                        {!isMobile
                            ? <img src={require('../../assets/image 2453.png')} draggable={false}/>
                            : <img src={require('../../assets/image 2450_mobile.png')} draggable={false}/>
                        }
                    </div>
                </div>
            </div>


            <div className={s.withdraw_bonus_block}>
                <h3 className={s.withdraw_bonus_block_title}>
                    How to withdraw your bonus
                </h3>

                <div className={s.withdraw_bonus_wrapped}>

                    <div className={s.withdraw_bonus_div}>

                        <div className={s.you_invest}>

                            <span className={s.mid_block_div_investment}>Deposit amount</span>

                            <span className={s.mid_block_div_investment}>${sliderValue}</span>

                        </div>
                        <div className={s.withdraw_line}>
                            <input
                                className={s.slider}
                                type="range"
                                min="250"
                                max="25000"
                                step="250"
                                value={sliderValue}
                                onChange={handleChange}
                                style={calculateBackgroundColor()}
                            />
                            <div className={s.slider_prices}>
                                <span className={s.slider_price}>$250</span>
                                <span className={s.slider_price}>$25000</span>
                            </div>

                            <div className={s.bonus_size}>

                                <span className={s.bonus_size_title}>Bonus Size</span>

                                <div className={s.bonus_items}>

                                    <span className={`${s.bonus_item} ${activeItem === 200 ? s.active : ''}`}
                                          onClick={() => handleItemClick(200)}
                                    >
                                        200%
                                    </span>

                                    <span className={`${s.bonus_item} ${activeItem === 100 ? s.active : ''}`}
                                          onClick={() => handleItemClick(100)}
                                    >
                                        100%
                                    </span>

                                    <span className={`${s.bonus_item} ${activeItem === 50 ? s.active : ''}`}
                                          onClick={() => handleItemClick(50)}
                                    >
                                        50%
                                    </span>

                                    <span className={`${s.bonus_item} ${activeItem === 25 ? s.active : ''}`}
                                          onClick={() => handleItemClick(25)}
                                    >
                                        25%
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={s.withdraw_about_block}>

                        <span className={s.withdraw_about_block_span}>
                       {profit} lots before withdrawal
                        </span>

                        <p className={s.withdraw_about_block_p}>
                            Trade a certain amount of lots on any instrument, and you will be able to withdraw the bonus
                            amount as your profit or reinvest it.
                        </p>

                    </div>
                </div>

                <button
                    onClick={scrollToElement}
                    className={s.get_you_bonus_button}>
                    Get you bonus
                </button>

            </div>


            <div className={s.main_icons_block}>
                <h3>
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

                         Secure

                        </span>

                        <span className={s.about}>
                          Segregated client accounts, without merging client and company investments.
                        </span>
                    </div>

                </div>

                <div className={s.main_icons}>

                    <div className={s.main_icon}>

                        <img src={require('../../assets/vector4.png')} width={60} height={60} draggable={false}/>

                        <span className={s.icon_title}>

                          Global
                        </span>

                        <span className={s.about}>
                           With over 25 locations, we are trusted by over 1,000,000 clients.
                        </span>
                    </div>

                    <div className={s.main_icon}>

                        <img src={require('../../assets/vector5.png')} width={60} height={60} draggable={false}/>

                        <span className={s.icon_title}>

                          Free Education
                        </span>

                        <span className={s.about}>
                        Learn how to trade profitably in webinars and master classes.
                        </span>
                    </div>

                    <div className={s.main_icon}>

                        <img src={require('../../assets/vector6.png')} width={60} height={60} draggable={false}/>

                        <span className={s.icon_title}>

                         Support
                        </span>

                        <span className={s.about}>
                          Get 24/7 support in your native language.
                        </span>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Main;
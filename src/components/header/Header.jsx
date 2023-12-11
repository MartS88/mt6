import React, {useState} from 'react';
import s from './Header.module.scss'
import Logo from "./logo/Logo";
import {useMediaQuery} from "react-responsive";
import MobileLogo from "./mobilelogo/MobileLogo";
import {scrollToElement} from "../utils/scrollUtils";

const Header = () => {

    const isMobile = useMediaQuery({maxWidth: 765});
    const [sliderValue, setSliderValue] = useState(250);
    const [profit, setProfit] = useState(312)
    const handleChange = (e) => {
        const value = parseInt(e.target.value, 10);
        setSliderValue(value);
        setProfit(Math.floor(value * 3))
    };

    const calculateBackgroundColor = () => {
        const percentage = (sliderValue - 250) / (25000 - 250) * 100;
        const color = `linear-gradient(to right, #8A24F3 ${percentage}%, #fff ${percentage}%)`;
        return { background: color };

    };


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

                <div className={s.header_wrapped_up_block}>
                    <h1 className={s.header_title}>
                        Up to 200% deposit bonus
                    </h1>

                    <span className={s.header_about}>
                            Start making orders with increased volume for gaining higher profit
                    </span>

                    <button
                        onClick={scrollToElement}
                        className={s.get_you_bonus_button}>
                        Get you bonus
                    </button>
                </div>

                <div className={s.header_wrapped_down_block}>
                    <div className={s.wrapped_down_vector_block}>
                        <img src={require('../../assets/wrapped_vector.png')} draggable={false}/>

                        <span className={s.about_vector}>
                           For every deposit
                        </span>
                    </div>

                    <div className={s.wrapped_down_vector_block}>
                        <img src={require('../../assets/wrapped_vector2.png')} draggable={false}/>

                        <span className={s.about_vector}>
                           Withdrawable
                        </span>
                    </div>

                    <div className={s.wrapped_down_vector_block}>
                        <img src={require('../../assets/wrapped_vector3.png')} draggable={false}/>

                        <span className={s.about_vector}>
                          Get in 1 click
                        </span>
                    </div>

                    <div className={s.wrapped_down_vector_block}>
                        <img src={require('../../assets/wrapped_vector4.png')} draggable={false}/>

                        <span className={s.about_vector}>
                           Free margin increase
                        </span>
                    </div>
                </div>
            </div>

            <div className={s.line_block}>

                <div className={s.line_up_block}>
                    <h3 className={s.line_up_block_title}>
                        How the
                        bonuses work
                    </h3>

                    <span className={s.line_up_block_about}>
                        When you apply the bonus, it adds to your free margin. This way you can open more orders of greater volume, potentially increasing your profit.
                    </span>

                    <button
                        onClick={scrollToElement}
                        className={s.get_you_bonus_button}>
                        Get you bonus
                    </button>
                </div>


                <div className={s.line_mid_block_wrapped}>
                <div className={s.line_mid_block}>

                        <div className={s.you_invest}>

                            <span className={s.mid_block_div_investment}>You investment</span>

                            <span className={s.mid_block_div_investment}>${sliderValue}</span>

                        </div>

                        <div className={s.investment_line}>
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

                            <div className={s.you_invest}>

                                <span className={s.mid_block_div_investment2}>With 200% bonus your <span className={s.purple}>free margin</span> will become</span>

                                <div className={s.mid_block_div_investment3}>
                                    <span className={s.mid_block_div_investment3_span}>${sliderValue}</span>
                                    <span className={s.mid_block_div_investment3_span2}>${profit.toLocaleString()}</span>
                                </div>
                            </div>
                        </div>
                </div>
                </div>
            </div>

        </header>
    );
};

export default Header;
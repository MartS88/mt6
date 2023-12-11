import s from '../main/Main.module.scss'
import {scrollToElement} from "../utils/scrollUtils";

const MetaTrader0 = () => (
    <div
        id='metatrader'
        className={s.metatrader}>
        <img src={require('../../assets/Ellipse510.png')} alt=""/>
        <div className={s.metatrader_block}>
            <h3 className={s.metatrader_block_title}>
                MetaTrader 4 a free forex trading platform
            </h3>

            <div className={s.metatrader_block_ul_div}>
                <ul>
                    <li>Flexible and algorithmic trading</li>
                    <li>Cross-platform and mobile-friendly software</li>
                    <li>Trading signals and numerous indicators</li>
                    <li>Automated trading and EAs
                    </li>
                </ul>

                <ul>
                    <li>Advanced tools and charts</li>
                    <li>Built-In tools for advanced technical analysis</li>
                    <li>No requotes and strategy restrictions</li>
                    <li>Multiple accounts supported</li>
                </ul>
            </div>


            <button
                onClick={scrollToElement}
                className={s.metatrader_block_button}>Download</button>

        </div>
    </div>
);


const MetaTrader1 = () => (
    <div
        id='metatrader'
        className={s.metatrader}>
        <img src={require('../../assets/Ellipse511.png')} alt=""/>
        <div className={s.metatrader_block}>
            <h3 className={s.metatrader_block_title}>
                MT 4 MultiTerminal - simultaneous order allocation on several active trading accounts
            </h3>

            <div className={s.metatrader_block_ul_div}>
                <ul>
                    <li>Open deals simultaneously on several accounts with one click</li>
                    <li>Open trading positions of the same volumes on different accounts with customizable conditions
                    </li>
                </ul>

                <ul>
                    <li>Use the same handy MT4 client terminal without any complex interface</li>
                    <li>Manage up to 128 live accounts at once</li>
                </ul>
            </div>


            <button
                onClick={scrollToElement}
                className={s.metatrader_block_button}>Download</button>

        </div>
    </div>
);


const MetaTrader2 = () => (

    <div
        id='metatrader'
        className={s.metatrader}>
        <img src={require('../../assets/Ellipse512.png')} alt=""/>
        <div className={s.metatrader_block}>
            <h3 className={s.metatrader_block_title}>
                MT 4 Supreme edition - professional cross-platform MTrading plugin for MetaTrader 4.
            </h3>

            <div className={s.metatrader_block_ul_div}>
                <p>
                    MetaTrader 4 Supreme Edition, a plugin developed by MTrading, has combined all significant
                    advantages of the basic MT4, to deliver an even better trading experience. Multiple orders, an
                    updated package of indicators, tick chart trader and mini terminal, along with trading simulators,
                    news feed and order templates will help to efficiently manage and improve your trading strategies.
                    Optimize your trading routine with 58+ new features.
                </p>
            </div>


            <button
                onClick={scrollToElement}
                className={s.metatrader_block_button}>Download</button>

        </div>
    </div>
);


const MetaTrader3 = () => (

    <div
        id='metatrader'
        className={s.metatrader}>
        <img src={require('../../assets/Ellipse513.png')} alt=""/>
        <div className={s.metatrader_block}>
            <h3 className={s.metatrader_block_title}>
                MT 4 MultiTerminal - simultaneous order allocation on several active trading accounts
            </h3>

            <div className={s.metatrader_block_ul_div}>
                <ul>
                    <li>No requotes and strategy restrictions</li>
                    <li>Trade crypto, Forex, CFDs, stocks and indices</li>
                    <li>Use indicators, EAs, and trading signals</li>
                </ul>

                <ul>
                    <li>No download needed</li>
                    <li>Trade from browser</li>
                    <li>Use Mac or PC</li>

                </ul>
            </div>


            <button
                onClick={scrollToElement}
                className={s.metatrader_block_button}>Download</button>

        </div>
    </div>
);

export {MetaTrader0, MetaTrader1, MetaTrader2, MetaTrader3};
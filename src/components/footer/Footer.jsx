import React from 'react';
import 'react-phone-input-2/lib/bootstrap.css'
import FooterForm from "./footerform/FooterForm";
import FooterContent from "./footercontent/FooterContent";
import s from './Footer.module.scss'

const Footer = () => {




    return (
        <footer>
            <FooterForm/>
            <FooterContent/>
        </footer>
    )
        ;
};

export default Footer;
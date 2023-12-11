import React, {useEffect, useState} from 'react';
import s from './FooterForm.module.scss'
import {isValidNumber, parsePhoneNumber} from "libphonenumber-js";
import PhoneInput from "react-phone-input-2";
import Popup from "../../popup/Popup";
import {useMediaQuery} from "react-responsive";
const FooterForm = () => {

    const [firstName, setFirstName] = useState('')
    const [firstNameError, setFirstNameError] = useState('The First name is required')
    const [firstNameDirty, setFirstNameDirty] = useState(false)

    const [lastName, setLastName] = useState('')
    const [lastNameError, setLastNameError] = useState('The Last name is required')
    const [lastNameDirty, setLastNameDirty] = useState(false)

    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('Email address is required')
    const [emailDirty, setEmailDirty] = useState(false)


    const [phoneNumber, setPhoneNumber] = useState('')
    const [phoneNumberError, setPhoneNumberError] = useState('The Phone number is required')
    const [phoneNumberDirty, setPhoneNumberDirty] = useState(false)


    const [activeForm, setActiveForm] = useState(true)


    const inputFirstNameCase = `${s.firstName_input} ${firstNameError && firstNameDirty ? s.error_input : ''}`;
    const inputLastNameCase = `${s.lastName_input} ${lastNameError && lastNameDirty ? s.error_input : ''}`;
    const inputEmailCase = `${s.email_input} ${emailError && emailDirty ? s.error_input : ''}`;
    const inputPhoneCase = `${s.phone_input} ${phoneNumberError && phoneNumberDirty ? s.error_input : ''}`;
    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'firstName':
                setFirstNameDirty(true);
                break;

            case 'lastName':
                setLastNameDirty(true);
                break;

            case 'email':
                setEmailDirty(true);
                break;

            case 'phone':
                setPhoneNumberDirty(true);
                break;

            default:
                break;
        }
    };


    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Please enter a valid email address')

        } else {
            setEmailError('')
        }
    }

    const nameHandler = (e) => {
        setFirstName(e.target.value);
        if (e.target.value.length < 2) {
            setFirstNameError('The name must contain at least 2 letters.');
        } else {
            setFirstNameError('');
        }
    };

    const lastNameHandler = (e) => {
        setLastName(e.target.value);
        if (e.target.value.length < 2) {
            setLastNameError('The Last name must contain at least 2 letters.');
        } else {
            setLastNameError('');
        }
    };


    const handlePhoneChange = (value, country) => {
        setPhoneNumber(value);

        if (value.length > 1) {
            const phoneNumberObj = parsePhoneNumber(value, country.countryCode.toUpperCase());
            const formattedPhoneNumber = phoneNumberObj ? phoneNumberObj.formatInternational() : '';
            const isValid = isValidNumber(formattedPhoneNumber, country);
            if (!isValid) {
                setPhoneNumberError('Type a correct phone number');
                setPhoneNumberDirty(true);
            } else {
                setPhoneNumberError('');
                setPhoneNumberDirty(false);
            }

        }
    };


    useEffect(() => {
        if (firstNameError || lastNameError || emailError || phoneNumberError) {
            setActiveForm(false)
        } else {
            setActiveForm(true)
        }

    }, [firstNameError, lastNameError, emailError, phoneNumberError,]);



    const [popUpIsActive, setPopUpIsActive] = useState(false)
    const submitHandler = (e) => {
        e.preventDefault()
        setPopUpIsActive(!popUpIsActive)
    }


    useEffect(() => {
        if (popUpIsActive) {
                window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [popUpIsActive]);

    const isMobile = useMediaQuery({maxWidth: 765});

    return (
        <div className={s.form_back}>

            {popUpIsActive ? (
                <div className={s.popup_container}>
                    <Popup submitHandler={submitHandler} email={email} />
                </div>
            ) : null}


            <form
                id='scrollTarget'
                onSubmit={submitHandler}>

                <h3 className={s.footer_form_title}>
                    Enjoy and get you bonuse.
                </h3>

                <div className={s.inputs_block}>

                    <div className={s.name_group}>
                        <div className={s.label_group}>
                            <label htmlFor="firstName">First name:</label>
                            <input
                                className={inputFirstNameCase}
                                type="text"
                                id="firstName"
                                name="firstName"
                                autoComplete='off'
                                onBlur={e => blurHandler(e)}
                                onChange={e => nameHandler(e)}
                            />

                            <div className={s.error_container}>
                                {firstNameDirty && firstNameError && (
                                    <div className={`${s.error} ${s.visible}`}>
                                        {firstNameError}
                                    </div>
                                )}
                            </div>

                        </div>


                        <div className={s.label_group}>
                            <label htmlFor="lastName">Last name:</label>
                            <input
                                className={inputLastNameCase}
                                type="text"
                                id="lastName"
                                name="lastName"
                                autoComplete='off'
                                onBlur={e => blurHandler(e)}
                                onChange={e => lastNameHandler(e)}
                            />

                            <div className={s.error_container}>
                                {lastNameDirty && lastNameError && (
                                    <div className={`${s.error} ${s.visible}`}>
                                        {lastNameError}
                                    </div>
                                )}
                            </div>

                        </div>
                    </div>

                    <div className={s.phone_group}>
                        <div className={s.label_group}>
                            <label htmlFor="email">Email:</label>
                            <input
                                className={inputEmailCase}
                                type="email"
                                id="email"
                                name="email"
                                autoComplete='off'
                                onBlur={e => blurHandler(e)}
                                onChange={e => emailHandler(e)}

                            />

                            <div className={s.error_container}>
                                {emailDirty && emailError && (
                                    <div className={`${s.error} ${s.visible}`}>
                                        {emailError}
                                    </div>
                                )}
                            </div>


                        </div>

                        <div className={s.label_group}>

                            <label htmlFor="phoneNumber">Phone number:</label>

                            <PhoneInput
                                onBlur={() => blurHandler({target: {name: 'phone'}})}
                                type="phone"
                                id="phone"
                                name="phone"
                                className={inputPhoneCase}
                                country={'in'}
                                value={phoneNumber}
                                onChange={(value, country,) => handlePhoneChange(value, country,)}
                                inputProps={{
                                    required: true,
                                }}
                            />


                            <div className={s.error_container}>
                                {phoneNumberDirty && phoneNumberError && (
                                    <div className={`${s.error} ${s.visible}`}>
                                        {phoneNumberError}
                                    </div>
                                )}
                            </div>

                        </div>
                    </div>

                </div>


                <button
                    disabled={!activeForm}
                    className={activeForm ? s.submit_button : s.button_disabled}
                    type='submit'
                >
                    Start now
                </button>

                <p>
                    By proceeding, I accept the Privacy Policy and certify that I am over 18 years old. I
                    agree to
                    receive company news, product updates and market overviews by email.
                    I understand that I can unsubscribe by contacting Customer Support.
                </p>
            </form>

            {!isMobile

                ? <img src={require('../../../assets/safe.png')} draggable={false}/>


                : <img src={require('../../../assets/safe_mobile.png')} draggable={false} className={s.safe}/>

            }


        </div>
    );
};

export default FooterForm;
'use client'

import React, { useState, useEffect } from 'react';
import { MdOutlineCancel } from "react-icons/md";
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from "next-i18next";

function PopUp() {
    const [isOpen, setIsOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [lastEmailTime, setLastEmailTime] = useState(0);
    const [isChecked, setIsChecked] = useState(false);

    const { t, i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(i18n.language)

    useEffect(() => {
        setCurrentLanguage(i18n.language);
    }, [i18n.language]);

    useEffect(() => {
        const isPopUpClosed = localStorage.getItem('popUpClosed');
        if (!isPopUpClosed) {
            setTimeout(() => {
                setIsOpen(true);
            }, 7000);
        }
    }, []);

    const handleClose = () => {
        setIsOpen(false);
        localStorage.setItem('popUpClosed', 'true');
    };

    const validateEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setError('');
        setSuccess('');
    };

    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const currentTime = new Date().getTime();
        if (!validateEmail(email)) {
            setError('Please enter a valid email address.');
            return;
        }
        if (currentTime - lastEmailTime < 60000) { // Check if a minute has passed
            setError('Please wait a minute before sending another email.');
            return;
        }

        const data = {
            "email": email }
        

        const url = 'https://mails.ttt-services.com/6d9e3damskdakqi2qns';

        fetch(url, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                setEmail('');
                setError('');
                setSuccess('Successfully subscribed!');
                setLastEmailTime(currentTime); // Update lastEmailTime to the current time
                setTimeout(() => {
                    handleClose();
                }, 2000); // Close the popup after 2 seconds
            })
            .catch((error) => {
                console.error('Error:', error);
                setError('Failed to subscribe. Please try again later.');
            });
    };

    const backdrop = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    };

    const modal = {
        hidden: { y: "-100vh", opacity: 0 },
        visible: { y: "0", opacity: 1, transition: { delay: 0.5 } },
        exit: { y: "100vh", opacity: 0, transition: { duration: 0.5 } }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className='fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50 backdrop-blur-sm'
                    variants={backdrop}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                >
                    <motion.div className='bg-white mx-8 px-8 desktop:px-12 desktop:py-16 desktop:mx-24 rounded-2xl desktop:max-w-[450px]'
                        variants={modal}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <div className='flex flex-row justify-end'>
                            <MdOutlineCancel
                                className='text-3xl text-slate-400 desktop:-mt-10 desktop:-mr-4 w-6 h-6 -ml-10 desktop:ml-0 mt-10 cursor-pointer'
                                onClick={handleClose}
                            />
                        </div>
                        <div className='mt-5 desktop:mt-10'>
                            <p className='text-secondary font-medium text-3xl'> {t('common:pop_up_title')} {' '} <span className='text-ttblue font-semibold'>{t('common:pop_up_span')}</span></p>
                            <p className='text-ttorange font-semibold mt-10'>{t('common:pop_up_cta')}</p>
                            <form onSubmit={handleSubmit} className='flex flex-col desktop:flex-row items-center pb-2 desktop:pb-0'>
                                <input
                                    type="text"
                                    className={`bg-slate-100 w-full mt-3 py-3 px-5 rounded-xl ${error && 'border border-red-500'}`}
                                    placeholder='Your Email Here'
                                    value={email}
                                    onChange={handleEmailChange}
                                />
                                <button type='submit' className={`bg-ttorange w-full desktop:w-1/4 px-5 text-white font-semibold rounded-2xl py-3 text-center mt-3 desktop:ml-3 cursor-pointer ${!isChecked && 'opacity-50 cursor-not-allowed'}`} disabled={!isChecked}>
                                    {t('common:pop_up_send')}
                                </button>
                            </form>
                            <div className='flex flex-row items-start mt-5'>
                                <input
                                    type="checkbox"
                                    id="consentCheckbox"
                                    checked={isChecked}
                                    onChange={handleCheckboxChange}
                                    className='mr-2 mt-1 cursor-pointer'
                                />
                                <label htmlFor="consentCheckbox" className='text-secondary text-xs pb-10'>
                                {t('common:consent_1')} <a href="https://toptiertrader.com/en/privacy"><span className='underline'>  {t('common:consent_2') }</span></a> {t('common:consent_3')}
                                </label>
                            </div>
                            {error && <p className='text-red-500 mt-2'>{error}</p>}
                            {success && <p className='bg-green-500 text-white px-4 py-2 desktop:py-4 mb-10 desktop:mb-0 rounded-xl'>{success}</p>}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default PopUp;

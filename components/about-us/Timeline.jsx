'use client'

import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import localFont from 'next/font/local';
import bg_decoration from './assets/bg_decoration.png';

// Assuming you'll add these fonts to your project
const eagleFont = localFont({
    src: "../../public/fonts/eagle/EagleHorizonP.ttf",
});

const Timeline = ({ translations }) => {
    // Setup animations with intersection observer for each section
    const controls1 = useAnimation();
    const controls2 = useAnimation();
    const controls3 = useAnimation();
    const controls4 = useAnimation();
    const titleControls = useAnimation();

    const [ref1, inView1] = useInView({ threshold: 0.4, triggerOnce: true });
    const [ref2, inView2] = useInView({ threshold: 0.4, triggerOnce: true });
    const [ref3, inView3] = useInView({ threshold: 0.4, triggerOnce: true });
    const [ref4, inView4] = useInView({ threshold: 0.4, triggerOnce: true });
    const [titleRef, titleInView] = useInView({ threshold: 0.4, triggerOnce: true });

    useEffect(() => {
        if (titleInView) titleControls.start('visible');
    }, [titleControls, titleInView]);

    useEffect(() => {
        if (inView1) controls1.start('visible');
    }, [controls1, inView1]);

    useEffect(() => {
        if (inView2) controls2.start('visible');
    }, [controls2, inView2]);

    useEffect(() => {
        if (inView3) controls3.start('visible');
    }, [controls3, inView3]);

    useEffect(() => {
        if (inView4) controls4.start('visible');
    }, [controls4, inView4]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                duration: 0.8,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        },
    };

    return (
        <div className="w-full max-w-7xl relative mx-auto px-4 sm:px-6 md:px-8 pt-12 bg-[#EDEDED]">

            <Image src={bg_decoration} alt="Background decoration" loading='lazy' className="absolute  w-[500px] object-contain left-0 bottom-0 opacity-10" />

            {/* Title section */}
            <motion.div
                ref={titleRef}
                className="mb-16 hidden md:block"
                variants={containerVariants}
                initial="hidden"
                animate={titleControls}
            >
                <motion.h2
                    className="text-3xl md:text-4xl font-semibold flex flex-row items-end text-left"
                    variants={itemVariants}
                >
                    {translations.title} <span className={`text-[#C47F48] ml-5 mr-2 text-4xl md:text-5xl ${eagleFont.className}`}>{translations.title_decorator},</span> {translations.title_end} <span className={`text-[#C47F48] ml-3 text-3xl md:text-5xl ${eagleFont.className}`}>{translations.title_decorator_end}</span>
                </motion.h2>
            </motion.div>

            <motion.div
                ref={titleRef}
                className="mb-2 md:mb-16 block md:hidden"
                variants={containerVariants}
                initial="hidden"
                animate={titleControls}
            >
                <motion.div
                    className="text-3xl md:text-4xl font-semibold flex flex-row items-end text-left"
                    variants={itemVariants}
                >
                    <span className='min-w-[100px] '>{translations.title} </span> <span className={`text-[#C47F48] ml-5 mr-2 text-5xl md:text-5xl ${eagleFont.className}`}>{translations.title_decorator}, </span>
                </motion.div>
                <motion.div
                    className="text-3xl md:text-4xl font-semibold flex flex-row items-end text-left"
                    variants={itemVariants}
                >
                    {translations.title_end} <span className={`text-[#C47F48] ml-3 text-5xl md:text-5xl ${eagleFont.className}`}>{translations.title_decorator_end}</span>
                </motion.div>
            </motion.div>

            {/* Timeline with vertical line */}
            <div className="relative py-10">


                {/* Vertical line */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gray-200"></div>

                {/* Section 1 - La idea */}
                <motion.div
                    ref={ref1}
                    className="relative flex flex-col md:flex-row mb-20"
                    variants={containerVariants}
                    initial="hidden"
                    animate={controls1}
                >
                    {/* Section title - right aligned on mobile, centered on desktop */}
                    <div className="md:w-1/2 md:pr-12 md:text-right order-1 mb-6 md:mb-0">
                        <motion.h3
                            className="text-xl md:text-2xl font-medium border-b border-[#D2B69A] pb-2 inline-block"
                            variants={itemVariants}
                        >
                            {translations.idea}
                        </motion.h3>
                    </div>

                    {/* Connector dot */}
                    <div className="hidden md:block absolute left-1/2 top-0 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[#D2B69A]"></div>

                    {/* Section content - takes full width on mobile, half on desktop */}
                    <div className="md:w-1/2 md:pl-12 order-2">
                        <motion.p
                            className="text-sm md:text-base text-gray-700 leading-relaxed"
                            variants={itemVariants}
                        >
                            {translations.idea_description}
                        </motion.p>
                    </div>
                </motion.div>

                {/* Section 2 - La motivación */}
                <motion.div
                    ref={ref2}
                    className="relative flex flex-col md:flex-row mb-20"
                    variants={containerVariants}
                    initial="hidden"
                    animate={controls2}
                >
                    {/* Section content - takes full width on mobile, half on desktop, left side */}
                    <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
                        <motion.p
                            className="text-sm md:text-base text-gray-700 leading-relaxed"
                            variants={itemVariants}
                        >
                            {translations.motivation_description}
                        </motion.p>
                    </div>

                    {/* Connector dot */}
                    <div className="hidden md:block absolute left-1/2 top-0 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[#D2B69A]"></div>

                    {/* Section title - centered */}
                    <div className="md:w-1/2 md:pl-12 order-1 md:order-2 mb-6 md:mb-0">
                        <motion.h3
                            className="text-xl md:text-2xl font-medium border-b border-[#D2B69A] pb-2 inline-block"
                            variants={itemVariants}
                        >
                            {translations.motivation}
                        </motion.h3>
                    </div>
                </motion.div>

                {/* Section 3 - Nuestra promesa */}
                <motion.div
                    ref={ref3}
                    className="relative flex flex-col md:flex-row mb-20"
                    variants={containerVariants}
                    initial="hidden"
                    animate={controls3}
                >
                    {/* Section title - right aligned on mobile, centered on desktop */}
                    <div className="md:w-1/2 md:pr-12 md:text-right order-1 mb-6 md:mb-0">
                        <motion.h3
                            className="text-xl md:text-2xl font-medium border-b border-[#D2B69A] pb-2 inline-block"
                            variants={itemVariants}
                        >
                            {translations.promise}
                        </motion.h3>
                    </div>

                    {/* Connector dot */}
                    <div className="hidden md:block absolute left-1/2 top-0 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[#D2B69A]"></div>

                    {/* Section content - takes full width on mobile, half on desktop */}
                    <div className="md:w-1/2 md:pl-12 order-2">
                        <motion.p
                            className="text-sm md:text-base text-gray-700 leading-relaxed"
                            variants={itemVariants}
                        >
                            {translations.promise_description}
                        </motion.p>
                    </div>
                </motion.div>

                {/* Section 4 - Más que un estudio */}
                <motion.div
                    ref={ref4}
                    className="relative flex flex-col md:flex-row"
                    variants={containerVariants}
                    initial="hidden"
                    animate={controls4}
                >
                    {/* Section content - takes full width on mobile, half on desktop, left side */}
                    <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
                        <motion.p
                            className="text-sm md:text-base text-gray-700 leading-relaxed"
                            variants={itemVariants}
                        >
                            {translations.morethanastudio_description}
                        </motion.p>
                    </div>

                    {/* Connector dot */}
                    <div className="hidden md:block absolute left-1/2 top-0 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[#D2B69A]"></div>

                    {/* Section title - centered */}
                    <div className="md:w-1/2 md:pl-12 order-1 md:order-2 mb-6 md:mb-0">
                        <motion.h3
                            className="text-xl md:text-2xl font-medium border-b border-[#D2B69A] pb-2 inline-block"
                            variants={itemVariants}
                        >
                            {translations.morethanastudio}
                        </motion.h3>
                    </div>
                </motion.div>
            </div>
        </div>

    );
};

export default Timeline;
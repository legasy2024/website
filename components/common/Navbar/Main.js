'use client'

import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import logoImg from './assets/logo.svg'
import Image from 'next/image'
import LanguageChanger from './LanguageChanger'
import { usePathname } from 'next/navigation'

function Navbar({ translations }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    // Set visibility after 1 second
    const timer = setTimeout(() => setIsVisible(true), 1000)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(timer)
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
    transparent: { backgroundColor: 'rgba(0, 0, 0, 0)', backdropFilter: 'blur(0px)' },
    solid: { backgroundColor: 'rgba(0, 0, 0, 0.6)', backdropFilter: 'blur(6px)' }
  }

  const menuItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  }

  const mobileMenuVariants = {
    closed: { opacity: 0, height: 0 },
    open: { opacity: 1, height: 'auto' }
  }

  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  }

  // Function to determine if a link is active
  const isLinkActive = (href) => {
    // Handle localized routes (they might start with /es/, /en/, etc.)
    // Check if the current path contains the href or ends with the href
    return pathname === href || pathname.endsWith(href) || pathname.includes(`${href}/`)
  }

  // Function to get link style based on active state
  const getLinkStyle = (href) => {
    return isLinkActive(href)
      ? "text-[#A14E05] font-bold text-lg"
      : "text-gray-300 hover:text-white"
  }

  return (
    <nav className="flex flex-col items-center">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="fixed w-full z-50"
            initial="hidden"
            animate="visible"
            variants={navbarVariants}
          >
            <motion.div
              animate={isScrolled ? "solid" : "transparent"}
              variants={navbarVariants}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <div className="max-w-7xl mx-auto">
                <div className="flex flex-row items-center justify-between px-6 py-4 md:px-8">
                  <Link href="/" className="flex items-center">
                    <Image src={logoImg} width={140} height={40} alt='logo-img' className='hidden sm:hidden md:block' />
                    <Image src={logoImg} width={140} height={40} alt='logo-img' className='block sm:hidden md:hidden' />
                  </Link>

                  {/* Desktop Menu */}
                  <div className="hidden  md:flex mx-auto items-center space-x-8">
                    <nav className="flex space-x-8 justify-between">
                      <motion.div variants={menuItemVariants} transition={{ delay: 0.2 }}>
                        <Link href="/portfolio" className={`${getLinkStyle('/portfolio')} text-sm`}>
                          {translations.portfolio}
                        </Link>
                      </motion.div>
                      <motion.div variants={menuItemVariants} transition={{ delay: 0.3 }}>
                        <Link href="/about" className={`${getLinkStyle('/about')} text-sm`}>
                          {translations.about}
                        </Link>
                      </motion.div>
                      <motion.div variants={menuItemVariants} transition={{ delay: 0.4 }}>
                        <Link href="/blog" className={`${getLinkStyle('/blog')} text-sm`}>
                          {translations.blog}
                        </Link>
                      </motion.div>
                      <motion.div variants={menuItemVariants} transition={{ delay: 0.5 }}>
                        <Link href="/curses" className={`${getLinkStyle('/curses')} text-sm`}>
                          {translations.courses}
                        </Link>
                      </motion.div>
                      <motion.div variants={menuItemVariants} transition={{ delay: 0.5 }}>
                        <Link href="/vip" className={`${getLinkStyle('/vip')} text-sm`}>
                          {translations.vip}
                        </Link>
                      </motion.div>
                      <motion.div variants={menuItemVariants} transition={{ delay: 0.5 }}>
                        <Link href="/contact" className={`${getLinkStyle('/contact')} text-sm`}>
                          {translations.contact}
                        </Link>
                      </motion.div>
                    </nav>

                    <div className='ml-0 md:ml-10'>
                      <LanguageChanger isScrolled={isScrolled} />
                    </div>
                  </div>

                  {/* Mobile Menu Button */}
                  <motion.button
                    className="md:hidden text-white"
                    onClick={toggleMenu}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                  </motion.button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                  {isMenuOpen && (
                    <motion.div
                      className="md:hidden bg-black/80 backdrop-blur-lg backdrop-filter rounded-lg shadow-lg"
                      initial="closed"
                      animate="open"
                      exit="closed"
                      variants={mobileMenuVariants}
                    >
                      <div className="px-6 py-4 space-y-4 pt-8">
                        <Link
                          href="/portfolio"
                          className={`block py-2 text-xl ${getLinkStyle('/portfolio')}`}
                          onClick={closeMenu}
                        >
                          {translations.portfolio}
                        </Link>
                        <Link
                          href="/about"
                          className={`block py-2 text-xl ${getLinkStyle('/about')}`}
                          onClick={closeMenu}
                        >
                          {translations.about}
                        </Link>
                        <Link
                          href="/blog"
                          className={`block py-2 text-xl ${getLinkStyle('/blog')}`}
                          onClick={closeMenu}
                        >
                          {translations.blog}
                        </Link>
                        <Link
                          href="/curses"
                          className={`block py-2 text-xl ${getLinkStyle('/curses')}`}
                          onClick={closeMenu}
                        >
                          {translations.courses}
                        </Link>
                        <Link
                          href="/vip"
                          className={`block py-2 text-xl ${getLinkStyle('/vip')}`}
                          onClick={closeMenu}
                        >
                          {translations.vip}
                        </Link>
                        <Link
                          href="/contact"
                          className={`block py-2 text-xl ${getLinkStyle('/contact')}`}
                          onClick={closeMenu}
                        >
                          {translations.contact}
                        </Link>
                        <LanguageChanger isScrolled={isScrolled} />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
import './Nav.css';
import resume from './Resume.pdf';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import {motion} from 'framer-motion';
import logo from './logo.svg';
import menu from './menu.svg';
import MiniNav from '../MiniNav/MiniNav';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { AnimatePresence } from 'framer-motion';

function Nav() {
    const transition = {duration: 1, ease: [0.43, 0.13, 0.23, 0.96]}

    let location = useLocation().pathname;

    const [navVisibility, setNavVisibility] = useState(false);

    const showNav = {
        hidden: {
            y:"-100vh"
        },
        visible: {
            y: "0",
            opacity: 1,
            transition: {
                duration: 0.9,
                type: "spring",
                damping: 25,
                stiffness: 500
            }
        },
        exit: {
            y:"-100vh"
        }
    }

    return (
        <div className="mainNavContainer">
            <motion.div 
                className = 'nav'
                exit={{opacity: 0}}
                initial={{opacity: 0}}
                animate={{ opacity: 1 }}
                transition={transition}>
                <Link to='/'>
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                </Link>
                <div className="menu">
                    {location !== '/mywork' &&
                    <Link 
                        to={'/mywork'}
                        className='navButton'
                        >
                        My Work  →
                    </Link>
                    }

                    {location == '/mywork' &&
                    <Link 
                        to={'/about'}
                        className='navButton'
                        >
                        About Me  →
                    </Link>
                    }
                    <button className="hamburgerMenuContainer" onClick={()=> setNavVisibility(!navVisibility)}>
                        <img src={menu} alt="menu" />
                    </button>
                </div>
                <div className="navContainer">
                    <Link
                        className={(location === '/') ? 'active' : 'navLink'}
                        to={"/"}
                        >
                        Home
                    </Link>

                    <Link
                        className={(location === '/about') ? 'active' : 'navLink'}
                        to={"/about"}
                        >
                        About
                    </Link>

                    <Link
                        className={(location === '/mywork') ? 'active' : 'navLink'}
                        to={"/mywork"}
                        >
                        My Work
                    </Link>

                    <Link
                        className={(location === '/contact') ? 'active' : 'navLink'}
                        to={"/contact"}
                        >
                        Contact
                    </Link>
                    
                    <a className="navLink" href={resume} target="_blank" rel="noreferrer">Resume</a>
                </div>
                
            </motion.div>
            
            <motion.div
                className="miniNav"
                variants= {showNav}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={()=> setNavVisibility(!navVisibility)}>
                
                {navVisibility && <MiniNav />}
            </motion.div>
        </div>
    )
}

export default Nav;
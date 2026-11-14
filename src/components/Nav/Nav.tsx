import './Nav.css';
import resume from './Resume.pdf';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from './logo.svg';
import menu from './menu.svg';
import MiniNav from '../MiniNav/MiniNav';

function Nav() {
    const location = useLocation().pathname;

    const [navVisibility, setNavVisibility] = useState(false);

    return (
        <div className="mainNavContainer">
            <div className='nav'>
                <Link to='/'>
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                </Link>
                <div className="menu">
                    {location !== '/projects' &&
                        <Link
                            to={'/projects'}
                            className='navButton'
                        >
                            Projects  →
                        </Link>
                    }
                    <button type="button" aria-label="Toggle navigation" aria-expanded={navVisibility} aria-controls="mobile-navigation" className="hamburgerMenuContainer" onClick={() => setNavVisibility(!navVisibility)}>
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
                        className={(location === '/projects') ? 'active' : 'navLink'}
                        to={"/projects"}
                    >
                        Projects
                    </Link>

                    <Link
                        className={(location === '/contact') ? 'active' : 'navLink'}
                        to={"/contact"}
                    >
                        Contact
                    </Link>

                    <a className="navLink" href={resume} target="_blank" rel="noreferrer">Resume</a>
                </div>

            </div>

            {navVisibility && (
                <div className="miniNav" id="mobile-navigation">
                    <MiniNav onClose={() => setNavVisibility(false)} />
                </div>
            )}
        </div>
    )
}

export default Nav;

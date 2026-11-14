import { Link, useLocation } from 'react-router-dom'
import resume from '../Nav/Resume.pdf'
import './MiniNav.css'
import x from './x.svg'

interface MiniNavProps {
    onClose: () => void;
}

function MiniNav({ onClose }: MiniNavProps) {
    const location = useLocation().pathname;

    return (
        <div className="miniNavContainer">
            <div className="miniNavHeader">
                <button type="button" className="closeMenu" aria-label="Close navigation" onClick={onClose}>
                    <img src={x} alt="" />
                </button>
            </div>
            <div className="miniLinkContainer">
                <Link
                    className={(location === '/') ? 'miniNavActive' : 'miniNavLink'}
                    to={"/"}
                    onClick={onClose}
                >
                    Home
                </Link>

                <Link
                    className={(location === '/projects') ? 'miniNavActive' : 'miniNavLink'}
                    to={"/projects"}
                    onClick={onClose}
                >
                    Projects
                </Link>

                <Link
                    className={(location === '/contact') ? 'miniNavActive' : 'miniNavLink'}
                    to={"/contact"}
                    onClick={onClose}
                >
                    Contact
                </Link>

                <a className="miniNavLink" href={resume} target="_blank" rel="noreferrer" onClick={onClose}>Resume</a>
            </div>
        </div>
    )
}

export default MiniNav;

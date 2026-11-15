import LinkArrow from '../LinkArrow';
import './Footer.css';

function Footer() {
    return (
        <footer className="siteFooter">
            <p>© {new Date().getFullYear()} Parker Satterfield</p>
            <a href="https://web.archive.org/web/20250329034607/https://www.parkersatterfield.com/" target="_blank" rel="noreferrer">
                wayback machine <LinkArrow />
            </a>
        </footer>
    );
}

export default Footer;

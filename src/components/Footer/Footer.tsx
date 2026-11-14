import './Footer.css';

function Footer() {
    return (
        <footer className="siteFooter">
            <p>© {new Date().getFullYear()} Parker Satterfield</p>
            <a href="#top">Back to top <span aria-hidden="true">↑</span></a>
        </footer>
    );
}

export default Footer;

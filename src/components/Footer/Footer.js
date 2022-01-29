import './Footer.css';
import logo from './logo.svg';

function Footer() {
    return (
        <footer className="footerContainer">
            <p>Thanks for visiting!</p>
            <div className="footerLinks">
                <div>
                    <a class="fa fa-github" href="https://github.com/parkersatterfield" target="_blank" rel="noreferrer"> </a>
                </div>
                <div>
                    <a class="fa fa-linkedin"href="https://www.linkedin.com/in/parker-satterfield-22313b160/" target="_blank" rel="noreferrer"> </a>
                </div>
                <div>
                    <a class="fa fa-instagram" href="https://www.instagram.com/parker_satterfield/" target="_blank" rel="noreferrer"> </a>
                </div>
                <div>
                    <a class="fa fa-dribbble" href="https://dribbble.com/parksatt" target="_blank" rel="noreferrer"> </a>
                </div>
            </div>
            <p>© All Rights Reserved</p>
        </footer>
    )
}

export default Footer;
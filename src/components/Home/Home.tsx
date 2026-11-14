import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className='bg'>
            <div className="home">
                <div className="homeTop">
                    <span>W</span>
                    <span>e</span>
                    <span>l</span>
                    <span>c</span>
                    <span>o</span>
                    <span>m</span>
                    <span>e</span>
                    <span>👋</span>
                </div>
                <div className='homeBottom'>
                    <h2>My name is Parker. I'm an engineer, founder, & software developer based in Birmingham.</h2>
                    <div className='homeActions'>
                        <div className="socials">
                            <div>
                                <a aria-label="GitHub" className="fa fa-github" href="https://github.com/parkersatterfield" target="_blank" rel="noreferrer"> </a>
                            </div>
                            <div>
                                <a aria-label="LinkedIn" className="fa fa-linkedin" href="https://www.linkedin.com/in/parker-satterfield-22313b160/" target="_blank" rel="noreferrer"> </a>
                            </div>
                            <div>
                                <a aria-label="Instagram" className="fa fa-instagram" href="https://www.instagram.com/parker_satterfield/" target="_blank" rel="noreferrer"> </a>
                            </div>
                        </div>
                        <Link to='/projects' className='myWorkButton'>
                            Projects →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;

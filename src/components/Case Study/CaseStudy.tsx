import './CaseStudy.css'
import { useLocation } from 'react-router-dom';
import Footer from '../Footer/Footer';

// Strike Project Info
import strikeImage from "../../images/Strike.png"
import strikeStoryboard from "../../images/StrikeStoryboard.png"
import strikePersonas from "../../images/StrikePersonas.png"
import strikePrototypeImage from "../../images/strikePrototypeImage.png"
const strikeName = "Strike"
const strikeLink = "https://www.figma.com/file/AYaEgLvShqEfcRqJbeF217/STRIKE?node-id=6%3A538"
const strikeBackground = 'I have been a mediocre golf player since I was about 8 years old. I play pretty often, but I would love to play more. I recently learned about a few golfing apps such as The Grint and 18 Birdies that act as a social networking and golf tools app. I was excited to try them, but disappointed when I actually tried to use them. For me, the social aspect was lacking, the features were complicated, and the UI was pretty bad. This led me to try my hand at prototyping some UX for a similar app that I called Strike.'
const strikeUserStory = 'As a golfer, I want to keep track of my scores digitally and be a part of an online golfing community so that I can keep track of my progress over time and stay connected to friends with the sport of golf.'
const strikePrototypeLink = 'https://www.figma.com/proto/AYaEgLvShqEfcRqJbeF217/STRIKE?node-id=6%3A558&scaling=scale-down&page-id=6%3A538&starting-point-node-id=6%3A558'

function CaseStudy() {
    const location = useLocation().pathname;

    if (location !== '/casestudy/strike') {
        return (
            <div className="notFound">
                <div>
                    <h2>Case Study Not Found</h2>
                    <a href="/projects">Back to Projects</a>
                </div>
            </div>
        )
    }

    return (
        <div className="workDetailContainer">
            <div className="project projectDetail">
                <a href={strikeLink} target="_blank" rel="noreferrer" className='mainLink'> {strikeName} <span>→</span></a>

                <img src={strikeImage} alt={strikeName} />

                <h2>Background</h2>
                <p>{strikeBackground}</p>

                <h2>User Story</h2>
                <p>{strikeUserStory}</p>

                <h2>User Personas</h2>
                <img src={strikePersonas} alt="project personas" id="personasImage" />

                <img src={strikeStoryboard} alt="project storyboard" id="storyboardImage" />

                <h2><a href={strikePrototypeLink} target="_blank" rel="noreferrer" className='prototypeLink'>Prototype <span>→</span></a></h2>
                <img src={strikePrototypeImage} alt="project prototype" id="prototypeImage" />

            </div>
            <Footer />
        </div>
    )
}

export default CaseStudy;
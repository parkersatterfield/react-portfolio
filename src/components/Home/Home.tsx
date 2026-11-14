import GitHubCard from '../GitHubCard/GitHubCard';
import './Home.css';

function Home() {
    return (
        <section className="intro" aria-labelledby="intro-title">
            <div className="introIdentity">
                <img className="introLogo" src="/logo.svg" width="52" height="37" alt="" />
                <h1 id="intro-title">Parker Satterfield<span>.</span></h1>
            </div>
            <div className="introDetails">
                <p className="introDescription">I build web services and data systems, with a focus on AWS infrastructure, databases, and systems design.</p>
                <GitHubCard />
            </div>
        </section>
    );
}

export default Home;

import GitHubCard from '../GitHubCard/GitHubCard';
import './Home.css';

function Home() {
    return (
        <section className="intro" aria-labelledby="intro-title">
            <div className="introContent">
                <p className="introRole">Software Engineer</p>
                <h1 id="intro-title">Parker Satterfield<span>.</span></h1>
                <p className="introDescription">Senior engineer at EBSCO Information Services, building cloud systems and services that advance research and make knowledge easier to discover and share.</p>
                <GitHubCard />
            </div>
            <img className="introLogo" src="/logo.svg" width="52" height="37" alt="" />
        </section>
    );
}

export default Home;

import './Home.css';
import { Link } from 'react-router-dom';
import blob from './blob.svg'

function Home() {
    return (
        <div className = 'bg' style={{ 
            backgroundImage: `url(${blob})`, 
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top -10px center',
            }} >

            <div className="home">
                <h1>Hello and welcome</h1>
                <h4>to my portfolio page</h4>
                <button>
                    <Link to={'/mywork'}>
                        See My Work!
                    </Link>
                </button>
            </div>
        </div>
    )
}

export default Home;
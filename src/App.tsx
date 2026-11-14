import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="siteShell" id="top">
      <a className="skipLink" href="#main">Skip to content</a>
      <main id="main">
        <Home />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;

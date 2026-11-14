import './App.css';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
import WorkDetail from './components/Work Detail/WorkDetail';
import CaseStudy from './components/Case Study/CaseStudy';

function Portfolio() {
  const { pathname } = useLocation();

  return (
    <div className={pathname === '/' ? 'portfolio portfolioHome' : 'portfolio'}>
      <div className="main">
        <Nav />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project/*" element={<WorkDetail />} />
        <Route path="/casestudy/*" element={<CaseStudy />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Portfolio />
    </BrowserRouter>
  );
}

export default App;

import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './Components/Nav/Nav.tsx';
import Section from './Components/Section/Section.tsx';
import SecondSection from './Components/Second-Section/Second-Section.tsx';
import OfferSection from './Components/OfferSection/OfferSection.tsx';
import Footer from './Components/Footer/Footer.tsx';
import AboutMeSection from './Components/AboutMeSection/AboutMeSection.tsx';

function App() {
  return (
    <div className="App">
      
     <Router>
     <Nav/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/offer" element={<OfferSection />} />
          <Route path="/about-me" element={<AboutMeSection/>} />
        </Routes>
        
        <Footer/>
      </Router>
      
    </div>
  );
}

const HomePage = () => {
  return (
    <>
      <Section customClass="landing-page" />
      <SecondSection />
    </>
  );
};

export default App;

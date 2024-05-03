import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './Components/Nav/Nav.tsx';
import Section from './Components/Section/Section.tsx';
import SecondSection from './Components/Second-Section/Second-Section.tsx';
import OfferSection from './Components/OfferSection/OfferSection.tsx';
import Footer from './Components/Footer/Footer.tsx';
import AboutMeSection from './Components/AboutMeSection/AboutMeSection.tsx';
import ContactSection from './Components/ContactSection/ContactSection.tsx';
import Navv from './Components/Nav/Nav.tsx';
import WeddingOutdoor from './Components/WeddingOutdoor/WeddingOutdoor.tsx';
import EngagementSession from './Components/EngagementSession/EngagementSession.tsx';

function App() {
  return (
    <div className="App">
      
     <Router>
     <Navv/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/offer" element={<OfferSection />} />
          <Route path="/about-me" element={<AboutMeSection/>} />
          <Route path="/contact" element={<ContactSection/>} />
          <Route path="/wedding-outdoor" element={<WeddingOutdoor/>} />
          {/* <Route path="/wedding-reportage" element={<WeddingReportage/>} /> */}
          <Route path="/engagement-session" element={<EngagementSession/>} />
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

import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './Components/Nav/Nav.tsx';
import HomePage from './Components/HomePage/HomePage.tsx';
import OfferSection from './Components/OfferSection/OfferSection.tsx';
import Footer from './Components/Footer/Footer.tsx';
import AboutMeSection from './Components/AboutMeSection/AboutMeSection.tsx';
import ContactSection from './Components/ContactSection/ContactSection.tsx';
import WeddingOutdoor from './Components/WeddingOutdoor/WeddingOutdoor.tsx';
import EngagementSession from './Components/EngagementSession/EngagementSession.tsx';
import Blog from './Components/Blog/Blog.tsx';

function App() {
  return (
    <div className="App">
     <Router>
     <Nav/>
        <Routes>
          <Route path="/" element={<HomePage customClass="landing-page" />} />
          <Route path="/offer" element={<OfferSection />} />
          <Route path="/about-me" element={<AboutMeSection/>} />
          <Route path="/contact" element={<ContactSection/>} />
          <Route path="/wedding-outdoor" element={<WeddingOutdoor/>} />
          <Route path="/engagement-session" element={<EngagementSession/>} />
          <Route path="/blog" element={<Blog/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;

import './App.css';
import Nav from './Components/Nav/Nav.tsx';
import Section from './Components/Section/Section.tsx';
import SecondSection from './Components/Second-Section/Second-Section.tsx';


function App() {
  return (
    <div className="App">
      <Nav />
      <Section customClass="landing-page">
      </Section>
      <SecondSection></SecondSection>
    </div>
  );
}

export default App;
